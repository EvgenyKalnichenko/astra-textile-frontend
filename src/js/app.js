import "./modules/jqueryIinit";
import "./modules/winsize";
import "./modules/select";
import "./modules/tabs";
import "./modules/footer";
import "./modules/cardProduct";
import "./modules/common";
import "./modules/share";
import "./controllers/catalog-menu";
import "./controllers/mask";

import LazyLoad from 'vanilla-lazyload';
import counterInit from "./modules/counter";
import {documentReady} from "./modules/utils"
import {swiperInit} from "./modules/swiperInit";
import {modalsInit} from './controllers/modals';
import {validatorInit} from "./controllers/validatir";
import {selectsInit} from './modules/select';
import {interactionWithCard} from "./modules/cardProduct";
import {initFilterList} from "./modules/filterList";
import {initInputMask} from "./controllers/mask";

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

    //
    counterInit()

    // Фильтр в каталоге
    initFilterList();

    //Валидация инпутов
    validatorInit()

    //Маски инпутов
    initInputMask()
})
