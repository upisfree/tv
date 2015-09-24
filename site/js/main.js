// utils
function random(min, max) 
{
  return Math.floor(Math.random() * (max - min + 1)) + min; 
};

// http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array)
{
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex)
  {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function resize()
{
  window.w = window.innerWidth;
  window.h = window.innerHeight;
};

function rgbToHex(r, g, b)
{
  return '#' + r.toString(16) + g.toString(16) + b.toString(16);
};

// https://github.com/liabru/matter-js/blob/master/src/core/Common.js#L118
function shadeColor(color, percent)
{   
  // http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color
  var colorInteger = parseInt(color.slice(1),16), 
      amount = Math.round(2.55 * percent), 
      R = (colorInteger >> 16) + amount, 
      B = (colorInteger >> 8 & 0x00FF) + amount, 
      G = (colorInteger & 0x0000FF) + amount;
  return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R :255) * 0x10000 
          + (B < 255 ? B < 1 ? 0 : B : 255) * 0x100 
          + (G < 255 ? G < 1 ? 0 : G : 255)).toString(16).slice(1);
};

function noiseOn()
{
  var img = document.getElementById('noise');
  img.style.display = 'block';
  img.src = './site/assets/noise/' + random(1, 9) + '.gif'; // lazy
  
  var audio = document.getElementById('audio');

  if (audio.volume == 1) // first play
  {
    audio.volume = 0.5;
  };

  audio.play();
};

function noiseOff()
{
  var img = document.getElementById('noise');
  img.style.display = 'none';
  
  var audio = document.getElementById('audio');
  audio.pause();
};

// vars
var config =
{
  playlistID: 'PLy_pe5XDDZ1IyDxrlXRuz-Qz4gBft5cmt',
  key: 'AIzaSyA8Wb8ZkXnc9XfcRDLON3gF0Vn7NkiQEWw'
};

var videos = [],
    player,
    viewed = 0;

// load videos urls
function loadVideos(token)
{
  var url = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet' +
                                                               '&maxResults=50' +
                                                               '&playlistId=' + config.playlistID +
                                                               '&key=' + config.key;

  if (token !== undefined)
  {
    url += '&pageToken=' + token;
  };

  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onload = function()
  {
    var res = JSON.parse(this.responseText);

    for (var i = 0; i < res.items.length; i++)
    {
      videos.push(res.items[i]);
    };

    if (res.nextPageToken) // recursively load all videos usin nextPageToken
    {
      loadVideos(res.nextPageToken);
    }
    else
    {
      videos = shuffle(videos);

      player.loadVideoById(videos[viewed].snippet.resourceId.videoId);
    };
  };

  xhr.send();
};

// load YouTube player
function loadPlayerAPI()
{
  var tag = document.createElement('script');
  tag.src = "https://youtube.com/iframe_api";

  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
};

function onYouTubeIframeAPIReady()
{
  player = new YT.Player('video',
  {
    playerVars:
    {
      'rel': 0, // remove related videos
      'controls': 0, // remove controls
      'showinfo': 0, // remove title
      'autoplay': 1, // ???
      'disablekb': 1, // remove keyboard controls
      'iv_load_policy': 3 // remove annotations
    },
    events:
    {
      'onStateChange': onPlayerStateChange,
      'onError': onPlayerError,
      'onPlaybackQualityChange': onPlayerPlaybackQualityChange
    }
  });

  loadVideos(); // yes, synchronously
};

// events
function onPlayerStateChange(event)
{
  if (event.data == 0) // is video end?
  {
    showNextVideo();
  }
};

function onPlayerError(event)
{
  location.reload(); // why not?
};

function onPlayerPlaybackQualityChange(event)
{
  // animation
};

// not events
function showNextVideo()
{
  viewed += 1;

  if (viewed >= videos.length - 1) // real infinity, yes?
  {
    videos = shuffle(videos);
    viewed = 0;
  };

  player.stopVideo();
  noiseOn();

  setTimeout(function()
  {
    noiseOff();
    player.loadVideoById(videos[viewed].snippet.resourceId.videoId);
  }, 1000);
};

// start
loadPlayerAPI();

// logo's things
var logo = document.getElementById('logo');

logo.onclick = function()
{
  showNextVideo();
};

logo.onmouseover = function()
{
  var color = shadeColor(rgbToHex(random(0, 255), random(0, 255), random(0, 255)), -20);

  logo.style.color = logo.style.borderColor = color;
};