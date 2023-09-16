$(document).ready(function() {
    $('#search-btn').click(function() {
        $(this).toggleClass('fa-times')
        $('.search-bar-container').toggleClass('active')
    })
    $('header .navbar a').click(function() {
        $(this).addClass('active').siblings().removeClass('active')
    })
    $('#login-btn').click(function() {
        $('.login-form-container').addClass('show')
    })
    $('#form-close').click(function() {
        $('.login-form-container').removeClass('show')
    })
    $('#menu-bar').click(function() {
        $(this).toggleClass('fa-times')
        $('header .navbar').toggleClass('show')
    })
    $('.home .controls .vid-btn').click(function() {
        $(this).addClass('active').siblings().removeClass('active')
        let src = $(this).attr('data-source')
        $('.home .video-container #video-slider').attr('src', src)
    })
    var swiper = new Swiper(".review-slider", {
        spaceBetwwen: 20,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });

    var swiper = new Swiper(".brand-slider", {
        spaceBetwwen: 20,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
})