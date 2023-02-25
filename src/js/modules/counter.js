export default function counterInit() {

    $(document).on('click', '[data-counter-btn]', function () {
        const $this = $(this),
            parent = $this.closest('[data-counter]'),
            input = parent.find('[data-counter-input]');

        let i = parseInt(input.val()) + parseInt($(this).data('counter-btn'));
        input.val(i).trigger('change');
    });

    $(document).on('change', '[data-counter-input]', function () {
        console.log('data-counter-input change', 321)
        const $this = $(this),
            parent = $this.closest('[data-counter]'),
            input = parent.find('[data-counter-input]'),
            val = parseInt($this.val()),
            min = parseInt($this.data('counter-min')),
            max = parseInt($this.data('counter-max')),
            trueMin = Number.isInteger(min) ? min : 0,
            trueMax = Number.isInteger(max) ? max : Infinity,
            trueVal = Math.min(Math.max(val, trueMin), trueMax) || 0;

        input.val(trueVal);
    });

    $(document).on('change', '.counter__input--all', function () {
        console.log('data-counter-input counter__input--all', 321)
        let all = $(this).val();
        const $this = $(this),
            parent = $this.closest('.product-sizes'),
            input = parent.find('[data-counter-input]');

        input.each((index, el) => {
            const max = $(el).attr('data-counter-max')
            if (Number(max) < Number(all)) {
                $(el).val(max)
            } else {
                $(el).val(all)
            }
        })
    });

    $(document).on('change', '.counter__input--size', function () {
        /*const $this = $(this),
            parent = $this.closest('.sizes-counters'),
            allInput = parent.find('.counter__input--all');

        let all = allInput.val();
        if ($this.val() < all) allInput.val($this.val());*/

        const arQuantity = [];
        let sizes = $(this).parents('.product-sizes__all').find('.counter__input--size');
        sizes.each(function (key, item) {
            arQuantity[key] = Number($(item).val());
        });

        let minQuantity = Math.min.apply(Math, arQuantity);
        $(this).parents('.product-sizes').find('.counter__input--all').val(minQuantity)
    });
}
