import "./modules/jqueryIinit";
import "./modules/winsize";
import "./modules/select";
import "./modules/tabs";
import "./modules/footer";
import "./modules/cardProduct";
import "./modules/common";

import LazyLoad from 'vanilla-lazyload';
import {documentReady} from "./modules/utils"
import {swiperInit} from "./modules/swiperInit";
import {modalsInit} from './controllers/modals';
import {withBreakpoint, Breakpoints} from "./modules/breakpoints";
import {hoverCardHandler} from "./modules/cardProduct";

$(function () {

    // документ готов
    documentReady();

    // Инициализация слайдеров
    swiperInit()

    // инициализация модальных окон
    modalsInit();

    // инициализация lazyload
    window.myLazyLoad = new LazyLoad({
        elements_selector: ".lazy",
    });

    // обработчик раскрыввающейся карточки
    withBreakpoint(hoverCardHandler, Breakpoints.SM)
})
