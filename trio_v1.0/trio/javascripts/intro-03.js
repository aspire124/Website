


(function(){
 "use strict";


	$(document).ready(function() {

		var vH = $(window).height();

    	$('#intro-03').css('height',vH);

		if( !device.tablet() && !device.mobile() ) {

			/* plays the BG video if non-mobile device is detected*/ 
			$(".bg-video-wrap .player").YTPlayer();
	 
		} 

		else {
	 
			/* displays a poster image if mobile device is detected*/ 
			$('.bg-video-wrapv .player').addClass('hide');
			$('#intro-03').addClass('video-poster-image');
	 
	 	}

	});


})();
