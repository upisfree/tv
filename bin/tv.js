!function o(i,r,s){function l(n,e){if(!r[n]){if(!i[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(u)return u(n,!0);e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}t=r[n]={exports:{}};i[n][0].call(t.exports,function(e){var t=i[n][1][e];return l(t||e)},t,t.exports,o,i,r,s)}return r[n].exports}for(var u="function"==typeof require&&require,e=0;e<s.length;e++)l(s[e]);return l}({1:[function(f,e,d){function n(e,t){return e.test(t)}function t(e){var t=(e=e||navigator.userAgent).split("[FBAN");if(void 0!==(t=(e=void 0!==t[1]?t[0]:e).split("Twitter"))[1]&&(e=t[0]),this.apple={phone:n(r,e),ipod:n(s,e),tablet:!n(r,e)&&n(a,e),device:n(r,e)||n(s,e)||n(a,e)},this.amazon={phone:n(u,e),tablet:!n(u,e)&&n(c,e),device:n(u,e)||n(c,e)},this.android={phone:n(u,e)||n(l,e),tablet:!n(u,e)&&!n(l,e)&&(n(c,e)||n(w,e)),device:n(u,e)||n(c,e)||n(l,e)||n(w,e)},this.windows={phone:n(p,e),tablet:n(m,e),device:n(p,e)||n(m,e)},this.other={blackberry:n(y,e),blackberry10:n(v,e),opera:n(h,e),firefox:n(g,e),chrome:n(b,e),device:n(y,e)||n(v,e)||n(h,e)||n(g,e)||n(b,e)},this.seven_inch=n(x,e),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet,"undefined"==typeof window)return this}function o(){var e=new t;return e.Class=t,e}var i,r,s,a,l,w,u,c,p,m,y,v,h,b,g,x;i=this,r=/iPhone/i,s=/iPod/i,a=/iPad/i,l=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,w=/Android/i,u=/(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,c=/(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,p=/Windows Phone/i,m=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,y=/BlackBerry/i,v=/BB10/i,h=/Opera Mini/i,b=/(CriOS|Chrome)(?=.*\bMobile\b)/i,g=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,x=new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),void 0!==e&&e.exports&&"undefined"==typeof window?e.exports=t:void 0!==e&&e.exports&&"undefined"!=typeof window?e.exports=o():"function"==typeof define&&define.amd?define("isMobile",[],i.isMobile=o()):i.isMobile=o()},{}],2:[function(e,t,n){t.exports={playlists:["PLy_pe5XDDZ1LrigQrKoQMKAKqtcxlnjEr"],key:"AIzaSyA8Wb8ZkXnc9XfcRDLON3gF0Vn7NkiQEWw",fastPlay:250,volumeStep:5,volumeGamepadStep:2.5,doubleClickInterval:175,gamepadVolumeInterval:125,logoText:"UP TV",iOSLogoText:"НАЖМИ НА ЭКРАН",mobileSwipeNextLimit:-200,mobileSwipeLeftMult:.65,mobileSwipeRightMult:.25}},{}],3:[function(e,t,n){var o=e("./ui/ui.coffee"),i=e("./utils/element.coffee"),r=e("ismobilejs");o(),window.onYouTubeIframeAPIReady=function(){return e("./player/player.coffee")(function(){if(requestAnimationFrame(e("./tick.coffee")),e("./player/loadList.coffee")(),r.apple.device)return i.hide(i.byId("cover")),e("./player/controls/controls.coffee")()})}},{"./player/controls/controls.coffee":4,"./player/loadList.coffee":9,"./player/player.coffee":10,"./tick.coffee":11,"./ui/ui.coffee":15,"./utils/element.coffee":17,ismobilejs:1}],4:[function(e,t,n){var o=e("./mouse.coffee"),i=e("./keyboard.coffee"),r=e("./touch.coffee");t.exports=function(){return o(),i(),r()}},{"./keyboard.coffee":6,"./mouse.coffee":7,"./touch.coffee":8}],5:[function(e,t,o){var u=e("../../config.coffee"),c=e("../player.coffee")(),n=(e("../../utils/fullscreen.coffee"),{A:0,B:1,Y:2,X:3,L1:4,R1:5,L2:6,R2:7,SELECT:8,START:9,L3:10,R3:11,UP:12,DOWN:13,LEFT:14,RIGHT:15,LOGO:16}),f=0,r=[],s=function(e){switch(e){case n.A:case n.RIGHT:case n.R1:return c.playNext();case n.B:return c.mute()}},d=function(e,t){var n=[],o=0,i=0;if(r[t])for(;o<r[t].length;)!0===r[t][o]&&!1===e.buttons[o].pressed&&s(o),o++;for(;i<e.buttons.length;)r[t]?r[t][i]=e.buttons[i].pressed:n.push(e.buttons[i].pressed),i++;if(!r[t])return r.push(n)};t.exports=function(){for(var e,t,n,o=navigator.getGamepads(),i=0,r=[],s=0,l=o.length;s<l;s++)null!==(t=o[s])&&"standard"===t.mapping?(e=c.getVolume(),50!==(n=50===(n=Math.round((-100*t.axes[1]+100)/2))?Math.round((-100*t.axes[3]+100)/2):n)&&Date.now()-f>u.gamepadVolumeInterval&&(c.setVolume(n),f=Date.now()),t.buttons[12].pressed?c.setVolume(e+u.volumeGamepadStep):t.buttons[13].pressed&&c.setVolume(e-u.volumeGamepadStep),d(t,i),r.push(i++)):r.push(void 0);return r}},{"../../config.coffee":2,"../../utils/fullscreen.coffee":18,"../player.coffee":10}],6:[function(e,t,n){var o=e("../../config.coffee"),i=e("../player.coffee")(),r=e("../../utils/fullscreen.coffee");t.exports=function(){return window.onkeydown=function(e){var t=i.getVolume();switch(e.keyCode){case 38:return i.setVolume(t+o.volumeStep);case 40:return i.setVolume(t-o.volumeStep);case 9:return e.preventDefault()}},window.onkeyup=function(e){switch(e.keyCode){case 32:case 13:case 39:case 9:return i.playNext();case 70:return r.switch();case 77:return i.mute();case 27:if(r.isEnabled())return r.exit()}}}},{"../../config.coffee":2,"../../utils/fullscreen.coffee":18,"../player.coffee":10}],7:[function(e,t,n){var o=e("../../config.coffee"),i=e("../player.coffee")(),r=e("../../utils/fullscreen.coffee");t.exports=function(){return window._clicks=0,window.onclick=function(e){if(window._clicks++,1===window._clicks)return setTimeout(function(){return 1===window._clicks?i.playNext():r.switch(),window._clicks=0},o.doubleClickInterval)},window.onmousewheel=function(e){var t=i.getVolume();return 0<e.wheelDelta?i.setVolume(t+o.volumeStep):i.setVolume(t-o.volumeStep)}}},{"../../config.coffee":2,"../../utils/fullscreen.coffee":18,"../player.coffee":10}],8:[function(e,t,n){var o=e("../../config.coffee"),i=e("../../utils/element.coffee"),r=e("../player.coffee")(),s=(e("../../utils/fullscreen.coffee"),i.byId("video"));t.exports=function(){return window.addEventListener("touchstart",function(e){return window.swipeStartPoint=e.touches[0],s.classList.remove("transition")}),window.addEventListener("touchmove",function(e){return e.preventDefault(),window.swipeCurrentPoint=e.touches[0]}),window.addEventListener("touchend",function(e){return s.classList.add("transition"),window.swipeCurrentPoint.clientX-window.swipeStartPoint.clientX<o.mobileSwipeNextLimit?(s.style.transform="translateX(-100%)",setTimeout(function(){return s.style.transform="translateX(0px)",r.playNext()},350)):s.style.transform="translateX(0px)",window.swipeStartPoint=null,window.swipeCurrentPoint=null})}},{"../../config.coffee":2,"../../utils/element.coffee":17,"../../utils/fullscreen.coffee":18,"../player.coffee":10}],9:[function(e,t,o){var s,l,u,c,f,d,n;e("../utils/array.coffee"),l=e("../config.coffee"),u=e("./controls/controls.coffee"),d=e("./player.coffee")(),n=e("../utils/storage.coffee"),c=e("ismobilejs"),window.videos=[],window.viewed=0,window.viewedVideos=null!=n.get("viewedVideos")?n.get("viewedVideos"):[],s=0,t.exports=f=function(r){var e,t="https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId="+l.playlists[s]+"&key="+l.key;return null!=r&&(t+="&pageToken="+r),(e=new XMLHttpRequest).open("GET",t,!0),e.onload=function(){for(var e,t=JSON.parse(this.responseText),n=t.items,o=0,i=n.length;o<i;o++)e=n[o],videos.push(e.snippet.resourceId.videoId);return t.nextPageToken||s!==l.playlists.length-1?(videos.length>=l.fastPlay&&0===window.viewed&&d._loaded&&(videos.shuffle(),u(),c.apple.device?d.playNext(!0):d.playNext()),null==(r=null!=t.nextPageToken?t.nextPageToken:null)&&(s+=1),f(r)):(videos.splice(0,window.viewed),videos.shuffle())},e.send()}},{"../config.coffee":2,"../utils/array.coffee":16,"../utils/storage.coffee":19,"./controls/controls.coffee":4,"./player.coffee":10,ismobilejs:1}],10:[function(e,t,n){var o,i,r,s,l;e("../utils/array.coffee"),l=e("../utils/storage.coffee"),o=e("../utils/element.coffee"),r=e("../ui/logo.coffee"),i=e("ismobilejs"),(s={_loaded:!1,onReady:function(){return s.yt.setSize(window.innerWidth,window.innerHeight),s._loaded=!0},onStateChange:function(e){if(e.data===YT.PlayerState.ENDED&&s.playNext(),i.apple.device&&e.data===YT.PlayerState.PLAYING)return o.show(o.byId("cover")),r.iOSReturnText()},onError:function(e){return s.playNext()},onPlaybackQualityChange:function(){}}).yt=new YT.Player("video",{playerVars:{rel:0,controls:0,showinfo:0,autoplay:i.apple.device?0:1,disablekb:1,iv_load_policy:3,playsinline:1},events:{onReady:s.onReady,onStateChange:s.onStateChange,onError:s.onError,onPlaybackQualityChange:s.onPlaybackQualityChange}}),window.onresize=function(){return s.yt.setSize(window.innerWidth,window.innerHeight)},s.loadById=function(e){return s.yt.loadVideoById(e)},s.play=function(){return s.yt.playVideo()},s.pause=function(){return s.yt.pauseVideo()},s.loadById=function(e){return s.yt.loadVideoById(e)},s.cueById=function(e){return s.yt.cueVideoById(e)},s.playNext=function(e=!1){window.videos,window.viewed,window.viewedVideos;return null!=window.videos[window.viewed]?-1===window.viewedVideos.indexOf(window.videos[window.viewed])?(e?s.cueById(window.videos[window.viewed]):s.loadById(window.videos[window.viewed]),window.viewedVideos.push(window.videos[window.viewed]),l.set("viewedVideos",window.viewedVideos),window.viewed++):(window.viewed++,s.playNext()):(window.videos.shuffle(),window.viewed=0,window.viewedVideos=[],l.set("viewedVideos",window.viewedVideos),s.playNext())},s.getVolume=function(){return s.yt.getVolume()},s.setVolume=function(e){return s.yt.setVolume(e)},s.mute=function(){return s.yt.isMuted()?s.yt.unMute():s.yt.mute()},t.exports=function(e){return e&&s.yt.addEventListener("onReady",function(){return s.yt.setSize(window.innerWidth,window.innerHeight),s._loaded=!0,e()}),s}},{"../ui/logo.coffee":13,"../utils/array.coffee":16,"../utils/element.coffee":17,"../utils/storage.coffee":19,ismobilejs:1}],11:[function(e,t,n){var o=e("./player/controls/gamepad.coffee"),i=e("./ui/swipeUpdate.coffee"),r=e("./ui/ads.coffee"),s=function(){return r.update(),o(),i(),requestAnimationFrame(s)};t.exports=s},{"./player/controls/gamepad.coffee":5,"./ui/ads.coffee":12,"./ui/swipeUpdate.coffee":14}],12:[function(e,t,n){var o,i,r,s,l;e("../utils/array.coffee"),r=e("../utils/element.coffee"),e("../config.coffee"),s=e("ismobilejs"),o=2,l=0,i=null,t.exports={init:function(){var e=new XMLHttpRequest;return e.open("GET","./assets/ads.json",!0),e.onload=function(){var e=JSON.parse(this.responseText);if(e.shuffle(),(i=r.byId("ads")).textContent=e.join(" "),s.apple.device)return o=.25},e.send()},update:function(){return Math.abs(l)>=i.offsetWidth&&(l=window.innerWidth),l-=o,i.style.transform=`translateX(${l-o}px)`}}},{"../config.coffee":2,"../utils/array.coffee":16,"../utils/element.coffee":17,ismobilejs:1}],13:[function(e,t,n){var o=e("../utils/element.coffee"),i=e("../config.coffee"),r=e("ismobilejs"),s=e("../utils/fullscreen.coffee"),l=null;t.exports={init:function(){return l=o.byId("logo"),r.apple.device&&(l.textContent=i.iOSLogoText),o.byId("fullscreen").addEventListener("click",s.switch)},iOSReturnText:function(){return l.textContent=i.logoText}}},{"../config.coffee":2,"../utils/element.coffee":17,"../utils/fullscreen.coffee":18,ismobilejs:1}],14:[function(e,t,n){var o,i=e("../config.coffee"),r=e("../utils/element.coffee").byId("video");window.swipeStartPoint=null,window.swipeCurrentPoint=null,o=null,t.exports=function(){var e=window.swipeStartPoint,t=window.swipeCurrentPoint;if(e&&t)return t=t.clientX-e.clientX,o=t<0?i.mobileSwipeLeftMult:i.mobileSwipeRightMult,r.style.transform=`translateX(${t*o}px)`}},{"../config.coffee":2,"../utils/element.coffee":17}],15:[function(e,t,n){var o=e("./ads.coffee"),i=e("./logo.coffee");t.exports=function(){return o.init(),i.init()}},{"./ads.coffee":12,"./logo.coffee":13}],16:[function(e,t,n){Array.prototype.shuffle=function(){for(var e,t,n=this.length,o=[];n;)e=Math.floor(Math.random()*n),t=this[--n],this[n]=this[e],o.push(this[e]=t);return o}},{}],17:[function(e,t,n){t.exports={byId:function(e){return document.getElementById(e)},byClass:function(e){return document.getElementsByClassName(e)},byTag:function(e){return document.getElementsByTagName(e)},show:function(e){return e.style.display="block"},hide:function(e){return e.style.display="none"}}},{}],18:[function(e,t,n){var o={isEnabled:function(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement},enter:function(){return document.body.requestFullscreen?document.body.requestFullscreen():document.body.msRequestFullscreen?document.body.msRequestFullscreen():document.body.mozRequestFullScreen?document.body.mozRequestFullScreen():document.body.webkitRequestFullscreen?document.body.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):void 0},exit:function(){return document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():void 0},switch:function(){return o.isEnabled()?o.exit():o.enter()}};t.exports=o},{}],19:[function(e,t,n){t.exports={get:function(e){return JSON.parse(localStorage.getItem(e))},set:function(e,t){return localStorage.setItem(e,JSON.stringify(t))},remove:function(e){return localStorage.removeItem(e)},clear:function(){return localStorage.clear()}}},{}]},{},[3]);