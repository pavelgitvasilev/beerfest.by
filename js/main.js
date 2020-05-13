  $(document).ready(function () {

    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
    })
    


  








  // mask phone
  $('[type=tel]').mask('+7 000 000-00-00', {placeholder: "+7 ___ ___-__-__"});

  new WOW().init(); 

  //Smooth Scrolling Using Navigation Menu
  $('a[href*="#"]').on('click', function(e){
    $('html,body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 100
    },500);
    e.preventDefault();
  });

  // $(document).ready(function() {
  //  var scrollBtn = $('#scroll_top');
  //  $(window).scroll (function () {
  //    if ($(this).scrollTop () > 400) {
  //      scrollBtn.fadeIn();
  //    } else {
  //      scrollBtn.fadeOut();
  //    }
  // });
  // scrollBtn.on('click', function(){
  // $('body, html').animate({
  // scrollTop: 0
  // }, 800);
  // return false;
  // });
  // });


  });
  
  