import {copyUrl} from "./utils";

$(document).on('click', '.social-share__item', function (e) {
    e.preventDefault();
    console.log('123')
    const $this = $(this);

    const service = $this.data('share'), curPage = $this.attr('href'), encoded = encodeURI(curPage);
    let timeout = null;

    switch (service) {
        case 'copy':
            copyUrl(curPage);
            clearTimeout(timeout);
            $('[data-share="copy"]').addClass('success')
            timeout = setTimeout(() => {
                $('[data-share="copy"]').removeClass('success')
            }, 1500)
            break;
        case 'vk':
            window.repost('//vk.com/share.php?url=' + encoded)
            break;
        case 'fb':
            window.repost('//www.facebook.com/sharer/sharer.php?u=' + encoded)
            break;
        case 'tw':
            window.repost('//twitter.com/intent/tweet?url=' + encoded)
            break;
        case 'telegram':
            window.repost('https://telegram.me/share/url?url=' + encoded)
            break;
        case 'whatsapp':
            window.repost('https://api.whatsapp.com/send?text=' + encoded)
            break;
        case 'viber':
            window.repost('viber://forward?text=' + encoded)
            break;
    }
    return false;
})

window.repost = function (link) {
    window.open(
        link,
        '_blank',
        'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0'
    );
}
