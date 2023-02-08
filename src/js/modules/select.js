export default class Select {
    constructor(el, obj) {
        const defaultOpts = {
            head: '[data-select-head]',
            body: '[data-select-body]',
            title: '[data-select-title]',
            items: '[data-select-item]',
            input: null,
            changeHead: true,
            closeOnSelect: true,
            afterSelect: null
        };

        this.options = Object.assign(defaultOpts, obj);

        this.dom = {el: $(el)};
        this.dom.head = this.dom.el.find(this.options.head);
        this.dom.body = this.dom.el.find(this.options.body);
        this.dom.title = this.dom.el.find(this.options.title);
        this.dom.items = this.dom.el.find(this.options.items);
        this.dom.input = this.dom.el.find(this.options.input);
        this.defaultValue = this.dom.title.text();
        this.activeClass = 'is-active';

        this.setEvents();

        this.dom.el.attr('data-select-init', true);
    }
    setEvents() {
        this.dom.head.on('click', this.toggle.bind(this));
        this.dom.items.on('click', e => {
            const $this = $(e.target),
                isActive = $this.hasClass('active'),
                text = isActive ? this.defaultValue : $this.text();
            this.changeActive($this);
            if (this.options.changeHead) this.changeHead(text);
            if (this.dom.input.length) this.changeInput(text);
            if (this.options.closeOnSelect) this.close();
            if (this.options.afterSelect) this.options.afterSelect(this);
        });

        $(document).mouseup((e) => {
            if (
                !this.dom.el[0].contains(e.target) &&
                !$(e.target).closest('.air-datepicker-global-container').length
            ) {
                this.close();
            }
        });
    }
    open() {
        this.dom.el.addClass(this.activeClass);
    }
    close() {
        this.dom.el.removeClass(this.activeClass);
    }
    toggle() {
        if (this.dom.el.hasClass(this.activeClass)) {
            this.close();
        } else {
            this.open();
        }
    }
    changeHead(text) {
        this.dom.title.text(text);
    }
    changeInput(text) {
        this.dom.input.val(text);
    }
    changeActive(el) {
        const isActive = el.hasClass('active');
        this.dom.items.removeClass('active');
        if (!isActive) {
            el.addClass('active');
        }
    }
}

$('[data-select=sort]:not([data-select-init=true])').each(function() {
    const select = new Select(this, {
        changeHead: false,
        closeOnSelect: true
    });

    $(this).find('[data-sort-close]').on('click', function () {
        select.close();
    })

    $(this).find('[data-select-change]').on('click', function() {
        const $this = $(this),
            $body = $this.closest('[data-select-body]'),
            $activeRadio = $body.find('input[type=radio]:checked'),
            isRange = $activeRadio.data('range');

        let text = '';

        if (isRange) {
            const $inputBox = $activeRadio.closest('.input-radio'),
                start = $inputBox.find('[data-range-start]').val(),
                end = $inputBox.find('[data-range-end]').val(),
                rangeText = `c ${start} по ${end}`;

            $activeRadio.data('value', rangeText);
            text = rangeText;
        } else {
            text = `${$activeRadio.data('value')}`;
        }

        select.changeHead(text);
        select.close();
    });
});


