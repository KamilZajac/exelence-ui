import * as bootstrap from 'bootstrap';
import '../scss/main.scss';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import './megamenu'

var swiper = new Swiper('.banner-swiper', {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: '#bannerSwiperNext',
        prevEl: '#bannerSwiperPrev',
    },
});

// be aware that the every carousel should have specific button selector
var listingSwiper1 = new Swiper('.products-listing-swiper', {
    spaceBetween: 25,
    loop: true,
    navigation: {
        nextEl: '#productSwiperNext1',
        prevEl: '#productSwiperPrev1',
    },
    breakpoints: {
        1200: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
    },
});

var testimonialsSwiper = new Swiper('.testimonials-swiper', {
    spaceBetween: 25,
    loop: true,
    navigation: {
        nextEl: '#testimonialSwiperNext',
        prevEl: '#testimonialSwiperPrev',
    },
    breakpoints: {
        992: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
    },
});

