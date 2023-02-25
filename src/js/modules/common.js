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
if ($('.menu-sidebar').length) {
    $(document).on('click', '.menu-sidebar__name', function () {
        $(this).siblings('.menu-sidebar__list').stop().slideToggle(200)
    })

    $('.menu-sidebar__link.is-active').closest('.menu-sidebar__list').css({
        'display': 'block'
    })
}

// Раскрытие карточки в корзине
$(document).on('click', '.card-basket__more', function () {
    const card = $(this).closest('.card-basket')
    card.toggleClass('is-active')
    card.find('.card-basket__dropdown').slideToggle(200)

    if (card.hasClass('is-active')) {
        $(this).text('Скрыть количество и размеры')
    } else {
        $(this).text('Показать количество и размеры')
    }
})

//Раскрытие карточки в заказах
$(document).on('click', '.card-order__toggle', function (e) {
    e.preventDefault();
    const card = $(this).closest('.card-order')
    card.toggleClass('is-active')
    card.find('.card-order__dropdown').slideDown(200)
})

$(document).on('click', '.card-order__panel-right', function (e) {
    e.preventDefault();
    const card = $(this).closest('.card-order')
    card.removeClass('is-active')
    card.find('.card-order__dropdown').slideUp(200)
})


// Изменение типа у инпута
$(document).on('click', '.form-group__change-type', function () {
    const $this = $(this)
    const input = $this.closest('.form-group').find('input')
    const currentType = input.attr('type')

    if (currentType === 'password') {
        input.attr('type', 'text')
        $this.addClass('is-active')
    } else {
        input.attr('type', 'password')
        $this.removeClass('is-active')
    }
})

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

