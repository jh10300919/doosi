$(() => {

  //사이드 슬라이드 도트 색
  $('.side_dot a').eq(0).addClass('on');
  $('.side_dot a').click(function () {
    $('.side_dot a').removeClass('on');
    $(this).addClass('on')
  })

  // 이부분에 대한 고도화 작업은 고민해 보아요.
  $(window).scroll(function () {

    let scTop = $(window).scrollTop()
    let sec0 = 0
    let sec1 = $('#sec1').offset().top + 10
    let sec2 = $('#sec2').offset().top + 10
    let sec3 = $('#sec3').offset().top + 10
    let sec4 = $('#sec4').offset().top + 10
    let sec5 = $('#sec5').offset().top + 10

    if (scTop >= sec0 && scTop < sec1) {
      $('.side_dot a').removeClass('on')
      $('.side_dot a').eq(0).addClass('on')
    }
    if (scTop >= sec1 && scTop < sec2) {
      $('.side_dot a').removeClass('on')
      $('.side_dot a').eq(1).addClass('on')
    }
    if (scTop >= sec2 && scTop < sec3) {
      $('.side_dot a').removeClass('on')
      $('.side_dot a').eq(2).addClass('on')
    }
    if (scTop >= sec3 && scTop < sec4) {
      $('.side_dot a').removeClass('on')
      $('.side_dot a').eq(3).addClass('on')
    }
    if (scTop >= sec4 && scTop < sec5) {
      $('.side_dot a').removeClass('on')
      $('.side_dot a').eq(4).addClass('on')
    }
  })

  // 섹션 1 메인 슬라이드
  var bullet = ['두시', '명화', '프로방스', '도시', '자연'];
  var swiper = new Swiper(".mySwiper1", {
    spaceBetween: 30,
    centeredSlides: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    effect: "fade",
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
      }
    },
  });

  //섹션 2 꽃다발 SML 마우스 호버했을 때 문구 바뀜
  $('#sec2 .hov_inner').eq(1).addClass('on');
  $('#sec2 .text').eq(1).addClass('on');
  $('#sec2 .hov_inner').eq(1).addClass('on');

  $('#sec2 .hov_inner').mouseenter(function () {
    $('#sec2 .hov_inner').removeClass('on');
    $('#sec2 .text').removeClass('on');
    $(this).addClass('on');
    $(this).prev().addClass('on');
  })

  //섹션 4 탭메뉴

  $('.sec4_F_slide').addClass('on');
  $('.flower').addClass('on');

  $('.inner4 .flower').click(function () {
    $('.plant').removeClass('on')
    $('.flower').addClass('on');
    $('.sec4_P_slide').removeClass('on');
    $('.sec4_F_slide').addClass('on');

  })
  $('.inner4 .plant').click(function () {
    $('.flower').removeClass('on')
    $('.plant').addClass('on');
    $('.sec4_F_slide').removeClass('on');
    $('.sec4_P_slide').addClass('on');
  })

  //섹션 4-1


  var swiper2 = new Swiper('.mySwiper2', {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next .btn1',
      prevEl: '.swiper-button-prev .btn1',
    },
  });

  //섹션 4-2
  var swiper3 = new Swiper('.mySwiper3', {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next .btn1',
      prevEl: '.swiper-button-prev .btn1',
    },
    // breakpoints: {
    //   1300: {
    //     slidesPerView: 3,
    //     spaceBetween: 50,
    //   }
    // },
  });


  //섹션 4 가운데로 왔을 때 

  swiper2.on('slideChange', function () {
    let center1 = swiper2.activeIndex + 2;
    let pre1 = swiper2.previousIndex + 2;

    $('.sec4_F_slide .item').eq(center1).addClass('on');
    $('.sec4_F_slide .item').eq(center1).children('.item_img').addClass('on');
    $('.sec4_F_slide .item').eq(pre1).removeClass('on');
    $('.sec4_F_slide .item').eq(pre1).children('.item_img').removeClass('on');
  });

  swiper3.on('slideChange', function () {
    let center = swiper3.activeIndex + 2;
    let pre = swiper3.previousIndex + 2;
    // console.log('p', center);

    $('.sec4_P_slide .item').eq(center).addClass('on');
    $('.sec4_P_slide .item').eq(center).children('.item_img').addClass('on');
    $('.sec4_P_slide .item').eq(pre).removeClass('on');
    $('.sec4_P_slide .item').eq(pre).children('.item_img').removeClass('on');
  });

  // 서브 페이지 

  $('.sec2>article>p').eq(0).addClass('on')
  $('.sec2>article>p').next().eq(0).addClass('on')

  $('.sec2 .title').mouseenter(function () {
    $('.sec2 .title').removeClass('on')
    $('.sec2 .title').next().removeClass('on')

    $(this).addClass('on')
    $(this).next().addClass('on')
  })
})