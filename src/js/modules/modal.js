import {lockScroll, unlockScroll} from "./scroll-lock";
import {createElement} from "./utils";

class Modal {
    constructor() {
        this.modalSelector = '[data-modal]';
        this.body = $('body');
        this.doc = $(document);
        this.closeTimeout = 300;
        this.activeClass = 'is-active';
        this.loadingClass = 'modal-loading';
    }

    isOtherOpen() {
        return $(this.modalSelector).filter(`.${this.activeClass}`).length;
    }

    open (id) {
        const $modal = $(`[data-modal=${id}]`);

        lockScroll();

        $modal.addClass(this.activeClass).focus();
        this.body.addClass('modal-open');
        this.doc.trigger('modal-open', [id]);
    }

    openWithAjax (id, params) {
        const isModalExist = $(`[data-modal=${id}]`).length;

        if (isModalExist) {
            this.open(id);
            return;
        }

        let ajaxUrl = (location.hostname === 'localhost' || location.hostname === '192.168.0.13' || "cadesign.ru" === location.hostname) ? `./ajax/${id}.html` : `/local/ajax/`;
        let ajaxDataType = (location.hostname === 'localhost' || location.hostname === '192.168.0.13' || "cadesign.ru" === location.hostname) ? `html` : `json`;
        let ajaxMethod = (location.hostname === 'localhost' || location.hostname === '192.168.0.13' || "cadesign.ru" === location.hostname) ? `GET` : `POST`;
        $.ajax({
            url: ajaxUrl,
            method: ajaxMethod,
            data: {
                return: 'html',
                action: 'LoadBlocks/getModal',
                modalID: id,
                params
            },
            beforeSend: () => {
                this.showLoader();
            },
            success: (data) => {
                const dataHtml = createElement(data);
                document.body.insertAdjacentElement('beforeend', dataHtml);
                this.onModalLoaded(dataHtml);
                this.open(id);
                myLazyLoad.update();
                // input mask
                if($(`[data-modal=${id}]`).find('[name="phone"]').length) {
                    $('[name="phone"]').mask('+7 (999) 999 99 99');
                }
            },
            error: () => {
                this.showError();
            },
            complete: () => {
                this.hideLoader();
            }
        });

    }

    close(id) {
        const $modal = $(`[data-modal=${id}]`),
            dataOnClose = $modal.data('modal-onclose');

        if (id) {
            $modal.removeClass(this.activeClass);
        } else {
            $('[data-modal]').removeClass(this.activeClass);
        }

        if (!this.isOtherOpen()) {
            setTimeout(() => {
                unlockScroll();
                this.body.removeClass('modal-open');

                if (dataOnClose === 'remove') {
                    $modal.remove();
                }
            }, this.closeTimeout);
        }

        this.doc.trigger('modal-close', [id]);
    }

    toggle(id) {
        const $modal = $(`[data-modal=${id}]`);
        const isActive = $modal.hasClass(this.activeClass);
        if (isActive) {
            this.close(id);
        } else {
            this.open(id);
        }
    }

    showLoader() {
        let $loader = $(`.modal-loader`);

        if (!$loader.length) {
            $loader = $(`<div class="modal-loader" />`);
            this.body.append($loader);
        }

        this.body.addClass(this.loadingClass);
    }

    hideLoader() {
        this.body.removeClass(this.loadingClass);
    }

    showError() {
        let $errorModal = $(`[data-modal="modal-error"]`);

        if (!$errorModal.length) {
            $errorModal = $(`<div class="modal" data-modal="modal-error"><div class="modal__error">Произошла ошибка</div></div>`);
            this.body.append($errorModal);
        }

        this.open('modal-error');
    }

    onModalLoaded(dataHtml) {}
}

export default Modal;

export const modal = new Modal();

window.Modal = modal;
