$(function(){

	// $('.').toggleclass('.block')
	var $html = $('html');
	var $body = $('body');
	var responSize = 720;
	var $header = $('.header');
	var $logo = $header.find('h1 a');
	var $container = $('.container');
	var $page_action = $('.page_action');
	var $mb_navBtn = $header.find('.nav_open');
	var $nav = $page_action.find('li');
	var cBefore = 'cBefore';
	var colorArr = [
		'rgb(0, 165, 241)',
		'rgb(0, 136, 199)',
		'rgb(0, 98, 143)',
		'rgb(0, 136, 199)',
		'rgb(0, 165, 241)'
	];
	var ofsArr = [];
	var pageArr = [];
	var aniSpeed = 450;		//도트 확장 및 축소 시간
	var loadingTime = 500;	//로딩이 보여지는 시간
	var loading_each = 50;	//각각의 텍스트 애니 시간

	//dot 생성
	$nav.parent().after('<div class="dot"><div class="loading"><ul><li>Loading...</li><li>Loading...</li></ul></div></div>');
	//$nav.parent().after('<div class="dot"></div>');
	var $dot = $('.dot');
	var $loading = $dot.find('.loading');

	//nav 각각의 링크를 배열에 담기
	$nav.each(function(i, e){
		var urlData = $(e).find('a').attr('href');
		pageArr.push(urlData);
	});

	//새로고침시 새로고침 전페이지 로드
	$(window).ready(function(){
		var p_url = location.href;
		var p_urlPage = p_url.split('#')[1];

		//파라미터 주소가 있을 경우
		$.each(pageArr, function(i, e){
			if( e.split('.')[0] == p_urlPage ) pageRefresh(pageArr[i], i);
		});

		//파라미터 주소가 없을 경우
		if( p_urlPage == undefined || p_urlPage == '' ) pageRefresh(pageArr[0], 0);
	});

	//새로고침시 함수
	function pageRefresh(target, idx){
		$nav.eq(idx).addClass('on');
		pageAjax(target);
	}

	//page ajax함수
	function pageAjax(target){
		$.get(target, function(data){
			$container.append(data);
		});
	}

	//도트 위치 설정 및 반응형
	$(window).on('load', function(){
		$header.addClass('dot_visible');
		$(window).resize(function(){
			var win_w = $(window).width();

			//pc
			if( win_w > responSize - 17 ){
				$body.addClass('pc').removeClass('mb');
				aniSpeed = 450;		//도트 확장 및 축소 시간

				$page_action.removeClass('on').removeAttr('style');
				$mb_navBtn.removeClass('on');

				//도트 위치 설정
				var on_idx = $nav.siblings('li.on').index();
				ofsArr = [];
				$nav.each(function(i, e){
					var ofsLeft = Math.ceil($(e).offset().left) + $(e).width()/2;
					ofsArr.push(ofsLeft);
				});
				if( !$dot.is('.'+cBefore) ){
					$dot.css({'left': ofsArr[on_idx], 'backgroundColor': colorArr[on_idx], 'transition-duration': aniSpeed+'ms'});
				}
			}

			//mobile
			else {
				$body.addClass('mb').removeClass('pc');
				aniSpeed = 150;		//도트 확장 및 축소 시간

				//도트 위치 초기화
				$dot.removeAttr('style');
			}

		}).trigger('resize');
	});

	//클릭시 도트 애니 및 컨텐츠 전환
	$nav.on('click', function(){
		if( !$(this).is('.on') ){
			var on_idx = $(this).siblings('li.on').index();
			var idx = $(this).index();
			var page_txt = $(this).text();
			var html = $(this).find('a').attr('href');

			if( $body.is('.pc') ){
				$dot.removeAttr('style').addClass(cBefore).css({'backgorundColor':colorArr[on_idx], 'transition-duration': aniSpeed+'ms'})
				.animate({'backgroundColor':colorArr[idx]}, aniSpeed/3);
				$loading.addClass('on');
			}
			else {
				$dot.fadeIn(200);
				$loading.addClass('on');
			}

			//화면 전환
			var beforeDel = setInterval(function(){
				$nav.removeClass('on').eq(idx).addClass('on');
				if( $body.is('.pc') ) $dot.removeClass(cBefore).css('left',ofsArr[idx]);
				if( $body.is('.mb') ) $dot.fadeOut(200);
				clearInterval(beforeDel);
			} , aniSpeed + loadingTime);

			//로딩 숨김
			var loadingRemove = setInterval(function(){
				$loading.removeClass('on');
				clearInterval(loadingRemove);
				if( $body.is('.mb') ) $mb_navBtn.trigger('click');
			}, aniSpeed*2 + loadingTime);

			//컨텐츠 ajax
			var contentAjax = setInterval(function(){
				$container.empty();
				pageAjax(html);
				var url = location.href.split('#')[0];
				window.location.replace( url+'#'+page_txt );
				clearInterval(contentAjax);
			}, aniSpeed);

			//로딩 텍스트 애니 발동
			var load_txt_interval = setInterval(function(){
				var t_idx = $loading.find('.out').parent().index();
				each_text_class(t_idx);
				clearInterval(load_txt_interval);
			}, aniSpeed/3);
		}
		return false;
	});
	$logo.on('click', function(){
		$nav.eq(0).trigger('click');
		return false;
	});


	//모바일 네비 오픈
	$mb_navBtn.click(function(){
		$(this).toggleClass('on')
		if( !$page_action.is('.on') ){
			$page_action.fadeIn(200).addClass('on');
		}else{
			$page_action.fadeOut(200).removeClass('on');
		}
	});


	//로딩
	var $loading_txt = $loading.find('li');
	var loading_length = $loading_txt.length;
	var loading_Arr = [];
	var tag_name = 'i';

	//각각 li의 텍스트를 loading_Arr에 담고 li는 비우기
	$loading_txt.each(function(i, e){
		loading_Arr.push( $(e).text() );
		$(e).text('');
	});

	//loading_Arr에 담은 텍스트를 변수 'tag_name'으로 감싸며 각각의 li에 담기
	for( i=0; i<loading_length; i++ ){
		for( j=0; j<loading_Arr[i].length; j++ ){
			$loading_txt.eq(i).append('<'+tag_name+'>'+ loading_Arr[i][j] +'</'+tag_name+'>');
		}
	}

	//텍스트 클래스 컨트롤
	var interval_idx = 0;
	each_text_class(interval_idx);
	function each_text_class(interval_idx){
		var idx = interval_idx;

		//나타나는 텍스트
		txt_ani(idx, 'out reset', 'in', true);

		//사라지는 텍스트
		idx == 0 ? txt_ani(loading_length-1, 'in', 'out', false) : txt_ani(idx-1, 'in', 'out', false);

		function txt_ani(target_idx, removeClass, addClass, reset){
			$loading_txt.eq(target_idx).children().each(function(i, e){
				if( reset == true ) $(e).addClass('reset');
				var addTime = (loading_each * i) + loading_each * 3;
				var inInterval = setInterval(function(){
					$(e).removeClass(removeClass).addClass(addClass);
					clearInterval(inInterval);
				}, addTime);
			});
		}
	}

	//일정시간 동안 애니메이션 작동 및 idx증가값 계산
	/*
	var txt_time = 2000; //로테이트 시간
	setInterval(function(){
		interval_idx++;
		each_text_class(interval_idx);
		if( interval_idx == loading_length ){
			interval_idx = 0;
			each_text_class(interval_idx);
		}
	}, txt_time);
	*/


});