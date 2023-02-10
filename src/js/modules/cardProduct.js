import {Breakpoints} from "./breakpoints";

let startWidth = $(window).width()

export function hoverCardHandler () {
    const currentWidth = $(window).width();
    if(currentWidth > Breakpoints.SM) {
        startWidth = currentWidth
        console.log('hoverCardHandler init')
        $(document).on('mouseenter', '.card-product', openCard)
        $(document).on('mouseleave', '.card-product', closeCard)
        $(window).on('resize', handlerResize)
    } else if (startWidth > currentWidth){
        console.log('hoverCardHandler off')
        $(document).off('mouseenter', '.card-product', openCard)
        $(document).off('mouseleave', '.card-product', closeCard)
        $(window).off('resize', handlerResize)
    }
}

let hover = false;

function openCard () {
    hover = true
    $(this).css({
        'height': `${$(this).height()}px`,
        'z-index': 2
    })
    $(this).find('.card-product__dropdown').stop().slideDown(150)
}

function closeCard () {
    hover = false
    $(this).find('.card-product__dropdown').stop().slideUp(50, function () {
        $(this).closest('.card-product').css({
            'z-index': 1,
            'height': 'auto'
        })
    })
}

function handlerResize () {
    if(hover) {
        $('.card-product__dropdown').stop().slideUp(0)
        $('.card-product').css({
            'z-index': 1,
            'height': 'auto'
        })
        hover = false
    }
}
