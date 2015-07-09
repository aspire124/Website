




//Parallax INIT
//Initialize Each Parallax Layer  
  function parallaxInit() {
    $('.parallax, .parallax-layer').each(function() {
        $(this).parallax("50%", 0.4);
    });
  } 

  if( !device.tablet() && !device.mobile() ) {

      //Activating Parallax effect if non-mobile device is detected
      $(window).bind('load', function () {
        parallaxInit();             
      });


  } else  {
        
      //Dectivate Parallax effect if mobile device is detected (bg image is displayed)
      $('.parallax, .parallax-layer').addClass('no-parallax');
        
      }

