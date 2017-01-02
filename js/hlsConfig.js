
var HLS = {};

HLS.init = function(){
	if(Hls.isSupported()) {
	    var video = document.getElementById('thetaVideo');
	    var hls = new Hls();
	    hls.loadSource('https://wowzaprod110-i.akamaihd.net/hls/live/254539/cf16c4ab/playlist.m3u8');
	    hls.attachMedia(video);
	    hls.on(Hls.Events.MANIFEST_PARSED,function() {
	      video.play();
	      video.volume = 1.0;
	  });
	}
}
