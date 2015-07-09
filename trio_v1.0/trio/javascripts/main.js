// MAIN.JS
//--------------------------------------------------------------------------------------------------------------------------------
//This is main JS file that contains custom JS scipts and initialization used in this template*/
// -------------------------------------------------------------------------------------------------------------------------------
// Template Name: noname.
// Author: ThemeStag.
// Version 1.0 - Initial Release
// Website: http://www.themestag.com 
// Copyright: (C) 2014 
// -------------------------------------------------------------------------------------------------------------------------------

/*global $:false */
/*global window: false */



    $(function ($) {

        //Detecting viewpot dimension.
        var vH = $(window).height();



        // gives action to menu icon which is toggle.
        $(".menu-trigger").click(function(){
            $(".menu-container").toggleClass("menu-visible");      
        });



        // trigering menu icon while click on menu item.
        $(".menu-wrap a").click(function(){
            $('.menu-trigger').trigger('click');
        });



        // rotating menu icon with ease effect.
        $(".menu-trigger").click(function(){
            if ($(this).hasClass('menu-trigger-clicked')){
                $(".menu-trigger").removeClass("menu-trigger-clicked");
            }
            else {
                $(".menu-trigger").addClass("menu-trigger-clicked");
            }        
        });



        // assigning height to about carousel section.
        $('.about-owl-item').css('height',vH);



        // Custom Navigation Events
        $(".next").click(function(){
            owl_about.trigger('owl.next');
        });
        $(".prev").click(function(){
            owl_about.trigger('owl.prev');
        });
       


        // assining height to map section.
        var mapH = vH/"2";
        $('#map').css('height',mapH);
        



        // to show contact form.
        $(".contact-btn").click(function(){
            $(".contct-profile").slideUp();
            $(".contact-form-section").slideDown();

            $(".contact-btn-wrap button").hasClass("");  
                if ($(this).hasClass('contact-btn')){
                    $(".contact-btn-wrap button").removeClass("contact-btn");
                    $(".contact-btn-wrap button").addClass("contact-btn-hidden");
                }
                else {
                    $(".contact-btn-wrap button").addClass("contact-btn");
                } 

            $(".contact-form-close-btn i").css("opacity","1");     
        });



        // to show contact profile or to close contact form.
        $(".contact-form-close-btn i").click(function(){
                $(".contct-profile").slideDown();
                $(".contact-form-section").slideUp();

                $(".contact-btn-wrap button").removeClass("contact-btn-hidden");
                $(".contact-btn-wrap button").addClass("contact-btn");

                $(".contact-form-close-btn i").css("opacity","0");  
        });


      
        // $(".contact-btn-wrap button").click(function(){          
                   
        // });



       

       // customizing owl which is used in about section.
        var owl_about = $("#owl-about");
            owl_about.owlCarousel({
            items : 1, //10 items above 1000px browser width
            autoPlay : true,
            pagination : false,
            navigation : false,
            slideSpeed : 2000,
            transitionStyle : "goDown",
            itemsDesktop: [3000,1],
            itemsDesktopSmall: [1440,1],
            itemsTablet:[1024,1],
            itemsTabletSmall: [640,1],
            itemsMobile: [360,1]
            // itemsMobile : true // itemsMobile disabled - inherit from itemsTablet option
        });

       
      

        // detecting about section to enable counder & menu slide down.
        $('#about').waypoint(function (direction) {
            if (direction == 'down') {   
                $('.timer').countTo();

                // $(".menu-container").addClass("menu-visible");   
                // $(".menu-icon-wrap").removeClass("menu-trigger");  
                $(".nav-section").addClass("header-fix"); 
                $(".menu-container").addClass("margn");
                $(".nav-section").removeClass("header-fix-animate"); 

            } 
            else {
                // $(".menu-container").removeClass("menu-visible");
                // $(".menu-icon-wrap").addClass("menu-trigger"); 
                $(".nav-section").removeClass("header-fix");
                $(".menu-container").removeClass("margn");
                $(".menu-trigger.menu-trigger-clicked").trigger('click'); 
                  $(".nav-section").addClass("header-fix-animate"); 
                            
            }
            
            },
        { offset: 50 });

        //   // gives action to menu icon which is toggle.
        // $(".menu-trigger").click(function(){
        //     $(".menu-container").toggleClass("menu-visible");      
        // });

       



        // intermidiat section owl, it has custom pagination.
        $("#intermediate-owl").owlCarousel({
            items : 1, //10 items above 1000px browser width
            autoPlay : true,
            pagination : true,
            navigation : false,
            slideSpeed : 2000,
            loop : true,
            transitionStyle : 'goDown',
            itemsDesktop: [3000,1],
            itemsDesktopSmall: [1440,1],
            itemsTablet:[1024,1],
            itemsTabletSmall: [640,1],
            itemsMobile: [360,1],
            

            afterInit: function(elem){
                var that = this;
                that.owlControls.prependTo(elem);
                $('#intermediate-owl .intermediate-slide').each(function(){
                    var about_txt = $(this).find('.slide-button-name').html();
                    var about_order = $(this).find('.slide-button-name').data('order');

                    $('#intermediate-owl .owl-pagination .owl-page:nth-child('+about_order+')').find('span').html(about_txt);
                });
        
            },

             afterUpdate: function(elem){
                $('#intermediate-owl .intermediate-slide').each(function(){
                    var about_txt = $(this).find('.slide-button-name').html();
                    var about_order = $(this).find('.slide-button-name').data('order');

                    $('#intermediate-owl .owl-pagination .owl-page:nth-child('+about_order+')').find('span').html(about_txt);
                });
            }
        });



        // testimonial owl.
        $("#owl-testimonial").owlCarousel({
            items : 1, //10 items above 1000px browser width
            autoPlay : true,
            pagination : true,
            navigation : false,
            slideSpeed : 2000,
            loop : true,
            transitionStyle : 'goDown',
            itemsDesktop: [3000,1],
            itemsDesktopSmall: [1440,1],
            itemsTablet:[1024,1],
            itemsTabletSmall: [640,1],
            itemsMobile: [360,1],
            
        });
    

        
        //portfolio filter (isotop) initializing. 
        $('.isotope').isotope({
            itemSelector: '.item',
            masonry: {
            }
        });

                        //forcing a perfect masonry layout after initial load
                        setTimeout(function() {
                            $('.isotope').isotope({
                                itemSelector: '.item',
                                masonry: {
                                }
                            });
                        }, 100);
                        //Isotope ReLayout on Page Load event.
                        $(window).load(function() {
                            
                            $('.isotope').isotope({
                                itemSelector: '.item',
                                masonry: {
                                }
                            });
                        });
                        //Isotope ReLayout on Window Resize event.
                        $(window).on('resize', function() {
                            
                            $('.isotope').isotope({
                                itemSelector: '.item',
                                masonry: {
                                }
                            });
                        });


        // filter items on button click.
        $('#filters .filters').on( 'click', function() {
          if ($(this).hasClass('port-active')){

          }

          else {
            $('#filters .filters').removeClass('port-active');
            $(this).addClass('port-active');
          }
          var filterValue = $(this).attr('data-filter');
            $('.isotope').isotope({ filter: filterValue });
        });



      


        if (Modernizr.touch) {
            // show the close overlay button
            $(".close-overlay").removeClass("hidden");
            // handle the adding of hover class when clicked
            $(".img-wrap").click(function(e){
                if (!$(this).hasClass("hover")) {
                    $(this).addClass("hover");
                }
            });
            // handle the closing of the overlay
            $(".close-overlay").click(function(e){
                e.preventDefault();
                e.stopPropagation();
                if ($(this).closest(".img-wrap").hasClass("hover")) {
                    $(this).closest(".img-wrap").removeClass("hover");
                }
            });
            
            } 

        else {
            // handle the mouseenter functionality
            $(".img-wrap").mouseenter(function(){
                $(this).addClass("hover");
            })
            // handle the mouseleave functionality
            .mouseleave(function(){
                $(this).removeClass("hover");
            });
            }



            /* default settings */
            $('.venobox').venobox(); 
            /* custom settings */
            $('.venobox').venobox({
                framewidth: '600px',        // default: ''
                frameheight: '300px',       // default: ''
                border: '10px',             // default: '0'
                bgcolor: '#fff',         // default: '#fff'
                titleattr: 'data-title',    // default: 'title'
                numeratio: true,            // default: false
                infinigall: true            // default: false
            });

            /* auto-open #firstlink on page load */
            $("#firstlink").venobox().trigger('click');


  






           // Contact Form Ajax Section

         $('#contactform').submit(function(){

         $('.md-content').hide();
         $('.launch_modal').trigger("click");

         // alert(1);
         $.ajax({
         type: $("#contactform").attr('method'),
         url: $("#contactform").attr('action'),
         data: $("#contactform").serialize(),
         success: function(data) {
         if(data == 'success')
         {
         
         $('#contactform').each(function(){ 
         this.reset();
         });

         
         
         $('.md-content').show();
         $('.launch_modal').trigger('click');

         $('.md-close').on('click',function(){

         $('.contact-form-wrap').fadeOut(1000);

         });

         }
         else
         {
         $('.md-content').show();
         $('.md-content h3').html('Something went wrong!');
         $('.md-content p').html('Please try again.');
         }
         }
         });
         return false;
         });


}); 



  









