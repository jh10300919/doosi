$(() => {
    //사이드 슬라이드 토글 색
    $('.side_dot a').eq(0).addClass('on');
    $('.side_dot a').click(function () {
        $('.side_dot a').removeClass('on');
        $(this).addClass('on')
    })

    //섹션 1 메인 슬라이드
    var swiper = new Swiper(".mySwiper", {
        // spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            disableOnInteraction: false,
        },
        effect: "fade",
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,

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


})
