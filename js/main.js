  $(document).ready(function () {
    
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  })
  
  // const modal = $('.window__mobile');
  // $(document).keyup(function (e) { 
  //   let key = e.keyCode;
  //     if(key == 27) {
  //       modal.toggleClass('window__mobile--active');
  //       $(".menu__btn").removeClass("menu__btn--active")
  // }
  
  // });


  var scrollBtn = $('.scroll-image');
    $(window).on('scroll', (function () {
      
      if ($(this).scrollTop () > 400) {
        scrollBtn.fadeIn();
      } else {
        scrollBtn.fadeOut();
        
      }
      
    }));


    scrollBtn.on('click', function(){
    $('body, html').animate({
    scrollTop: 0
    }, 800);
    return false
    
    });
    
    


  var burger = $('.window__mobile');
  $('.menu__bar').on('click', function(e) {

      e.preventDefault;
      $(this).children().toggleClass('menu__btn--active');
      burger.toggleClass('window__mobile--active')
  });


  $(document).mouseup(function(e) {
      var container_header = $(".header__mobile"); 
      var container = $("window__mobile--active"); 

      // if the target of the click isn't the container nor a descendant of the container
      if (!container.is(e.target) && container.has(e.target).length === 0 && 
          !container_header.is(e.target) && container_header.has(e.target).length === 0
      ) 
      {
          $(".window__mobile").removeClass("window__mobile--active");
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

  $('#menuabout').hover(function () {
      $('.menu__links').addClass('menu__links--active');
      
    }, function () {

    },
    
  );

  $(document).mouseup(function(e) {
    // var dropdown = $('.dropdown');
    var menu_dropdown = $("#menuabout"); 
    var container__dropdown = $("menu__links--active"); 
    var home = $('.home__slider');

    // if the target of the click isn't the container nor a descendant of the container
    if (!container__dropdown.is(e.target) && container__dropdown.has(e.target).length === 0 && 
        !menu_dropdown.is(e.target) && menu_dropdown.has(e.target).length === 0 && !home.is(e.target)
    ) 
    {
        $(".menu__links").removeClass("menu__links--active");
        // $(".menu__btn").removeClass("menu__btn--active")
    }
});




  // mask phone
  $('[type=tel]').mask('+7 000 000-00-00', {placeholder: "+375 __ ___-__-__"});

  // new WOW().init(); 


  function showDialog(text) {
    $('#content').html(text);
    $('#exampleModal').modal('show');
  }

  
  $(".card").click(function() {
    var imgSrc = $(this).find('.card__image').attr('src');
    var titleCard = $(this).find('.card__title').text();
    var priceCardActual = $(this).find('.card__price--actual').text();
    var priceCardFull = $(this).find('.card__price--full').text();
    var modalCard = 
    `<div class="col-lg-6"><img src="${imgSrc}"></div>
    <div class="col-lg-6">
      <h2 class="card__title">${titleCard}</h2>
        <div class="card__price">
          <span class="card__price--actual">${priceCardActual}</span>
          <span class="card__price--full">${priceCardFull}</span>
        </div>
        <div class="orders card__orders">
        <div class="orders__click">
          <button class="orders__btn"><span class="orders__btn--minus">-</span></button>
          <span class="orders__number">1</span>
          <button class="orders__btn"><span class="orders__btn--plus">+</span></button>
        </div>
        <button class="order">
          <img src="img/header/basket.svg" alt="basket" class="order__image">
          <span class="order__text">добавить</span>
        </button>
      </div>

    </div>`


    console.log(modalCard);
    showDialog(modalCard);
  });


  
  //корзина
  $(".basket__image").click(function() {
    
    $('#exampleModalLong').modal();
  });

  // $('select').selectpicker();
  




});

  

