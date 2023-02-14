class FilterList {
    constructor(list) {
        this.list = list
        this.selected = []
        this.inputs = this.list.querySelectorAll('input')
        this.btnReset = this.list.querySelector('.filter-list__reset')
        this.toggle = this.list.querySelector('.filter-list__btn')
        this.activeClass = 'is-active'
        this.htmlBtn = '<div class="filter-list__btn"><span>Показать все </span></div>'
        this.maxCount = this.list.getAttribute('data-max-count') || 5

        this.initFilter()
    }

   showBtnReset () {
       this.btnReset.classList.add(this.activeClass)
    }

    hiddenBtnReset () {
        this.btnReset.classList.remove(this.activeClass)
    }

    showList () {
        this.list.classList.add(this.activeClass)
        $(this.list.querySelector('.filter-list__btn')).text('Скрыть')
    }

    hiddenList () {
        this.list.classList.remove(this.activeClass)
        $(this.list.querySelector('.filter-list__btn')).text('Показать все')
    }

    addBtn() {
        const count = this.inputs.length

        if(count > this.maxCount) {
            $(this.list).find('.filter-list-wrap').append(this.htmlBtn)
            const btn = this.list.querySelector('.filter-list__btn')
            btn.addEventListener('click', () => {
                if(!$(this.list).hasClass(this.activeClass)) {
                    this.showList()
                } else {
                    this.hiddenList()
                    $(btn).text('Показать все')
                }
            })
        }
    }

    handlerInput (el) {
        console.log('handlerInput', el)
        const checked = $(el.target).is(':checked')
        const id = el.target.getAttribute('id')
        if(checked) {
            this.selected.push({
                id,
                value: el.target.value,
                checked
            })
        } else {
            this.selected = this.selected.filter(el => el.id !== id)
        }

        this.selected.length ? this.showBtnReset() : this.hiddenBtnReset()
    }

    setState (checked, id, value) {
        if(checked) {
            this.selected.push({
                id,
                value,
                checked
            })
        } else {
            this.selected = this.selected.filter(el => el.id !== id)
        }

        this.selected.length ? this.showBtnReset() : this.hiddenBtnReset()
    }

    initFilter() {
        // Добавление кнопки показать еще, если элементов больше 4
        this.addBtn()

        this.inputs.forEach((input, index) => {
            const checked = $(input).is(':checked')
            const id = input.getAttribute('id')
            const value = input.value

            this.setState(checked, id, value)
            if(index < this.maxCount) {
                $(input).closest('.filter-list__item').css({
                    'display': 'block'
                })
            }

            input.addEventListener('change', (e) => {
                const checked = $(e.target).is(':checked')
                const id = e.target.getAttribute('id')
                const value = e.target.value

                this.setState(checked, id, value)
            })
        })

        this.btnReset.addEventListener('click', () => {
            this.inputs.forEach(input => {
                input.checked = false
            })
            this.hiddenBtnReset()
        })
    }
}

export const initFilterList = () => {
    document.querySelectorAll('.filter-list').forEach(list => {
        const filter = new FilterList(list)

        if(filter.selected.length) {
            // filter.showList()
        }
    })
}
