


$(function ($) {



    //Detecting viewpot dimension
    var vH = $(window).height();
    
    //Adjusting Intro Components Spacing based on detected screen resolution
    $('#index-02-owl .each-slide').css('height',vH);


    var index_02_owl = $("#index-02-owl");
    index_02_owl.owlCarousel({
        items : 1, //10 items above 1000px browser width
        autoPlay : true,
        pagination : false,
        navigation : false,
        transitionStyle : "goDown",
        loop:true,
        itemsDesktop: [3000,1],
        itemsDesktopSmall: [1440,1],
        itemsTablet:[1024,1],
        itemsTabletSmall: [640,1],
        itemsMobile: [360,1],
        
    });

    // Custom Navigation Events
    $(".next").click(function(){
    index_02_owl.trigger('owl.next');
    });
    $(".prev").click(function(){
    index_02_owl.trigger('owl.prev');
    });

});