import {showMobilePanel, showBtnScrollTop, s} from "./mobile-panel";

export const scrollPositionTop = () => {
    let position = (window.pageYOffset || window.document.scrollTop) - (window.document.clientTop || 0);
    if (isNaN(position)) position = 0;
    return position;
};

export let scrollPos = scrollPositionTop();

let oldScroll = scrollPos
const panel =  $('.news-feed-navigation-bottom');
function showPanel () {
    if (!panel.length) return false;
    if(oldScroll > scrollPos) {
        $('.news-feed-navigation-bottom').addClass('show')
    } else {
        $('.news-feed-navigation-bottom').removeClass('show')
    }
}

window.addEventListener('scroll', () => {
    scrollPos = scrollPositionTop();

    showPanel();
    showMobilePanel();
    showBtnScrollTop();

    oldScroll = scrollPos
}, {passive: true});

