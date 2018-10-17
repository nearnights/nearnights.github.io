$(function() {

  /*resize*/
  var window_Width = $(window).width();
  //console.log(window_Width);



  /*photoshop*/
  var bar_ps = new ProgressBar.Circle('#bar_ps', {
    color: '#fafafa',
    strokeWidth: 20,
    trailWidth: 0,
    easing: 'easeInOut',
    duration: 1000,
    text: {
      autoStyleContainer: false
    },
    from: {
      color: '#fafafa',
      width: 2
    },
    to: {
      color: '#3bc8dd',
      width: 6
    },

    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }

    }
  });
  bar_ps.text.style.fontFamily = 'oswaldR';
  bar_ps.text.style.letterSpacing = '0.3rem';
  if (window_Width >= 1200) {
    bar_ps.text.style.fontSize = '3rem';
    bar_ps.text.style.marginTop = '3rem';

  } else {
    bar_ps.text.style.fontSize = '1.8rem';
    bar_ps.text.style.marginTop = '2.2rem';

  }
  $(window).resize(function() {
    var window_Width = $(window).width();
    if (window_Width >= 1200) {
      bar_ps.text.style.fontSize = '3rem';
      bar_ps.text.style.marginTop = '3rem';

    } else {
      bar_ps.text.style.fontSize = '1.8rem';
      bar_ps.text.style.marginTop = '2.2rem';

    }
  })

  /*illustrator*/
  var bar_li = new ProgressBar.Circle('#bar_li', {
    color: '#fafafa',

    strokeWidth: 20,
    trailWidth: 0,
    easing: 'easeInOut',
    duration: 1000,
    text: {
      autoStyleContainer: false
    },
    from: {
      color: '#fafafa',
      width: 2
    },
    to: {
      color: '#f99d2a',
      width: 6
    },

    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }

    }
  });
  bar_li.text.style.fontFamily = 'oswaldR';
  bar_li.text.style.letterSpacing = '0.3rem';
  if (window_Width >= 1200) {
    bar_li.text.style.fontSize = '3rem';
    bar_li.text.style.marginTop = '3rem';

  } else {
    bar_li.text.style.fontSize = '1.8rem';
    bar_li.text.style.marginTop = '2.2rem';

  }
  $(window).resize(function() {
    var window_Width = $(window).width();
    if (window_Width >= 1200) {
      bar_li.text.style.fontSize = '3rem';
      bar_li.text.style.marginTop = '3rem';

    } else {
      bar_li.text.style.fontSize = '1.8rem';
      bar_li.text.style.marginTop = '2.2rem';

    }
  })



  /*html5*/
  var bar_html = new ProgressBar.Circle('#bar_html', {
    color: '#fafafa',

    strokeWidth: 20,
    trailWidth: 0,
    easing: 'easeInOut',
    duration: 1000,
    text: {
      autoStyleContainer: false
    },
    from: {
      color: '#fafafa',
      width: 2
    },
    to: {
      color: '#da471f',
      width: 6
    },

    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }

    }
  });
  bar_html.text.style.fontFamily = 'oswaldR';
  bar_html.text.style.letterSpacing = '0.3rem';
  if (window_Width >= 1200) {
    bar_html.text.style.fontSize = '3rem';
    bar_html.text.style.marginTop = '3rem';

  } else {
    bar_html.text.style.fontSize = '1.8rem';
    bar_html.text.style.marginTop = '2.2rem';

  }

  $(window).resize(function() {
    var window_Width = $(window).width();
    if (window_Width >= 1200) {
      bar_html.text.style.fontSize = '3rem';
      bar_html.text.style.marginTop = '3rem';

    } else {
      bar_html.text.style.fontSize = '1.8rem';
      bar_html.text.style.marginTop = '2.2rem';

    }
  })


  /*css*/
  var bar_css = new ProgressBar.Circle('#bar_css', {
    color: '#fafafa',

    strokeWidth: 20,
    trailWidth: 0,
    easing: 'easeInOut',
    duration: 1000,
    text: {
      autoStyleContainer: false
    },
    from: {
      color: '#fafafa',
      width: 2
    },
    to: {
      color: '#56c7da',
      width: 6
    },

    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }

    }
  });
  bar_css.text.style.fontFamily = 'oswaldR';
  bar_css.text.style.letterSpacing = '0.3rem';
  if (window_Width >= 1200) {
    bar_css.text.style.fontSize = '3rem';
    bar_css.text.style.marginTop = '3rem';

  } else {
    bar_css.text.style.fontSize = '1.8rem';
    bar_css.text.style.marginTop = '2.2rem';

  }

  $(window).resize(function() {
    var window_Width = $(window).width();
    if (window_Width >= 1200) {
      bar_css.text.style.fontSize = '3rem';
      bar_css.text.style.marginTop = '3rem';

    } else {
      bar_css.text.style.fontSize = '1.8rem';
      bar_css.text.style.marginTop = '2.2rem';

    }
  })

  /*js*/
  var bar_js = new ProgressBar.Circle('#bar_js', {
    color: '#fafafa',

    strokeWidth: 20,
    trailWidth: 0,
    easing: 'easeInOut',
    duration: 1000,
    text: {
      autoStyleContainer: false
    },
    from: {
      color: '#fafafa',
      width: 2
    },
    to: {
      color: '#ffce51',
      width: 6
    },

    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }

    }
  });
  bar_js.text.style.fontFamily = 'oswaldR';
  bar_js.text.style.letterSpacing = '0.3rem';

  if (window_Width >= 1200) {
    bar_js.text.style.fontSize = '3rem';
    bar_js.text.style.marginTop = '3rem';

  } else {
    bar_js.text.style.fontSize = '1.8rem';
    bar_js.text.style.marginTop = '2.2rem';
  }

  $(window).resize(function() {
    var window_Width = $(window).width();
    if (window_Width >= 1200) {
      bar_js.text.style.fontSize = '3rem';
      bar_js.text.style.marginTop = '3rem';

    } else {
      bar_js.text.style.fontSize = '1.8rem';
      bar_js.text.style.marginTop = '2.2rem';
    }
  })

  //scroll_animation
  $(window).scroll(function() {

    var skillTop = $(".skill_wrapper").offset().top-160;
    var pos = $(window).scrollTop();
    //console.log(pos);
    if (pos > skillTop ) {
      bar_ps.animate(0.85);
      bar_li.animate(0.7);
      bar_html.animate(0.85);
      bar_css.animate(0.85);
      bar_js.animate(0.7);
    } else {
      bar_ps.animate(0);
      bar_li.animate(0);
      bar_html.animate(0);
      bar_css.animate(0);
      bar_js.animate(0);
    }

  })

})
