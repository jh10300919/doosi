$(()=>{
//사이드 슬라이드 토글 색
    $('.side_dot a').eq(0).addClass('on');
    $('.side_dot a').click(function(){
        $('.side_dot a').removeClass('on');
        $(this).addClass('on')
    })



//섹션 1 메인 슬라이드
let wd = $('.slide>article').eq(0).width();
    let intv = setInterval(function () {
        nextAni()
    }, 3000)

    function nextAni() {
        $('.slide').not(':animated').animate({
            'margin-left': -wd + 'px'
        }, 700, function () {
            $('.slide>article').eq(0).appendTo($('.slide'))
            $('.slide').css('margin-left', '0px')
        })
    }


//섹션 2 꽃다발 SML 마우스 호버했을 때 문구 바뀜
    $('#sec2 .hov_inner').eq(1).addClass('on');
    $('#sec2 .text').eq(1).addClass('on');
    $('#sec2 .hov_inner').eq(1).addClass('on');

    $('#sec2 .hov_inner').mouseenter(function(){
        $('#sec2 .hov_inner').removeClass('on');
        $('#sec2 .text').removeClass('on');
        $(this).addClass('on');
        $(this).prev().addClass('on');
    })

//섹션 4 스와이퍼 슬라이드
// var swiper = new Swiper('.swiper-container', {
//     spaceBetween: 0,
//     loop: true,
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: 'auto',
//     pagination: {
//       el: '.swiper-pagination',
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//   });

})