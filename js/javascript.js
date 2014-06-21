$(function() {

  var $c = $('#slider'),
    $w = $(window);

  $c.carouFredSel({
    align: false,
    items: 10,
    scroll: {
      items: 3,
      duration: 20000,
      timeoutDuration: 0,
      easing: 'linear',
      pauseOnHover: 'immediate'
    }
  });

  
  $w.bind('resize.example', function() {
    var nw = $w.width();
    if (nw < 990) {
      nw = 990;
    }

    $c.width(nw * 3);
    $c.parent().width(nw);

  }).trigger('resize.example');

});