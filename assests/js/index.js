// 滑動到最上方的效果---------------
$(window).scroll(function () {
  setScroll();
});

function setScroll() {
  var win = $(window),
    hWin = win.height(),
    wWin = win.width(),
    scroll = $(window).scrollTop();
  // var move = $("#service,#about,#contact");


  var bannerCont = $("#banner").offset().top;
  if (scroll > bannerCont) {
    $(".nav-container").addClass("change-nav");
  } else {
    $(".nav-container").removeClass("change-nav");
  }

  var serviceCont = $("#service").offset().top;
  if (scroll > serviceCont - hWin * 0.8) {
    $("#service").addClass("show");
    if ($("#service").hasClass("show")) {
      for (var i = 1; i < 4; i++) {
        $(`#card-${i}`).addClass(`drop-animation-${i}`);
      }
    }
    // if ($("#contact").hasClass("show")) {
      // $(".top-btn").removeClass("not-show-btn");
      // $(".top-btn").addClass("show-btn");
    // }
  } else {
    $("#service").removeClass("show");
    if (!$("#service").hasClass("show")) {
      for (var i = 1; i < 4; i++) {
        $(`#card-${i}`).removeClass(`drop-animation-${i}`);
      }
    }
    // if (!$("#contact").hasClass("show")) {
      // $(".top-btn").removeClass("show-btn");
      // $(".top-btn").addClass("not-show-btn");
    // }
  }
  
//   var aboutTranslateX = $("#about").offset().top - scroll;
//   // $("#about").offset().top - scroll 是scroll到about的距離
//   if(aboutTranslateX>=0){
//     $("#about").css("transform",`translateX(${aboutTranslateX}px)`);
//   }
//   else{
//     $("#about").css("transform",`translateX(0px)`);
//   }

  var aboutCont = ($("#about").offset().top - 64) - scroll;
  // $("#about").offset().top - scroll 是scroll到about的距離
  // if(aboutTranslateX>=0){
  //   // $("#about .container").css("transform",`translateX(${aboutTranslateX}px)`);
  // }
  if(aboutCont<500){
    $("#about-content").addClass("about-original");
    $("#about-img").addClass("about-original");
  }
  else{
    $("#about-content").removeClass("about-original");
    $("#about-img").removeClass("about-original");

  }
  
  var contactCont = scroll - ($("#contact").offset().top - 100);
  // $("#contact").offset().top - scroll 是scroll到contact的距離
  if(contactCont<-800){
    // $("#contact .container").css("transform",`translateX(${contactTranslateX}px)`);
    $(".top-btn").removeClass("show-btn");
    $(".top-btn").addClass("not-show-btn");
  }
    else{
    // $("#contact .container").css("transform",`translateX(${contactTranslateX}px)`);
    $(".top-btn").removeClass("not-show-btn");
    $(".top-btn").addClass("show-btn");
  }
  // else if(-800<=contactTranslateX && contactTranslateX<= 0){
  //   // $("#contact .container").css("transform",`translateX(${contactTranslateX}px)`);
  //   $(".top-btn").removeClass("not-show-btn");
  //   $(".top-btn").addClass("show-btn");
  // }
  // else{
  //   $("#contact .container").css("transform","translateX(0px)");

  // }
}