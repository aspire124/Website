


$(document).ready(function($) {


	var vH = $(window).height();

    $('#intro-04').css('height',vH);



		if( !device.tablet() && !device.mobile() ) {
			

			/* plays the BG Vimeo or Youtube video if non-mobile device is detected */ 
			$.okvideo({ source: '112539263', //set your video source here
			                    volume: 0, 
			                    loop: true,
			                    adproof: true,
			                    annotations: false,
		                 });
						
		} else {
			
			/* displays a poster image if mobile device is detected*/ 
			$('.intro-04').addClass('video-poster-image');
			
		}


});


