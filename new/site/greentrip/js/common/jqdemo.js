$(document).ready(function(){
	var $hover = $('.logorightteb')
	$($hover).mouseenter(function(){
		$(this).css({
			height:"370px"
		})
	}).siblings()
	var $hoverBrown = $('.teb');
	$hoverBrown.mouseenter('click focusin',function(){
		$(this).addClass('on').siblings().removeClass('on');
		return false;
	})
	$('.bx-slide').bxSlider({
		// 기본
		mode: 'fade', //fade(페이드 인/아웃) / horizontal(좌/우 슬라이드) / vertical(상/하 슬라이드)
		infiniteLoop: true, //무한루프를 할것인지 결정해주는 옵션
		hideControlOnEnd: true, //마지막 슬라이드가 되었을때 버튼 숨김 제어
		speed: 500, // 슬라이드 움직이는 속도
		slideMargin: 0, //슬라이드 사이의 간격 조절
		startSlide: 0, //처음에 보여질 아이템 설정 옵션

		pager: false,

		// 제어옵션
		controls: true, //좌우 버튼 생성 유/무 || 필요없을 때 false
		nextText: 'Next', //우측버튼에 보여질 텍스트
		prevText: 'Prev', //좌측버튼에 보여질 텍스트

		// 자동
		auto: true, //자동 슬라이드
		pause: 4000, //슬라이드 정지 후 다음 슬라이드 보여질 속도
		autoStart: true,
		autoDirection: 'next', //슬라이드 보여질 방향 제어
		autoHover: true, //마우스 hover시 슬라이드 제어
		autoDelay: 1, //슬라이드 정지 시간
	});
})
//bxslider 제어 옵션
