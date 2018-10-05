$(document).ready(function(){
	$('.another').hover(function(){
		$('.one img').mouseover(function(){
			$(this).attr('src','images/iconbottom'+ 'hover1' +'.png');
		})
		$('.one img').mouseout(function(){
			$(this).attr('src','images/iconbottom1' + '.png');
		})
		$('.two img').mouseover(function(){
			$(this).attr('src','images/iconbottom'+ 'hover2' +'.png');
		})
		$('.two img').mouseout(function(){
			$(this).attr('src','images/iconbottom2' + '.png');
		})
		$('.three img').mouseover(function(){
			$(this).attr('src','images/iconbottom'+ 'hover3' +'.png');
		})
		$('.three img').mouseout(function(){
			$(this).attr('src','images/iconbottom3' + '.png');
		})
		$('.four img').mouseover(function(){
			$(this).attr('src','images/iconbottom'+ 'hover4' +'.png');
		})
		$('.four img').mouseout(function(){
			$(this).attr('src','images/iconbottom4' + '.png');
		})
	})
	$('.move p').each(function(){
		$(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
	  });
	  anime.timeline({loop: true})
		.add({
		  targets: '.move .letter',
		  opacity: [0,1],
		  easing: "easeInOutQuad",
		  duration:2250,
		  delay: function(el, i) {
			return 150 * (i+1)
		  }
		})
		.add({
		  targets: '.move',
		  opacity: 1,
		  duration:2250,
		  easing: "easeOutExpo",
		})
		.add({
			targets: '.move .letter',
			opacity: [0],
			easing: "easeInOutQuad",
			duration:2250,
			delay: function(el, i) {
			  return 150 * (i+1)
			}
		})
	$(document).on('ready', function() {
		$('.slickslide').slick({
			centerMode: true,
			centerPadding: '0',
			slidesToShow: 3,
			responsive: [
				{
					breakpoint: 1280,
					settings: {
						arrows: false,
						centerMode: true,
						centerPadding: '0',
						slidesToShow: 2
					}
				},
				{
					breakpoint: 1024,
					settings: {
						arrows: false,
						centerMode: true,
						centerPadding: '0',
						slidesToShow: 2
					}
				},
				{
					breakpoint: 768,
					settings: {
						arrows: false,
						centerMode: true,
						centerPadding: '0',
						slidesToShow: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						arrows: false,
						centerMode: true,
						centerPadding: '0',
						slidesToShow: 1
					}
				}
			]
		});
	})
	var filter = "win16|win32|win64|mac|macintel";
	if( navigator.platform ){
		if( filter.indexOf(navigator.platform.toLowerCase())<0 ){
			alert('모바일')
		} else {
			alert('pc');
			$('#page').fullpage({
				navigation: true,
				slidesNavigation: true,
				verticalCentered: false,
				licenseKey:"OPEN-SOURCE-GPLV3-LICENSE",
				css3:false,
				menu: '#menu',
				anchors: ['firstPage', 'secondPage', '3rdPage' , '4rdPage'],
				afterLoad: function(origin, destination, direction){
					//section 2
					if(destination.index == 1){
						document.querySelector('.introduce').querySelector('.another').style.opacity = 1;
						document.querySelector('.introduce').querySelector('.top_posi').style.opacity = 1;
						}
					else if(origin && origin.index == 1){
						document.querySelector('.introduce').querySelector('li').style.opacity = 0;
						document.querySelector('.introduce').querySelector('.top_posi').style.opacity = 0;
					}
				}
			});
		}
	}
	
})
