!function e(n,o,t){function r(a,u){if(!o[a]){if(!n[a]){var f="function"==typeof require&&require;if(!u&&f)return f(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var c=o[a]={exports:{}};n[a][0].call(c.exports,function(e){var o=n[a][1][e];return r(o?o:e)},c,c.exports,e,n,o,t)}return o[a].exports}for(var i="function"==typeof require&&require,a=0;a<t.length;a++)r(t[a]);return r}({1:[function(e,n,o){var t;t={playlistId:"PLy_pe5XDDZ1IyDxrlXRuz-Qz4gBft5cmt",key:"AIzaSyA8Wb8ZkXnc9XfcRDLON3gF0Vn7NkiQEWw",fastPlay:250,volumeStep:20},n.exports=t},{}],2:[function(e,n,o){var t,r,i,a;t=e("./config.coffee"),a=e("./utils.coffee"),i=e("./player.coffee"),r=function(){return a.byId("cover").onclick=function(){return i.playNext()},window.onkeyup=function(e){switch(e.keyCode){case 32:case 13:case 39:case 38:return i.playNext()}},window.onmousewheel=function(e){var n;return n=i.getVolume(),e.wheelDelta>0?i.setVolume(n+t.volumeStep):i.setVolume(n-t.volumeStep)},window.addEventListener("touchmove",function(e){return e.preventDefault(),i.setVolume(100-Math.round(100*e.touches[0].clientY/window.innerHeight))})},n.exports=r},{"./config.coffee":1,"./player.coffee":5,"./utils.coffee":6}],3:[function(e,n,o){window.onYouTubeIframeAPIReady=function(){var n,o,t;return o=e("./loadList.coffee"),n=e("./controls.coffee"),t=e("./player.coffee"),n(),o()}},{"./controls.coffee":2,"./loadList.coffee":4,"./player.coffee":5}],4:[function(e,n,o){var t,r,i,a;t=e("./config.coffee"),i=e("./player.coffee"),a=e("./utils.coffee"),window.videos=[],window.viewed=0,r=function(e){var n,o,u,f;return o=window.videos,u=window.viewed,n="https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId="+t.playlistId+"&key="+t.key,null!=e&&(n+="&pageToken="+e),f=new XMLHttpRequest,f.open("GET",n,!0),f.onload=function(){var e,n,f,l,c;for(c=JSON.parse(this.responseText),l=c.items,e=0,f=l.length;f>e;e++)n=l[e],o.push(n.snippet.resourceId.videoId);return c.nextPageToken?(o.length>=t.fastPlay&&0===u&&i._loaded&&(o=a.shuffleArray(o),i.playNext()),r(c.nextPageToken)):(o.splice(0,u),o=a.shuffleArray(o))},f.send()},n.exports=r},{"./config.coffee":1,"./player.coffee":5,"./utils.coffee":6}],5:[function(e,n,o){var t,r;r=e("./utils.coffee"),t={onReady:function(){return t.yt.setSize(window.innerWidth,window.innerHeight),t._loaded=!0},onStateChange:function(e){return e.data===YT.PlayerState.ENDED?t.playNext():void 0},onError:function(){return t.playNext()},onPlaybackQualityChange:function(){},_loaded:!1},t.yt=new YT.Player("video",{playerVars:{rel:0,controls:0,showinfo:0,autoplay:1,disablekb:1,iv_load_policy:3},events:{onReady:t.onReady,onStateChange:t.onStateChange,onError:t.onError,onPlaybackQualityChange:t.onPlaybackQualityChange}}),window.onresize=function(){return t.yt.setSize(window.innerWidth,window.innerHeight)},t.loadById=function(e){return t.yt.loadVideoById(e)},t.play=function(){return t.yt.playVideo()},t.pause=function(){return t.yt.pauseVideo()},t.loadById=function(e){return t.yt.loadVideoById(e)},t.playNext=function(){var e,n;return window.viewed++,e=window.videos,n=window.viewed,null!=e[n]?t.loadById(e[n]):(e=r.shuffleArray(e),n=0,t.loadById(e[n]))},t.getVolume=function(){return t.yt.getVolume()},t.setVolume=function(e){return t.yt.setVolume(e)},n.exports=t},{"./utils.coffee":6}],6:[function(e,n,o){var t;t={random:function(e,n){return Math.floor(Math.random()*(n-e+1))+e},byId:function(e){return document.getElementById(e)},byClass:function(e){return document.getElementsByClassName(e)},byTag:function(e){return document.getElementsByTagName(e)},shuffleArray:function(e){var n,o,t;for(n=e.length;n;)o=Math.floor(Math.random()*n),n-=1,t=e[n],e[n]=e[o],e[o]=t;return e}},n.exports=t},{}]},{},[3]);