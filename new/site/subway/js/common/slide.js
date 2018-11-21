$(document).ready(function(){
    $('.bx-slider').bxSlider({
        infiniteLoop: false,
        slideMargin: 54,
        pager: false,
        minSlides: 4,
        maxSlides: 4,
        moveSlides: 4,
        slideWidth: 260,
        controls: true,
		autoControls: false,
        auto: true, 
        autoStart: true,
        speed: 500,
        pause: 3000,
    })
    $('.width').bxSlider({
        infiniteLoop: true,
        slideMargin: 0,
        slideWidth: 300,
        pager: true,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        controls: true,
		autoControls: false,
        auto: true, 
        autoStart: true,
        speed: 500,
        pause: 3000,
    })
})