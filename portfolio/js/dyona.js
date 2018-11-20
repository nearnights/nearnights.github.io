$(document).ready(function(){
    if($(window).width() > 1025){
        $(window).scroll(function () {
            if ($('html, body').scrollTop() > 878) {
                $('.active1').stop().animate({opacity:1,marginTop:'-55px'});
                $('.opacity1').delay(300).animate({opacity:1})
            }
            if ($('html, body').scrollTop() > 1628) {
                $('.active2').stop().animate({opacity:1,marginTop:'3px'});
                $('.opacity2').delay(300).animate({opacity:1})
            }
            if ($('html, body').scrollTop() > 2478) {
                $('.active3').stop().animate({opacity:1,marginTop:'4px'});
                $('.opacity3').delay(300).animate({opacity:1})
            }
            if ($('html, body').scrollTop() > 3228) {
                $('.active4').stop().animate({opacity:1,marginTop:'4px'});
                $('.opacity4').delay(300).animate({opacity:1})
            }
            if ($('html, body').scrollTop() > 4028) {
                $('.active5').stop().animate({opacity:1,marginTop:'3px'});
                $('.opacity5').delay(300).animate({opacity:1})
                $('.btn').stop().animate({opacity:1},100)
            }
            if ($('html, body').scrollTop() > 4828) {
                $('.active6').stop().animate({opacity:1,marginTop:'4px'});
                $('.opacity6').delay(300).animate({opacity:1})
                $('.btn').stop().animate({opacity:0},100)
            }
        });
    }
    else{
        $(window).scroll(function () {
            if ($('html, body').scrollTop() > 478) {
                $('.btn').stop().animate({opacity:0},100)
            }
        });
    }
})