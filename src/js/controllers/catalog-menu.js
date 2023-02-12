import {modal} from "../modules/modal";

$(document).on('mouseenter', '[data-menu-open]', openMenu)

// $(document).on('mouseleave', '[data-menu-open]', closeMenu)

$('.header__menu').on('click', function () {
    const $this = $(this)
    const isActive = $this.hasClass('is-active')
    $this.toggleClass('is-active')
    if(isActive) {
        modal.close('menu-catalog')
        modal.close('menu-mobile')
    } else {
        modal.open('menu-mobile')
    }
})

function openMenu() {
    closeMenu()
    const $this = $(this)
    const name = $this.attr('data-menu-open')
    // $this.addClass('is-active')
    console.log('name', name)
    modal.open(name)
}

function closeMenu() {
    $('.menu-catalog__second.is-active').removeClass('is-active')
    $('[data-menu-open]').removeClass('is-active')
}
