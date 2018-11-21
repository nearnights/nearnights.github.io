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
	$('.container').slimScroll({
        size : '7px',
        color: '#333',
		opacity : 1,
        railColor : '#333',
        railOpacity : .2,
        wheelStep : 8,
		touchScrollStep : 100,
        railBorderRadius : '7px'
	});
})