import Swiper, {Navigation, Pagination, Thumbs} from "swiper";
import {initIntersectionObserver} from "./initIntersectionObserver";
import {Breakpoints} from "./breakpoints";

export function swiperInit () {
    // слайдр на главной
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

    // Слайдр в карточке товара
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

    // Слайдр отзывов на главной
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
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    1280: {
                        spaceBetween: 30,
                        slidesPerView: 3,
                    }
                }
            })
        },
        document.querySelectorAll('.slider-reviews:not(.init)')
    )

    // Слайдер недавно смотрели & с этими товарами покупают
    initIntersectionObserver(
        (item) => {
            const el = item.target;
            el.classList.add('init')
            new Swiper (el.querySelector('.swiper'), {
                modules: [Navigation],
                loop: false,
                slidesPerView: 'auto',
                watchOverflow: true,
                speed: 200,
                slideClass: 'swiper-slide',
                navigation: {
                    nextEl: el.querySelector('.swiper-arrow__item--next'),
                    prevEl: el.querySelector('.swiper-arrow__item--prev'),
                }
            })
            // Если карточка раскрывающаяся тогда для слайдера создаем
            // отступ снизу и делаем высоту слайдера равным размеру картчоки
            if($(window).width() > Breakpoints.SM) {
                const swiper = $(el.querySelector('.swiper'))
                const getHeightCard = () => $(el.querySelector('.swiper')).find('.card-product:first-child').height();
                const container = swiper.closest('.section-slider__container');

                const setHeightSwiper = () => {
                    container.height(getHeightCard)
                    swiper.css({
                        'padding-bottom': '180px'
                    })
                }
                setHeightSwiper()
                $(window).on('resize', setHeightSwiper)
            }
        },
        document.querySelectorAll('.section-slider:not(.init)')
    )

    // Сладер на детальной странице товара
    initIntersectionObserver(
        (item) => {
            const el = item.target;
            el.classList.add('init')

            const swiper = new Swiper(el.querySelector(".swiper-bottom"), {
                modules: [Navigation],
                spaceBetween: 10,
                slidesPerView: 4,
                freeMode: true,
                watchSlidesProgress: true,

            });

            const swiper2 = new Swiper(el.querySelector(".swiper-top"), {
                modules: [Thumbs, Navigation],
                spaceBetween: 10,
                slidesPerView: 1,
                slideActiveClass: 'is-active',
                navigation: {
                    nextEl: el.querySelector('.swiper-arrow__item--next'),
                    prevEl: el.querySelector('.swiper-arrow__item--prev'),
                },
                thumbs: {
                    swiper: swiper,
                },
                breakpoints: {
                    // when window width is >= 320px
                    0: {
                        slidesPerView: 'auto',
                    },
                    // when window width is >= 640px
                    768: {
                        slidesPerView: 1,
                    }
                }
            });

        },
        document.querySelectorAll('.product-slider:not(.init)')
    )

    // Сладер на странице о компании
    initIntersectionObserver(
        (item) => {
            const el = item.target;
            el.classList.add('init')

            new Swiper (el.querySelector('.swiper'), {
                modules: [Navigation],
                navigation: {
                    nextEl: el.querySelector('.swiper-arrow__item--next'),
                    prevEl: el.querySelector('.swiper-arrow__item--prev'),
                },
                loop: false,
                spaceBetween: 0,
                watchOverflow: true,
                speed: 200,
                slideClass: 'swiper-slide',
                breakpoints: {
                    // when window width is >= 320px
                    0: {
                        slidesPerView: 'auto',
                        spaceBetween: 25,
                    },
                    // when window width is >= 640px
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 25,
                    },
                }
            })
        },
        document.querySelectorAll('.about-slider:not(.init)')
    )
}
