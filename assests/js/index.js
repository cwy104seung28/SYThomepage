// 滑動到最上方的效果---------------
$(window).scroll(function () {
  // if ($(window).width() > 768) {
  //   // if ($(window).scrollTop() <= 0) {
  //   //   $(".nav,.en,.ch,.explore,.line").addClass("top");
  //   // }
  //   // else {
  //   //   $(".nav,.en,.ch,.explore,.line").removeClass("top");
  //   // }
  // }

  setScroll();
});

// 滑動出現show效果---------------
function setScroll() {
  var win = $(window),
    hWin = win.height(),
    wWin = win.width(),
    scroll = $(window).scrollTop();
  var move = $("#service,#about,#contact");

  move.each(function () {
    var tCont = $(this).offset().top;
    if (scroll > tCont - hWin * 0.8) {
      $(this).addClass("show");
      if ($("#service").hasClass("show")) {
        for (var i = 1; i < 4; i++) {
          $(`#card-${i}`).addClass(`drop-animation-${i}`);
        }
      }
      if ($("#contact").hasClass("show")) {
        $(".top-btn").removeClass("not-show-btn");
        $(".top-btn").addClass("show-btn");
      }
    } else {
      $(this).removeClass("show");
      if (!$("#service").hasClass("show")) {
        for (var i = 1; i < 4; i++) {
          $(`#card-${i}`).removeClass(`drop-animation-${i}`);
        }
      }
      if (!$("#contact").hasClass("show")) {
        $(".top-btn").removeClass("show-btn");
        $(".top-btn").addClass("not-show-btn");
      }
    }
  });
  var tCont = $("#banner").offset().top;
  if (scroll > tCont) {
    $(".nav-container").addClass("change-nav");
  } else {
    $(".nav-container").removeClass("change-nav");
  }
  console.log($("#about").offset().top - hWin);
}
