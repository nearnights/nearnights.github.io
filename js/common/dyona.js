$(document).ready(function(){
	/* Image Replace 변경 */
	$('.top_posi .another').each(function(){
		var idx = $(this).index() + 1;
		var imgOn = $(this).find('img').attr("src").replace(idx, 'hover'+idx);
		var imgOff = $(this).find('img').attr("src").replace('hover'+idx, idx);
		//console.log(idx);
		//hover 시 이미지 변경방법
		$(this).find('img').hover(function() { 
			$(this).attr("src",imgOn);
		},function() { 
			$(this).attr("src",imgOff);
		});
		// 마우스 오버시 이미지 변경방법
		/*
		$(this).find('img').on({
			'mouseover':function(){
				$(this).attr("src",imgOn);
			},
			'mouseleave':function(){
				$(this).attr("src",imgOff);
			}
		});
		*/
	});
	/* Intro Text Animation */
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

	/* Slick Slider */
	$('.fade').slick({
		autoplay: true,
		autoplaySpeed:3000,
		speed:2000,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		fade: true,
		pauseOnHover:false
	});
	/*
	$('.introduce').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		nextArrow: '<button class="slick-next hide" aria-label="Next" type="button">My Profile Click</button>',
		prevArrow: '<button class="slick-prev show" aria-label="Prev" type="button">x</button>',
	});
	$('.show').hide()
	$('.hide').on('click',function(){
		$('.show').show()
		$('.hide').hide()
	})
	$('.show').on('click',function(){
		$('.show').hide()
		$('.hide').show()
	})
	이력서 부분인데 이 부분은 아직 보류
	*/
	$('.slickslide').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		dots:true,
		dotsClass: 'slick-dots',
		responsive: [
		{
			breakpoint: 1280,
			settings: {
			slidesToShow: 2,
			}
		},
		{
			breakpoint: 1024,
			settings: {
			slidesToShow: 2,
			}
		},
		{
			breakpoint: 768,
			settings: {
			slidesToShow: 1,
			}
		},
		{
			breakpoint: 640,
			settings: {
			slidesToShow: 1
			}
		}
		]
	});
	$('.artbox').slick({
		
	});

	/* FullPage */
	$('#page').fullpage({
		navigation:true,
		slidesNavigation: true,
		verticalCentered:false,
		licenseKey:"OPEN-SOURCE-GPLV3-LICENSE",
		css3:false,
		menu: '#menu',
		anchors: ['firstPage', 'secondPage', '3rdPage' , '4rdPage','5rdPage','6rdPage'],
		afterLoad: function(origin, destination, direction){
			//section 2
			if(destination.index == 1){
				$('.one').delay(200).animate({
					opacity:"1",
					top:40 + "px",
				});
				$('.two').delay(400).animate({
					opacity:"1",
					top:40 + "px",
				});
				$('.three').delay(600).animate({
					opacity:"1",
					top:40 + "px",
				});
				$('.four').delay(800).animate({
					opacity:"1",
					top:40 + "px",
				});
			}
			else if(origin && origin.index == 1){
				$('.another').stop(1000).animate({
					opacity:"0",
					top:30 + "px",
				});
			}
			if(destination.index == 1){
				$('.topbtn').stop().animate({
					left:28 + "px"
				});
			}
			else if(destination.index == 0){
				$('.topbtn').stop().animate({
					left:-20 + "px"
				});
			}
			if(destination.index == 2){
				$('.sizebold').after().css({
					width:"400px",
					opacity:"0"
				});
				$('.sizebold').after().animate({
					width:"68vw",
					opacity:"1"
				});
				$('.one_e').delay(200).animate({
					opacity:"1",
				});
				$('.two_e').delay(600).animate({
					opacity:"1",
				});
				$('.three_e').delay(400).animate({
					opacity:"1",
				});
			}
			else if(origin && origin.index == 2){
				$('.sizebold').stop(1000).animate({
					opacity:"0",
				});
				$('.one_e').stop().animate({
					opacity:"0",
				});
				$('.two_e').stop().animate({
					opacity:"0",
				});
				$('.three_e').stop().animate({
					opacity:"0",
				});
			}
			if(destination.index == 3){
				$('.bold').delay(100).animate({
					opacity:"1",
					top:0,
				});
				$('.website p').delay(100).animate({
					opacity:"1",
					top:0,
				});
				$('.optopone').delay(200).animate({
					opacity:"1",
					top:0,
				});
				$('.optoptwo').delay(400).animate({
					opacity:"1",
					top:0,
				});
				$('.optopthree').delay(600).animate({
					opacity:"1",
					top:0,
				});
			}
			else if(origin && origin.index == 3){
				$('.bold').delay(100).animate({
					opacity:".1",
					top:-10 + "px",
				});
				$('.website p').stop(1000).animate({
					opacity:".1",
					top:-10 + "px",
				});
				$('.optopone').stop(1000).animate({
					opacity:"0",
					top:-10 + "px",
				});
				$('.optoptwo').stop(1000).animate({
					opacity:"0",
					top:-10 + "px",
				});
				$('.optopthree').stop(1000).animate({
					opacity:"0",
					top:-10 + "px",
				});
			}
			if(destination.index == 4){
				$('.posi_pone').after().css({
					position:"relative",
					top:"-5px",
					color:"#fff",
					width:"530px",
					fontSize:"45px",
					fontWeight:"900",
					padding:"20px",
					borderBottom:"5px solid #fff",
					margin:"0 auto",
					opacity:"0"
				});
				$('.posi_pone').after().delay().animate({
					width:"1175px",
					top:"0",
					opacity:"1"
				});
				$('.switchz').delay(200).animate({
					opacity:"1",
				});
				$('.switcho').delay(300).animate({
					opacity:"1",
				});
				$('.switcht').delay(700).animate({
					opacity:"1",
				});
				$('.switchth').delay(500).animate({
					opacity:"1",
				});
				$('.switchf').delay(900).animate({
					opacity:"1",
				});
				$('.switchfi').delay(400).animate({
					opacity:"1",
				});
				$('.switchs').delay(800).animate({
					opacity:"1",
				});
				$('.switchse').delay(600).animate({
					opacity:"1",
				});
			}
			else if(origin && origin.index == 4){
				$('.posi_pone').stop(1000).animate({
					top:"-10px",
					opacity:"0",
				});
				$('.switchz').stop(1000).animate({
					opacity:"0",
				});
				$('.switcho').stop(1000).animate({
					opacity:"0",
				});
				$('.switcht').stop(1000).animate({
					opacity:"0",
				});
				$('.switchth').stop(1000).animate({
					opacity:"0",
				});
				$('.switchf').stop(1000).animate({
					opacity:"0",
				});
				$('.switchfi').stop(1000).animate({
					opacity:"0",
				});
				$('.switchs').stop(1000).animate({
					opacity:"0",
				});
				$('.switchse').stop(1000).animate({
					opacity:"0",
				});
			}
			if(destination.index == 5){
				document.querySelector('.auto').play();
				$('.background p').delay(100).animate({
					top:16 + "%",
					opacity:"1"
				});
				$('.piano').delay(100).animate({
					top:45 + "%",
					opacity:"1"
				});
				$('.game').delay(500).animate({
					top:45 + "%",
					opacity:"1"
				});
				$('.artdraw').delay(1000).animate({
					top:45 + "%",
					opacity:"1"
				});
			}
			else if(origin && origin.index == 5){
				$('.background p').stop(1000).animate({
					top:15 + "%",
					opacity:"0"
				});
				$('.piano').stop(1000).animate({
					top:53 + "%",
					opacity:"0"
				});
				$('.game').stop(1000).animate({
					top:53 + "%",
					opacity:"0"
				});
				$('.artdraw').stop(1000).animate({
					top:53 + "%",
					opacity:"0"
				});
			}
		},
	});

	/* 디바이스 && 데스크탑 구분 */
	var filter = "win16|win32|win64|mac|macintel";
	if( navigator.platform ){
		if( filter.indexOf(navigator.platform.toLowerCase())<0 ){
			
		} 
		else {
			
		}
	}

	/* 윈도우 창 리사이즈 변경 */
	$(window).resize(function(){
		rwdSet();
	}).trigger('resize');
})

/* 리사이즈 함수 */
function rwdSet(){
	if($(window).width() >= 769){
		$('.headerbox').removeClass('example');
	} else {
		$('.icomenu').on('click', function(){
			$('.headerbox').toggleClass('example');
		});
	}
}
function rwdMatch(){
	if (matchMedia("(max-width: 768px)").matches){
		$('.bar').on('click', function(){
			$('.headerbox').toggleClass('example').stop().animate({
				height:"50px",
				opacity:"1"
			})
			$('.example').stop().animate({
				height:"260px",
				opacity:"1"
			})
			$('.headlist').toggleClass('overflow').css({
				overflow:"hidden",
			})
			$('.overflow').css({
				overflow:"visible",
			})
		});
	} else {
		$('.headerbox').stop().animate({
			height:"50px",
			opacity:"1"
		})
	}
}