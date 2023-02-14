import "./modules/jqueryIinit";
import "./modules/winsize";
import "./modules/select";
import "./modules/tabs";
import "./modules/footer";
import "./modules/cardProduct";
import "./modules/common";
import "./controllers/catalog-menu";
import "./controllers/mask";

import LazyLoad from 'vanilla-lazyload';
import {documentReady} from "./modules/utils"
import {swiperInit} from "./modules/swiperInit";
import {modalsInit} from './controllers/modals';
import {selectsInit} from './modules/select';

import {interactionWithCard} from "./modules/cardProduct";
import {initFilterList} from "./modules/filterList";

$(function () {

    // документ готов
    documentReady();

    // Инициализация слайдеров
    swiperInit()

    // инициализация модальных окон
    modalsInit();

    // инициализация селектов
    selectsInit()

    // инициализация lazyload
    window.myLazyLoad = new LazyLoad({
        elements_selector: ".lazy",
    });

    // Взаимодействие с карточкой товара (открытие закрытие) только на девайсах больше 768
    interactionWithCard()


    // Фильтр в каталоге
    initFilterList();
})
