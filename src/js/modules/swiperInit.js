import Swiper, {Navigation, Pagination} from "swiper";
import {initIntersectionObserver} from "./initIntersectionObserver";

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
                1024: {
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
                    // clickable: true
                }
            })
        },
        document.querySelectorAll('.card-product__images:not(.init)')
    )

}