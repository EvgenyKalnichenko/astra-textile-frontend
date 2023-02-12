import {modal} from "../modules/modal";

$(document).on('mouseenter', '[data-menu-open]', openMenu)

// $(document).on('mouseleave', '[data-menu-open]', closeMenu)

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
