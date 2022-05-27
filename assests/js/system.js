var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
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

    // var spanBefore = document.createElement('span::before');
    // spanBefore.style['content']='';
    // spanBefore.style['width']='10px';
    // spanBefore.style['height']='40px';
    // spanBefore.style['background-color']='#007aff';

    var span = document.createElement('span');
    span.textContent = asideArr[i];

    paginationSpan[i].appendChild(span);
}
// paginationSpan.forEach(element => {
//   var i=0;
//   element.textContent = asideArr[i];
//   i++;
//   console.log(asideArr[i]);
// });



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