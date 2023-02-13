import '../libs/jquery.mask'

export const SPMaskBehavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '+7 (000) 000 00 00' : '+7 (000) 000 00 00';
    },
    spOptions = {
        onKeyPress: function(val, e, field, options) {
            field.mask(SPMaskBehavior.apply({}, arguments), options);
        },
        placeholder: "+7 (___) ___ __ __"
    };

$('[name="phone"]').mask(SPMaskBehavior, spOptions);
