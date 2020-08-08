/*
Theme Name:     JTHEME
Version:        1.0
Description:    Custom JS for the theme
*/
/* 
	All custom ids and classes used for the theme, starts with "jtheme".
	For demo 1 to demo 6, it uses "jtheme".
	For demo 2, it uses "jthemeD2".
	For demo 3, it uses "jthemeD3".
	For demo 4, it uses "jthemeD4".
	For demo 5, it uses "jthemeD5".
	For demo 6, it uses "jthemeD6".
	For index page, it uses "jthemeIndex".
	For documentation page, it uses "jthemeDoc".
*/
/* TABLE OF CONTENTS
	1. owl carousel
		1.1 for demo 1 to demo 6
			1.1.1 .jtheme-owl-1
		1.2 for demo 3
			1.2.1 .jthemeD3-owl-1
		1.3 for demo 5
			1.3.1 .jthemeD5-owl-1
	2. wow
	3. navigation
		3.1 for demo 1 to demo 8
			3.1.1 #jtheme-navbar
		3.2 for demo 9
			3.2.1 #jthemeD9-navbar
		3.3 for demo 10
			3.3.1 #jthemeD10-navbar
		3.4 for index
			3.4.1 #jthemeIndex-navbar
END OF TABLE OF CONTENTS */
/* CUSTOM JS */
/* OWL CAROUSEL */
$(document).ready(function () {
	$(".jtheme-owl-1").owlCarousel({
		singleItem: true,
		loop: true,
		autoplay: true,
		margin: 10,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			576: {
				items: 1,
				nav: false
			},
			992: {
				items: 1,
				nav: false
			},
			1200: {
				items: 1,
				nav: false
			}
		}
	});
	$(".jthemeD3-owl-1").owlCarousel({
		singleItem: true,
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			576: {
				items: 1,
				nav: false
			},
			992: {
				items: 1,
				nav: false
			},
			1200: {
				items: 1,
				nav: false
			}
		}
	});
	$(".jthemeD5-owl-1").owlCarousel({
		singleItem: true,
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			576: {
				items: 1,
				nav: false
			},
			992: {
				items: 1,
				nav: false
			},
			1200: {
				items: 1,
				nav: false
			}
		}
	});
});
/* END OF OWL CAROUSEL */
/* WOW */
$(document).ready(function(){
	new WOW().init();
});
/* END OF WOW */
/* NAVIGATION BAR */
$(document).ready(function(){
	$(window).scroll(function() {
	    if ($(this).scrollTop() > 10 ) {
	        $('#jtheme-navbar, #jthemeDoc-navbar').addClass('solid');
	    } else {
	        $('#jtheme-navbar, #jthemeDoc-navbar').removeClass('solid');
	    }
	    if ($(this).scrollTop() <= 0 ) {
	    	$('#jtheme-navbar, #jthemeDoc-navbar').hide();
	    }
	    else{
	    	$('#jtheme-navbar, #jthemeDoc-navbar').show();
	    }
	});
});
/* SMOOTH SCROLL */
	$(document).ready(function(){
		// Add smooth scrolling to all links
		$("a").on('click', function(event) {
			if (this.hash !== "") {
			  event.preventDefault();
			  var hash = this.hash;
			  $('html, body').animate({
			    scrollTop: $(hash).offset().top
			  }, 800, function(){
			    window.location.hash = hash;
			  });
			}
		});
	});
/* END OF SMOOTH SCROLL */
/* END OF NAVIGATION BAR */
/* END OF CUSTOM JS */