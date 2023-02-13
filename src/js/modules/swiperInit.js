import Swiper, {Navigation, Pagination} from "swiper";
import {initIntersectionObserver} from "./initIntersectionObserver";
import {Breakpoints} from "./breakpoints";

export function swiperInit () {
    document.querySelectorAll('.main-slider:not(.swiper-init)').forEach((el) => {
        el.classList.add('swiper-init')
        new Swiper (el.querySelector('.swiper-container'), {
            modules: [Navigation, Pagination],
            loop: false,
            slidesPerView: 2,
            spaceBetween: 18,
            watchOverflow: true,
            speed: 200,
            slideClass: 'swiper-slide',
            navigation: {
                nextEl: el.querySelector('.swiper-arrow__item--next'),
                prevEl: el.querySelector('.swiper-arrow__item--prev'),
            },
            pagination: {
                el: el.querySelector('.swiper-pagination'),
                // type: 'bullets',
                clickable: true
            },
            breakpoints: {
                // when window width is >= 320px
                0: {
                    slidesPerView: 1,
                },
                // when window width is >= 640px
                1023: {
                    slidesPerView: 2,
                }
            }
        })
    })

    initIntersectionObserver(
        (item) => {
            const el = item.target;
            el.classList.add('init')
            new Swiper (el.querySelector('.swiper'), {
                modules: [Pagination],
                loop: false,
                slidesPerView: 1,
                spaceBetween: 0,
                watchOverflow: true,
                speed: 200,
                slideClass: 'swiper-slide',
                pagination: {
                    el: el.querySelector('.swiper-pagination--card-product'),
                    type: 'bullets',
                }
            })
        },
        document.querySelectorAll('.card-product__images:not(.init)')
    )

    initIntersectionObserver(
        (item) => {
            const el = item.target;
            el.classList.add('init')
            new Swiper (el.querySelector('.swiper'), {
                modules: [Pagination, Navigation],
                loop: false,
                watchOverflow: true,
                speed: 200,
                slideClass: 'swiper-slide',
                navigation: {
                    nextEl: el.querySelector('.swiper-arrow__item--next'),
                    prevEl: el.querySelector('.swiper-arrow__item--prev'),
                },
                breakpoints: {
                    // when window width is >= 320px
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                        pagination: {
                            el: el.querySelector('.swiper-pagination'),
                            type: 'bullets',
                            clickable: true
                        },
                    },
                    // when window width is >= 640px
                    767: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    1279: {
                        spaceBetween: 30,
                        slidesPerView: 3,
                    }
                }
            })
        },
        document.querySelectorAll('.slider-reviews:not(.init)')
    )
}