$('body').addClass('preloader-running');
$('#master-wrap').css('visibility','hidden');


// makes sure the whole site is loaded
$(window).load(function() {
        // will first fade out the loading animation
	$("#status").fadeOut();
        // will fade out the whole DIV that covers the website.
	$("#preloader").delay(1000).fadeOut(1000);
	$('body').removeClass('preloader-running');
	$('body').addClass('preloader-done');
	$("#master-wrap").delay(1000).css('visibility','visible');
});
