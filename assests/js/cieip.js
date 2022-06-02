$(window).scroll(function () {
  setScroll();
});

function setScroll() {
  var win = $(window),
    hWin = win.height(),
    wWin = win.width(),
    scroll = $(window).scrollTop();
  // var move = $("#service,#about,#contact");


  var bannerCont = $("#vueapp").offset().top;
  if (scroll > bannerCont) {
    $(".nav-container").addClass("change-nav");
  } else {
    $(".nav-container").removeClass("change-nav");
  }

//   var serviceCont = $("#service").offset().top;
//   if (scroll > serviceCont - hWin * 0.8) {
//     $("#service").addClass("show");
//     if ($("#service").hasClass("show")) {
//       for (var i = 1; i < 4; i++) {
//         $(`#card-${i}`).addClass(`drop-animation-${i}`);
//       }
//     }
//     // if ($("#contact").hasClass("show")) {
//       // $(".top-btn").removeClass("not-show-btn");
//       // $(".top-btn").addClass("show-btn");
//     // }
//   } else {
//     $("#service").removeClass("show");
//     if (!$("#service").hasClass("show")) {
//       for (var i = 1; i < 4; i++) {
//         $(`#card-${i}`).removeClass(`drop-animation-${i}`);
//       }
//     }

//   }
  
  
//   var contactCont = scroll - ($("#contact").offset().top - 100);
//   if(contactCont<-800){
//     $(".top-btn").removeClass("show-btn");
//     $(".top-btn").addClass("not-show-btn");
//   }
//     else{
//     $(".top-btn").removeClass("not-show-btn");
//     $(".top-btn").addClass("show-btn");
//   }

// 
}