import '../libs/jquery.mask'

const SPMaskBehavior = (val) => {
        return val.replace(/\D/g, '').length === 11 ? '+7 (000) 000 00 00' : '+7 (000) 000 00 00';
    },
spOptions = {
    onKeyPress: function (val, e, field, options) {
        field.mask(SPMaskBehavior.apply({}, arguments), options);
    },
    placeholder: "+7 (___) ___ __ __"
};

const initInputMask = () => {
    $('[name="phone"]').mask(SPMaskBehavior, spOptions);
    $('[name="inn-fiz"]').mask('999-999-999 99', {placeholder: "999-999-999 99"});

//Маски для юридического лица
//ИНН организации
    $('[name="inn-organization"]').mask('9999999999', {placeholder: "9999999999"});
//ОГРН
    $('[name="ogrn"]').mask('9999999999999', {placeholder: "9999999999999"});
//ОГРНИП
    $('[name="ogrnip"]').mask('999999999999999', {placeholder: "999999999999999"});
//КПП
    $('[name="kpp"]').mask('999999999', {placeholder: "999999999"});
//БИК 9-значное число начинающееся с цифр – «04» (код Российской Федерации).
    $('[name="bik"]').mask('049999999', {placeholder: "049999999"});
// Рассчетный счет 20 цифр
    $('[name="checking-account"]').mask('99999-999-9-9999-9999999', {placeholder: "99999-999-9-9999-9999999"});
}

export {
    SPMaskBehavior,
    initInputMask
}
