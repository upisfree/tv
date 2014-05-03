var isYouYura = confirm('Are you Yura?');

function random(min, max) 
{
  return Math.floor(Math.random() * (max - min + 1)) + min; 
};

function changeColors()
{
  var a = random(0, 255),
      b = random(0, 255),
      c = random(0, 255);

  $('body').css('background-color', 'rgb(' + a + ', ' + b + ', ' + c + ')');
  $('h1').css('color', 'rgb(' + (255 - a) + ', ' + (255 - b) + ', ' + (255 - c) + ')');
};

$(function()
{
  setInterval(function()
  {
    changeColors();
  }, 2500);

  $('body').mousemove(function(event)
  {
    if (isYouYura)
    {
      changeColors();
      $('body, h1').css({'-webkit-transition': 'none', 'transition': 'none', '-ms-transition': 'none', '-o-transition': 'none', '-moz-transition': 'none'});
    };

    $('#flashlight').css(
    {
      top: event.pageY - 100,
      left: event.pageX - 100
    });
  });
});