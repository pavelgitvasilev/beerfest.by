  $(document).ready(function () {

  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  })
  
  const modal = $('.menu__window');
  $(document).keyup(function (e) { 
    let key = e.keyCode;
      if(key == 27) {
        modal.toggleClass('menu__window--active');
        $(".menu__btn").removeClass("menu__btn--active")
  }
  
  });


  var window = $('.menu__window');
  $('.menu__bar').on('click', function(e) {

      e.preventDefault;
      $(this).children().toggleClass('menu__btn--active');
      window.toggleClass('menu__window--active')
  });


  $(document).mouseup(function(e) {
      var container_header = $(".header__mobile"); 
      var container = $(".menu__window.menu__window--active"); 

      // if the target of the click isn't the container nor a descendant of the container
      if (!container.is(e.target) && container.has(e.target).length === 0 && 
          !container_header.is(e.target) && container_header.has(e.target).length === 0
      ) 
      {
          $(".menu__window").removeClass("menu__window--active");
          $(".menu__btn").removeClass("menu__btn--active")
      }
  });
  //наведение на иконки футера
  $('.social__image--instagram').hover(function () {
      $('.social__image--instagram').css('display', 'none');
      $('.social__image--instagram-active').css('display', 'flex');
      
    }, function () {

      $('.social__image--instagram').css('display', 'flex');
      $('.social__image--instagram-active').css('display', 'none');

    }
  );
  $('.social__image--google').hover(function () {
    $('.social__image--google').css('display', 'none');
    $('.social__image--google-active').css('display', 'flex');
    
  }, function () {

    $('.social__image--google').css('display', 'flex');
    $('.social__image--google-active').css('display', 'none');

  }
);

  






  // mask phone
  $('[type=tel]').mask('+7 000 000-00-00', {placeholder: "+375 __ ___-__-__"});

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
  
  