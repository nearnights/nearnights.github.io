$(document).ready(function(){
	mainHrwd();
	$(window).on('resize', function () { 
		mainHrwd();
	})
	function mainHrwd() {
		var wh = $(window).height();
		var headerH = $('.header').height();
		var footerH = $('.header').height();
		var set = wh - (headerH + footerH);
		//console.log(wh);
		$('.container').css({
			height:set + 'px'
		})
		$('.back_one').css({
			height:set + 'px'
		})
	}
	var wh = $(window).height();
	var header = $('.header').height();
	var ch = $('.container').height();
	var oneh = wh - header;
	$('.section').css({
		height:ch + 'px'
	})
	$(window).on('resize', function(){
		var wh = $(window).height();
		var header = $('.header').height();
		var ch = $('.container').height();
		var oneh = wh - header;
		$('.section').css({
			height:ch + 'px'
		})
	})

	$('.container').slimScroll({
        size : '7px',
        color: '#333',
		opacity : 1,
        railColor : '#333',
        railOpacity : .2,
        wheelStep : 20,
		touchScrollStep : 100,
        railBorderRadius : '7px'
	});

	scrollOpacity();

	function scrollOpacity(){
		$('.container').scroll(function () {
			var scroll = $('.container').scrollTop()
			if (scroll > 0) {
				$('.btn').stop().animate({opacity:0},100)
			} else{
				$('.btn').stop().animate({opacity:1},100)
			}
		}
	)}
})