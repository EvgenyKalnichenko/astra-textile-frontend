import {modal} from "../modules/modal";
import {swiperInit} from "../modules/swiperInit";

export const modalsInit = () => {
    const $document = $(document);

    $document.on('click', '[data-modal-open]', function (e) {
        e.preventDefault();
        const $this = $(this),
            modalId = $this.data('modal-open');

        modal.open(modalId);
    });

    $document.on('click', '[data-modal-ajax-open]', function (e) {
        e.preventDefault();
        const $this = $(this),
            modalId = $this.data('modal-ajax-open'),
            params = $this.data('modal-params');

        modal.openWithAjax(modalId, params);
    });

    $document.on('click', '[data-modal-close]', function (e) {
        e.preventDefault();
        const $this = $(this),
            modalId = $this.data('modal-close');
        modal.close(modalId);
    });

    $document.on('mousedown', '[data-modal]', function (e) {
        if ($(e.target).closest('[data-modal-inner]').length) return;
        e.preventDefault();
        const modalId = $(e.currentTarget).data('modal');
        modal.close(modalId);
    });

    $(document).on('modal-open', (params, name) => {
        if(name === 'fast-view') {
            swiperInit()
            myLazyLoad.update()
        }
    })

    $(document).on('mouseleave', '.header__phone', () => {
        modal.close('popup-callback')
    })
}
