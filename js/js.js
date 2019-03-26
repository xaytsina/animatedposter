
$(function() {

  $("[data-href]").each(function() {
    $(this).click(function() {
      $('html, body').animate({ scrollTop: $($(this).attr("data-href")).offset().top }, 500);
      return false
    })
  })

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {}


  $(".tel-mask").inputmask("+7 (999) 999-99-99");
  $(".tel-mask").attr("placeholder", '+7 (___) ___-__-__');

// SCROLL ON PAGE
  $(".scroll").click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 300);
  });

  new WOW().init();

  var cur_scroll;
  var ai_scroll = $(".scroll");
  var w_cur_scroll = $(window).scrollTop();
  $(window).scroll(function() {
    if($(window).scrollTop() < w_cur_scroll) {
      if($(ai_scroll).hasClass("active")) {
        clearTimeout(cur_scroll);
        cur_scroll = setTimeout(function() {$(ai_scroll).removeClass("active");}, 3000)
      }
      if(!$(ai_scroll).hasClass("active")) {
        $(ai_scroll).addClass("active");
        cur_scroll = setTimeout(function() {$(ai_scroll).removeClass("active");}, 3000)
      }

    }
    w_cur_scroll = $(window).scrollTop();
  });

// MOBILE_MENU
  $(".toggle-menu").click(function() {
    $(this).toggleClass("on");
    $("header .menu").slideToggle();
    return false;
  });

  var width = $(window).width();
  $(window).resize(function(){
    if($(window).width() != width){
      heightses();
      width = $(window).width();
    }
  });


  // SLICK


   $(".letters .slider").slick({
    arrows: true,
    prevArrow: $('.letters .nav-l'),
    nextArrow: $('.etters .nav-r'),
    slidesToShow: 3,
    slidesToScroll: 1,
     responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1
      }
    }
    ]
  })



  window.addEventListener("orientationchange", function() {
    heightses();
  }, false);


  heightses();


  function heightses() {

  }

})
