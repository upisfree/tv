!function e(n,t,o){function r(i,a){if(!t[i]){if(!n[i]){var l="function"==typeof require&&require;if(!a&&l)return l(i,!0);if(u)return u(i,!0);var f=new Error("Cannot find module '"+i+"'");throw f.code="MODULE_NOT_FOUND",f}var c=t[i]={exports:{}};n[i][0].call(c.exports,function(e){var t=n[i][1][e];return r(t?t:e)},c,c.exports,e,n,t,o)}return t[i].exports}for(var u="function"==typeof require&&require,i=0;i<o.length;i++)r(o[i]);return r}({1:[function(e,n,t){var o;o={playlistId:"PLy_pe5XDDZ1IyDxrlXRuz-Qz4gBft5cmt",key:"AIzaSyA8Wb8ZkXnc9XfcRDLON3gF0Vn7NkiQEWw",fastPlay:250,volumeStep:20},n.exports=o},{}],2:[function(e,n,t){var o,r,u,i;o=e("./config.coffee"),i=e("./utils.coffee"),u=e("./player.coffee"),r=function(){return i.byId("cover").onclick=function(){return u.playNext()},window.onkeyup=function(e){var n;switch(n=u.getVolume(),e.keyCode){case 32:case 13:case 39:return u.playNext();case 38:return u.setVolume(n+o.volumeStep);case 40:return u.setVolume(n-o.volumeStep)}},window.onmousewheel=function(e){var n;return n=u.getVolume(),e.wheelDelta>0?u.setVolume(n+o.volumeStep):u.setVolume(n-o.volumeStep)},window.addEventListener("touchmove",function(e){return e.preventDefault(),u.setVolume(100-Math.round(100*e.touches[0].clientY/window.innerHeight))})},n.exports=r},{"./config.coffee":1,"./player.coffee":5,"./utils.coffee":6}],3:[function(e,n,t){window.onYouTubeIframeAPIReady=function(){return e("./loadList.coffee")()}},{"./loadList.coffee":4}],4:[function(e,n,t){var o,r,u,i,a;o=e("./config.coffee"),r=e("./controls.coffee"),i=e("./player.coffee"),a=e("./utils.coffee"),window.videos=[],window.viewed=0,u=function(e){var n,t,l,f;return t=window.videos,l=window.viewed,n="https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId="+o.playlistId+"&key="+o.key,null!=e&&(n+="&pageToken="+e),f=new XMLHttpRequest,f.open("GET",n,!0),f.onload=function(){var e,n,f,c,d;for(d=JSON.parse(this.responseText),c=d.items,e=0,f=c.length;f>e;e++)n=c[e],t.push(n.snippet.resourceId.videoId);return d.nextPageToken?(t.length>=o.fastPlay&&0===l&&i._loaded&&(t=a.shuffleArray(t),r(),i.playNext()),u(d.nextPageToken)):(t.splice(0,l),t=a.shuffleArray(t))},f.send()},n.exports=u},{"./config.coffee":1,"./controls.coffee":2,"./player.coffee":5,"./utils.coffee":6}],5:[function(e,n,t){var o,r;r=e("./utils.coffee"),o={onReady:function(){return o.yt.setSize(window.innerWidth,window.innerHeight),o._loaded=!0},onStateChange:function(e){return e.data===YT.PlayerState.ENDED?o.playNext():void 0},onError:function(){return o.playNext()},onPlaybackQualityChange:function(){},_loaded:!1},o.yt=new YT.Player("video",{playerVars:{rel:0,controls:0,showinfo:0,autoplay:1,disablekb:1,iv_load_policy:3},events:{onReady:o.onReady,onStateChange:o.onStateChange,onError:o.onError,onPlaybackQualityChange:o.onPlaybackQualityChange}}),window.onresize=function(){return o.yt.setSize(window.innerWidth,window.innerHeight)},o.loadById=function(e){return o.yt.loadVideoById(e)},o.play=function(){return o.yt.playVideo()},o.pause=function(){return o.yt.pauseVideo()},o.loadById=function(e){return o.yt.loadVideoById(e)},o.playNext=function(){var e,n;return window.viewed++,e=window.videos,n=window.viewed,null!=e[n]?o.loadById(e[n]):(e=r.shuffleArray(e),n=0,o.loadById(e[n]))},o.getVolume=function(){return o.yt.getVolume()},o.setVolume=function(e){return o.yt.setVolume(e)},n.exports=o},{"./utils.coffee":6}],6:[function(e,n,t){var o;o={random:function(e,n){return Math.floor(Math.random()*(n-e+1))+e},byId:function(e){return document.getElementById(e)},byClass:function(e){return document.getElementsByClassName(e)},byTag:function(e){return document.getElementsByTagName(e)},shuffleArray:function(e){var n,t,o;for(n=e.length;n;)t=Math.floor(Math.random()*n),n-=1,o=e[n],e[n]=e[t],e[t]=o;return e}},n.exports=o},{}]},{},[3]);