import Swiper, {Navigation} from "swiper";

export function swiperInit () {
    document.querySelectorAll('.default-slider:not(.swiper-init)').forEach((el) => {
        el.classList.add('swiper-init')
        new Swiper (el.querySelector('.swiper-container'), {
            modules: [Navigation],
            loop: false,
            slidesPerView: 'auto',
            watchOverflow: true,
            speed: 200,
            slideClass: 'news-card',
            navigation: {
                nextEl: el.querySelector('.slider-arrow--next'),
                prevEl: el.querySelector('.slider-arrow--prev'),
            },
        })
    })
}
