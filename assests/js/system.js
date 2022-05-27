var swiper = new Swiper(".mySwiper", {
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      direction: "horizontal",
    },
    768:{
      direction: "vertical",
    }
},
});

const asideArr=[
  '公文-收文管理',
  '公文-發文管理',
  '公文-基本設定',
  '檔案管理',
  '會議管理',
  '事項管理',
  '行事曆',
  '簽核管理'
]

var paginationSpan = document.getElementsByClassName("swiper-pagination-bullet");

var i;
for (i = 0; i < asideArr.length; i++) {

    var span = document.createElement('span');
    span.textContent = asideArr[i];

    paginationSpan[i].appendChild(span);
}
$(document).ready(function () {
  var information_H_1 = $('#information-1').height();
  var information_H_2 = $('#information-2').height();

  document.onreadystatechange = function () {
      if (document.readyState == "complete") {
          if ( window.innerWidth > 767){
              if(information_H_1 < 258){
                  $('#about-shop-1 .about-shop-menu').addClass('no_visible');
              }
              else{
                  $('#about-shop-1 .about-shop-menu').removeClass('no_visible');
      
              };

              if(information_H_2 < 258){
                  $('#about-shop-2 .about-shop-menu').addClass('no_visible');
              }
              else{
                  $('#about-shop-2 .about-shop-menu').removeClass('no_visible');
      
              };
          }
          else if( window.innerWidth > 767){
              if(information_H_1 < 74){
                  $('#about-shop-1 .about-shop-menu').addClass('no_visible');
              }
              else{
                  $('#about-shop-1 .about-shop-menu').removeClass('no_visible');
      
              };

              if(information_H_2 < 74){
                  $('#about-shop-2 .about-shop-menu').addClass('no_visible');
              }
              else{
                  $('#about-shop-2 .about-shop-menu').removeClass('no_visible');
              };
          }
          if (window.innerWidth < 1753 && window.innerWidth > 767) {
              $(".nav-slider-container .swiper-wrapper .swiper-slide").width(window.innerWidth * 0.674);
              $(".nav-slider-container .swiper-wrapper .swiper-slide").height(window.innerWidth * 0.284);
              swiper.update();
          }
          else {
              $(".nav-slider-container .swiper-wrapper .swiper-slide").width("");
              $(".nav-slider-container .swiper-wrapper .swiper-slide").height("");
          }
          setTimeout(function () { swiper.update(); }, 300); 
      }
  };
  window.onresize = function () {
      if ( window.innerWidth < 767) {
          $(".nav-slider-container .swiper-wrapper .swiper-slide").width(window.innerWidth * 0.674);
          $(".nav-slider-container .swiper-wrapper .swiper-slide").height(window.innerWidth * 0.284);
          swiper.update();
      }
      else {
          $(".nav-slider-container .swiper-wrapper .swiper-slide").width(window.innerWidth);
          $(".nav-slider-container .swiper-wrapper .swiper-slide").height(window.innerWidth);
      }
      setTimeout(function () { swiper.update(); }, 300);  
  };
});



$(window).scroll(function () {
  setScroll();
});

function setScroll() {
  var win = $(window),
    hWin = win.height(),
    wWin = win.width(),
    scroll = $(window).scrollTop();
  // var move = $("#service,#about,#contact");


  var bannerCont = $("#system").offset().top;
  if (scroll > bannerCont) {
    $(".nav-container").addClass("change-nav");
  } else {
    $(".nav-container").removeClass("change-nav");
  }
}