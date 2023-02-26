import isEmail from 'validator/lib/isEmail';
import isStrongPassword from 'validator/lib/isStrongPassword';
import isEmpty from 'validator/lib/isEmpty';
import isLength from 'validator/lib/isLength';
import equals from 'validator/lib/equals';
// import isMobilePhone from "validator/es/lib/isMobilePhone";

const checkValid = (fn, $this, message) => {
    const group = $this.closest('.form-group')
    const form = group.closest('form')

    if (fn) {
        group.addClass('success')
        group.removeClass('error')
        group.find('.form-group__error').remove()
        if (!form.find('.form-group').hasClass('error')) {
            form.find('[type="submit"]').attr('disabled', false)
        }
        return false;
    } else {
        if (!group.hasClass('error')) {
            group.removeClass('success')
            group.addClass('error')
            group.append(`<div class="form-group__error">${message}</div>`)
        }
        if (form.find('.form-group').hasClass('error')) {
            form.find('[type="submit"]').attr('disabled', true)
        }
        return message;
    }
}

const serviceRules = {
    require: (val, $this) => checkValid(!isEmpty(val), $this, 'Обязательное поле'),
    email: (val, $this) => checkValid(isEmail(val), $this, 'E-mail не вадиден'),
    password: (val, $this) => checkValid(isStrongPassword(val, { minLength: 6, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1}), $this, 'Слишком простой пароль'),
    confirm: (val, $this, params) => {
        const form = $this.closest('form')
        const confirmInput = $(form.find(`[name="${params}"]`)[0])
        const confirmVal = confirmInput.val();

        checkValid(equals(val, confirmVal), $this, 'Подтвердите пароль')
        return checkValid(equals(val, confirmVal), confirmInput, 'Пароли не совпадают')
    },
    length: (val, $this, length) => {
        const min = length
        const max = length

        return checkValid(isLength(val, { min, max }), $this, 'Недостаточно символов')
    },
    phone: (val, $this, locale='ru-RU') => {
        return checkValid(isMobilePhone(val, [locale], { strictMode: true }), $this, 'Невалидный номер')
    },
    policy: (val, $this) => {
        const policy = String($this.is(':checked'));
        return checkValid(equals(policy, 'true'), $this, '')
    }
}

const validationInput = ($this) => {
    const rules = $this.attr('data-rules').split('|')
    const val = $this.val()
    rules.reduce((acc, el) => {
        const array = el.split(':')
        const rule = array[0]
        const params = array[1] || ''

        if (acc) {
            return acc
        } else {
            return serviceRules[rule](val, $this, params)
        }
    }, '')
}

const validationForm = (form) => {
    form.find('[data-rules]').each((index, el) => {
        validationInput($(el))
    })
}

export function validatorInit() {
    $(document).on('input', '[data-rules]', function () {
        validationInput($(this))
    })

    $(document).on('submit', 'form', function (e) {
        e.preventDefault()
        validationForm($(this))
    })
}
