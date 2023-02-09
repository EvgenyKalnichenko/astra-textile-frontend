import {withBreakpoint, Breakpoints} from "./breakpoints";

withBreakpoint(clickHandler, Breakpoints.MD)

function clickHandler () {
  if($(window).width() < Breakpoints.MD) {
    $('.footer__list').slideUp(0)
    $('.footer__title').on('click', toggleMenu)
  } else {
    $('.footer__list').slideDown(0)
    $('.footer__title').off('click', toggleMenu)
  }
}

function toggleMenu () {
  $(this).closest('.footer__col').find('.footer__list').slideToggle(200)
}
