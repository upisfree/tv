!function e(t,n,o){function i(u,s){if(!n[u]){if(!t[u]){var l="function"==typeof require&&require;if(!s&&l)return l(u,!0);if(r)return r(u,!0);var f=new Error("Cannot find module '"+u+"'");throw f.code="MODULE_NOT_FOUND",f}var c=n[u]={exports:{}};t[u][0].call(c.exports,function(e){var n=t[u][1][e];return i(n?n:e)},c,c.exports,e,t,n,o)}return n[u].exports}for(var r="function"==typeof require&&require,u=0;u<o.length;u++)i(o[u]);return i}({1:[function(e,t,n){!function(e){var n=/iPhone/i,o=/iPod/i,i=/iPad/i,r=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,u=/Android/i,s=/(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,l=/(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,f=/Windows Phone/i,c=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,d=/BlackBerry/i,a=/BB10/i,p=/Opera Mini/i,w=/(CriOS|Chrome)(?=.*\bMobile\b)/i,y=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,m=new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),v=function(e,t){return e.test(t)},h=function(e){var t=e||navigator.userAgent,h=t.split("[FBAN");if("undefined"!=typeof h[1]&&(t=h[0]),h=t.split("Twitter"),"undefined"!=typeof h[1]&&(t=h[0]),this.apple={phone:v(n,t),ipod:v(o,t),tablet:!v(n,t)&&v(i,t),device:v(n,t)||v(o,t)||v(i,t)},this.amazon={phone:v(s,t),tablet:!v(s,t)&&v(l,t),device:v(s,t)||v(l,t)},this.android={phone:v(s,t)||v(r,t),tablet:!v(s,t)&&!v(r,t)&&(v(l,t)||v(u,t)),device:v(s,t)||v(l,t)||v(r,t)||v(u,t)},this.windows={phone:v(f,t),tablet:v(c,t),device:v(f,t)||v(c,t)},this.other={blackberry:v(d,t),blackberry10:v(a,t),opera:v(p,t),firefox:v(y,t),chrome:v(w,t),device:v(d,t)||v(a,t)||v(p,t)||v(y,t)||v(w,t)},this.seven_inch=v(m,t),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet,"undefined"==typeof window)return this},b=function(){var e=new h;return e.Class=h,e};"undefined"!=typeof t&&t.exports&&"undefined"==typeof window?t.exports=h:"undefined"!=typeof t&&t.exports&&"undefined"!=typeof window?t.exports=b():"function"==typeof define&&define.amd?define("isMobile",[],e.isMobile=b()):e.isMobile=b()}(this)},{}],2:[function(e,t,n){var o;o={playlists:["PLy_pe5XDDZ1IyDxrlXRuz-Qz4gBft5cmt","PLy_pe5XDDZ1LrigQrKoQMKAKqtcxlnjEr"],key:"AIzaSyA8Wb8ZkXnc9XfcRDLON3gF0Vn7NkiQEWw",fastPlay:250,volumeStep:5,volumeGamepadStep:2.5,doubleClickInterval:175,gamepadVolumeInterval:125,logoText:"UP TV",iOSLogoText:"НАЖМИ НА ЭКРАН"},t.exports=o},{}],3:[function(e,t,n){var o,i,r;r=e("./ui/ui.coffee"),o=e("./utils/element.coffee"),i=e("ismobilejs"),r(),window.onYouTubeIframeAPIReady=function(){return e("./player/player.coffee")(function(){if(requestAnimationFrame(e("./tick.coffee")),e("./player/loadList.coffee")(),i.apple.device)return o.hide(o.byId("cover"))})}},{"./player/loadList.coffee":9,"./player/player.coffee":10,"./tick.coffee":11,"./ui/ui.coffee":14,"./utils/element.coffee":16,ismobilejs:1}],4:[function(e,t,n){var o,i,r,u;r=e("./mouse.coffee"),i=e("./keyboard.coffee"),u=e("./touch.coffee"),o=function(){return r(),i(),u()},t.exports=o},{"./keyboard.coffee":6,"./mouse.coffee":7,"./touch.coffee":8}],5:[function(e,t,n){var o,i,r,u,s,l,f,c,d;u=e("../../config.coffee"),l=e("../player.coffee")(),s=e("../../utils/fullscreen.coffee"),o={A:0,B:1,Y:2,X:3,L1:4,R1:5,L2:6,R2:7,SELECT:8,START:9,L3:10,R3:11,UP:12,DOWN:13,LEFT:14,RIGHT:15,LOGO:16},r=0,i=[],f=function(e){switch(e){case o.A:case o.RIGHT:case o.R1:return l.playNext();case o.B:return l.mute()}},d=function(e,t){var n,o,r;if(r=[],n=0,o=0,i[t])for(;n<i[t].length;)i[t][n]===!0&&e.buttons[n].pressed===!1&&f(n),n++;for(;o<e.buttons.length;)i[t]?i[t][o]=e.buttons[o].pressed:r.push(e.buttons[o].pressed),o++;if(!i[t])return i.push(r)},c=function(){var e,t,n,o,i,s,f,c;for(o=navigator.getGamepads(),n=0,f=[],i=0,s=o.length;i<s;i++)t=o[i],null!==t&&"standard"===t.mapping?(e=l.getVolume(),c=Math.round((t.axes[1]*-100+100)/2),50===c&&(c=Math.round((t.axes[3]*-100+100)/2)),50!==c&&Date.now()-r>u.gamepadVolumeInterval&&(l.setVolume(c),r=Date.now()),t.buttons[12].pressed?l.setVolume(e+u.volumeGamepadStep):t.buttons[13].pressed&&l.setVolume(e-u.volumeGamepadStep),d(t,n),f.push(n++)):f.push(void 0);return f},t.exports=c},{"../../config.coffee":2,"../../utils/fullscreen.coffee":17,"../player.coffee":10}],6:[function(e,t,n){var o,i,r,u;o=e("../../config.coffee"),u=e("../player.coffee")(),i=e("../../utils/fullscreen.coffee"),r=function(){return window.onkeydown=function(e){var t;switch(t=u.getVolume(),e.keyCode){case 38:return u.setVolume(t+o.volumeStep);case 40:return u.setVolume(t-o.volumeStep);case 9:return e.preventDefault()}},window.onkeyup=function(e){switch(e.keyCode){case 32:case 13:case 39:case 9:return u.playNext();case 70:return i["switch"]();case 77:return u.mute();case 27:if(i.isEnabled())return i.exit()}}},t.exports=r},{"../../config.coffee":2,"../../utils/fullscreen.coffee":17,"../player.coffee":10}],7:[function(e,t,n){var o,i,r,u;o=e("../../config.coffee"),u=e("../player.coffee")(),i=e("../../utils/fullscreen.coffee"),r=function(){return window._clicks=0,window.onclick=function(e){if(window._clicks++,1===window._clicks)return setTimeout(function(){return 1===window._clicks?u.playNext():i["switch"](),window._clicks=0},o.doubleClickInterval)},window.onmousewheel=function(e){var t;return t=u.getVolume(),e.wheelDelta>0?u.setVolume(t+o.volumeStep):u.setVolume(t-o.volumeStep)}},t.exports=r},{"../../config.coffee":2,"../../utils/fullscreen.coffee":17,"../player.coffee":10}],8:[function(e,t,n){var o,i,r,u;o=e("../../config.coffee"),r=e("../player.coffee")(),i=e("../../utils/fullscreen.coffee"),u=function(){return window.addEventListener("touchend",function(e){return r.playNext()})},t.exports=u},{"../../config.coffee":2,"../../utils/fullscreen.coffee":17,"../player.coffee":10}],9:[function(e,t,n){var o,i,r,u,s,l,f;e("../utils/array.coffee"),i=e("../config.coffee"),r=e("./controls/controls.coffee"),l=e("./player.coffee")(),f=e("../utils/storage.coffee"),u=e("ismobilejs"),window.videos=[],window.viewed=0,window.viewedVideos=null!=f.get("viewedVideos")?f.get("viewedVideos"):[],o=0,s=function(e){var t,n;return t="https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId="+i.playlists[o]+"&key="+i.key,null!=e&&(t+="&pageToken="+e),n=new XMLHttpRequest,n.open("GET",t,!0),n.onload=function(){var t,n,f,c,d;for(d=JSON.parse(this.responseText),c=d.items,t=0,f=c.length;t<f;t++)n=c[t],videos.push(n.snippet.resourceId.videoId);return d.nextPageToken||o!==i.playlists.length-1?(videos.length>=i.fastPlay&&0===window.viewed&&l._loaded&&(videos.shuffle(),r(),u.apple.device?l.playNext(!0):l.playNext()),e=null!=d.nextPageToken?d.nextPageToken:null,null==e&&(o+=1),s(e)):(videos.splice(0,window.viewed),videos.shuffle())},n.send()},t.exports=s},{"../config.coffee":2,"../utils/array.coffee":15,"../utils/storage.coffee":18,"./controls/controls.coffee":4,"./player.coffee":10,ismobilejs:1}],10:[function(e,t,n){var o,i,r,u,s;e("../utils/array.coffee"),s=e("../utils/storage.coffee"),o=e("../utils/element.coffee"),r=e("../ui/logo.coffee"),i=e("ismobilejs"),u={},u._loaded=!1,u.onReady=function(){return u.yt.setSize(window.innerWidth,window.innerHeight),u._loaded=!0},u.onStateChange=function(e){if(e.data===YT.PlayerState.ENDED&&u.playNext(),i.apple.device&&(e.data===YT.PlayerState.PLAYING&&(o.show(o.byId("cover")),r.iOSReturnText()),e.data===YT.PlayerState.PAUSED))return u.play()},u.onError=function(e){return u.playNext()},u.onPlaybackQualityChange=function(){},u.yt=new YT.Player("video",{playerVars:{rel:0,controls:0,showinfo:0,autoplay:i.apple.device?0:1,disablekb:1,iv_load_policy:3,playsinline:1},events:{onReady:u.onReady,onStateChange:u.onStateChange,onError:u.onError,onPlaybackQualityChange:u.onPlaybackQualityChange}}),window.onresize=function(){return u.yt.setSize(window.innerWidth,window.innerHeight)},u.loadById=function(e){return u.yt.loadVideoById(e)},u.play=function(){return u.yt.playVideo()},u.pause=function(){return u.yt.pauseVideo()},u.loadById=function(e){return u.yt.loadVideoById(e)},u.cueById=function(e){return u.yt.cueVideoById(e)},u.playNext=function(e){var t,n,o;return null==e&&(e=!1),t=window.videos,n=window.viewed,o=window.viewedVideos,null!=window.videos[window.viewed]?window.viewedVideos.indexOf(window.videos[window.viewed])===-1?(e?u.cueById(window.videos[window.viewed]):u.loadById(window.videos[window.viewed]),window.viewedVideos.push(window.videos[window.viewed]),s.set("viewedVideos",window.viewedVideos),window.viewed++):(window.viewed++,u.playNext()):(window.videos.shuffle(),window.viewed=0,window.viewedVideos=[],s.set("viewedVideos",window.viewedVideos),u.playNext())},u.getVolume=function(){return u.yt.getVolume()},u.setVolume=function(e){return u.yt.setVolume(e)},u.mute=function(){return u.yt.isMuted()?u.yt.unMute():u.yt.mute()},t.exports=function(e){return e?(u.yt.addEventListener("onReady",function(){return u.yt.setSize(window.innerWidth,window.innerHeight),u._loaded=!0,e()}),u):u}},{"../ui/logo.coffee":13,"../utils/array.coffee":15,"../utils/element.coffee":16,"../utils/storage.coffee":18,ismobilejs:1}],11:[function(e,t,n){var o,i,r;i=e("./player/controls/gamepad.coffee"),o=e("./ui/ads.coffee"),r=function(){return o.update(),i(),requestAnimationFrame(r)},t.exports=r},{"./player/controls/gamepad.coffee":5,"./ui/ads.coffee":12}],12:[function(e,t,n){var o,i,r,u,s,l,f,c;e("../utils/array.coffee"),s=e("../utils/element.coffee"),r=e("../config.coffee"),f=e("ismobilejs"),i=2,c=0,u=null,l="НАЖМИ НА КРАСНУЮ КНОПКУ",o={init:function(){var e,t;return e="./assets/ads.json",t=new XMLHttpRequest,t.open("GET",e,!0),t.onload=function(){var e;if(e=JSON.parse(this.responseText),e.shuffle(),u=s.byId("ads"),u.textContent=e.join(" "),f.apple.device)return i=.25},t.send()},update:function(){return Math.abs(c)>=u.offsetWidth&&(c=window.innerWidth),c-=i,u.style.transform="translateX("+(c-i)+"px)"}},t.exports=o},{"../config.coffee":2,"../utils/array.coffee":15,"../utils/element.coffee":16,ismobilejs:1}],13:[function(e,t,n){var o,i,r,u,s;r=e("../utils/element.coffee"),o=e("../config.coffee"),u=e("ismobilejs"),i=null,s={init:function(){if(i=r.byId("logo"),u.apple.device)return i.textContent=o.iOSLogoText},iOSReturnText:function(){return i.textContent=o.logoText}},t.exports=s},{"../config.coffee":2,"../utils/element.coffee":16,ismobilejs:1}],14:[function(e,t,n){var o,i,r;o=e("./ads.coffee"),i=e("./logo.coffee"),r=function(){return o.init(),i.init()},t.exports=r},{"./ads.coffee":12,"./logo.coffee":13}],15:[function(e,t,n){Array.prototype.shuffle=function(){var e,t,n,o;for(e=this.length,n=[];e;)t=Math.floor(Math.random()*e),e-=1,o=this[e],this[e]=this[t],n.push(this[t]=o);return n}},{}],16:[function(e,t,n){var o;o={byId:function(e){return document.getElementById(e)},byClass:function(e){return document.getElementsByClassName(e)},byTag:function(e){return document.getElementsByTagName(e)},show:function(e){return e.style.display="block"},hide:function(e){return e.style.display="none"}},t.exports=o},{}],17:[function(e,t,n){var o;o={isEnabled:function(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement},enter:function(){return document.body.requestFullscreen?document.body.requestFullscreen():document.body.msRequestFullscreen?document.body.msRequestFullscreen():document.body.mozRequestFullScreen?document.body.mozRequestFullScreen():document.body.webkitRequestFullscreen?document.body.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):void 0},exit:function(){return document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():void 0},"switch":function(){return o.isEnabled()?o.exit():o.enter()}},t.exports=o},{}],18:[function(e,t,n){var o;o={get:function(e){return JSON.parse(localStorage.getItem(e))},set:function(e,t){return localStorage.setItem(e,JSON.stringify(t))},remove:function(e){return localStorage.removeItem(e)},clear:function(){return localStorage.clear()}},t.exports=o},{}]},{},[3]);