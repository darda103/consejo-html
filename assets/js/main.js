// preloader
$(window).on("load", function() {
    var preLoder = $(".preloader");
    preLoder.fadeOut(1000);
});
// scroll to top
$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 40){
			$('.scroll').fadeIn();
		} else{
			$('.scroll').fadeOut();
		}
	});
	$(".scroll").click(function(){
		$('html, body').animate({scrollTop : 0},100);
	})
})
// header
$(window).on('scroll', function(){
    var logo = $(".header .logo img");
    var header = $(".header");

    
    if ($(window).scrollTop() > 100) {
        header.addClass('fixed-header');
        if ($(window).width() < 992) {
            header.removeClass('fixed-header');
        }
    } else {
        header.removeClass('fixed-header');
    }
});  

// testimonial slideshow
$(document).ready(function(){
	$('.testi').owlCarousel({
	    loop: true,
        dots: false,
        nav: true,
        navText: ['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],
        margin: 10,
        smartSpeed: 1000,
        mouseDrag: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            960: {
                items: 1
            },
            1200: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
	})
});
// client slideshow
$(document).ready(function(){
	$('.client-area').owlCarousel({
	    loop: true,
        dots: false,
        nav: false,
        margin: 30,
        smartSpeed: 1000,
        mouseDrag: true,
        autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 4
            },
            960: {
                items: 6
            },
            1200: {
                items: 6
            },
            1920: {
                items: 6
            }
        }
	})
});