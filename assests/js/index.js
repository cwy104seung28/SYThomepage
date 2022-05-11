// $(document).ready(function () {
//   window.onresize = function () {
//     color_change();
//   };
//   window.addEventListener("scroll", function () {
//     color_change();
//   });
// });
// function color_change() {
//     var footer_top = $('footer').offset().top;
//     var footer_height = $('footer').height();
//     var footer;
//     if (window.innerWidth > 1374) {
//         footer = footer_top + footer_height * 0.55;
//     }
//     // else if (window.innerWidth <= 1374 && window.innerWidth > 1120) {
//     //     footer = footer_top + footer_height * 0.4;
//     // }
//     // else if (window.innerWidth <= 1120 && window.innerWidth > 768) {
//     //     footer = footer_top + footer_height * 0.35;
//     // }
//     // else{
//     //     footer = footer_top + footer_height * 1;
//     // }
//     $('.change_color').each(function () {
//         if ($(this).offset().top >= footer) {
//             $(this).css("color","#FFFFFF")
//         }
//         else {
//             if ($(this).attr('data-color')) {
//                 var color = $(this).attr('data-color');
//             }
//             else {
//                 var color = "#000000";
//             }
//             $(this).css("color", color);
//         }
//     });

// }
document.getElementsByClassName("main")[0].οnscrοll = function (e) {
  console.log(e.target.scrollTop);
  //当滚动出去的内容高度超出100，实现变色效果
  if (e.target.scrollTop >= 100) {
    document.getElementsByClassName("nav-container")[0].style.background =
      "#999999";
  } else {
    document.getElementsByClassName("nav-container")[0].style.background =
      "#FFFFFF";
  }
};
