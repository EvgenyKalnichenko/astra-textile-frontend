//policy

$(document).on('change', '[data-input-policy]', function () {
    let $this = $(this),
        p = $this.closest('form'),
        b = p.find('button[type=submit], [data-submit]');

    if ($this.prop('checked')) {
        b.prop('disabled', false);
        b.removeClass('disabled');
    } else {
        b.prop('disabled', true);
        b.addClass('disabled');
    }
});


// Каталог меню

if($('.menu-sidebar').length ){
    $(document).on('click', '.menu-sidebar__name', function () {
        $(this).siblings('.menu-sidebar__list').stop().slideToggle(200)
    })

    $('.menu-sidebar__link.is-active').closest('.menu-sidebar__list').css({
        'display' : 'block'
    })
}

// input mask
// $('[name="phone"]').mask('+7 (999) 999 99 99');
// $.fn.setCursorPosition = function (pos) {
//     if ($(this).get(0).setSelectionRange) {
//         $(this).get(0).setSelectionRange(pos, pos);
//     } else if ($(this).get(0).createTextRange) {
//         var range = $(this).get(0).createTextRange();
//         range.collapse(true);
//         range.moveEnd('character', pos);
//         range.moveStart('character', pos);
//         range.select();
//     }
// };
// $(document).on('click', '[name="phone"]', function () {
//     if ($(this).val() === '+7 (___) ___ __ __') {
//         $(this).setCursorPosition(4);  // set position number
//     }
// });

