// $(document).ready(function () {
//   window.onresize = function () {
//     color_change();
//   };
//   window.addEventListener("scroll", function () {
//     color_change();
//   });
// });
// function color_change() {
//     var nav_top = $('nav').offset().top;
//     // var footer_height = $('footer').height();
//     // var footer;
//     // if (window.innerWidth > 1374) {
//     //     footer = footer_top + footer_height * 0.55;
//     // }
//     // else if (window.innerWidth <= 1374 && window.innerWidth > 1120) {
//     //     footer = footer_top + footer_height * 0.4;
//     // }
//     // else if (window.innerWidth <= 1120 && window.innerWidth > 768) {
//     //     footer = footer_top + footer_height * 0.35;
//     // }
//     // else{
//     //     footer = footer_top + footer_height * 1;
//     // }
//     // console.log();
//     $('.change_color').each(function () {
//         if ($(this).offset().top >= nav_top) {
//             $(this).css("color","#FFFFFF")
//         }
//         else {
//             if ($(this).attr('data-color')) {
//                 var color = $(this).attr('data-color');
//             }
//             else {
//                 var color = "#999999";
//             }
//             $(this).css("color", color);
//         }
//     });

// }
// document.getElementsByClassName("main")[0].οnscrοll = function (e) {
//   console.log(e.target.scrollTop);
//   //当滚动出去的内容高度超出100，实现变色效果
//   if (e.target.scrollTop >= 100) {
//     document.getElementsByClassName("nav-container")[0].style.background =
//       "#999999";
//   } else {
//     document.getElementsByClassName("nav-container")[0].style.background =
//       "#FFFFFF";
//   }
// };

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
    var move = $(".bigTitle2,.appSystem,.mSystem,.computer,.idealpart");
  
    move.each(function () {
      var tCont = $(this).offset().top;
      if (scroll > tCont - hWin * 0.8) {
        $(this).addClass("show");
      }
      else {
        $(this).removeClass("show");
      }
  
    })
  }
  