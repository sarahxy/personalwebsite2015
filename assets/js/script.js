$(document).ready(function() {

	/* sticky navigation bar */
	var stickyTop = $('.nav-bar').offset().top;

	$(window).scroll(function() {
		var windowTop = $(window).scrollTop(); // returns number
		if (stickyTop < windowTop) {
			$(".nav-bar").addClass("sticky");
    	} else {
    		$(".nav-bar").removeClass("sticky");
    	}
	});

	/* navigating to pages */
	$('a[href="#about"]').click(function() {
		$('html, body').animate({
	  		scrollTop: $('#about').offset().top
	  	}, 300);
	});

	$('a[href="#experiences"]').click(function() {
	  	$('html, body').animate({
  			scrollTop: $('#experiences').offset().top
  		}, 300);
	});

	$('a[href="#projects"]').click(function() {
	  	$('html, body').animate({
  			scrollTop: $('#projects').offset().top
  		}, 300);
	});

	$('a[href="#contact"]').click(function() {
	  	$('html, body').animate({
  			scrollTop: $('#contact').offset().top
  		}, 300);
	});

	/* animate the social media icons */
	$("#major").click(function() {
		$("#major").text("Writer | Dancer | Musician | Aspiring Designer").fadeIn(500);
	})


	
});