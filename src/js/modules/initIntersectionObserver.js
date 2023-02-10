
function debugFunction(message, debug= false,) {
    if(debug) console.log(message)
}

export const initIntersectionObserver = (fn, targets, debug = false) => {
    console.log('initIntersectionObserver')
    if (
        'IntersectionObserver' in window &&
        'IntersectionObserverEntry' in window &&
        'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
        document.body.classList.add('is-intersection')
        const options = {
            rootMargin: '0px',
            threshold: [0, 0.25, 0.5, 0.75, 1]
        }
        const observer = new IntersectionObserver(items => {
            items.forEach(item => {
                if (item.isIntersecting) { // && item.intersectionRatio>0.25
                    if(debug) console.log()
                    debugFunction('Нашел элемент')
                    if (!item.target.classList.contains('init')) {
                        debugFunction('выполняю функцию')
                        fn(item)
                    }
                    observer.unobserve(item.target)
                    debugFunction('Перестал следить за элементом')
                }
            })
        }, options)

        targets.forEach(el => {
            observer.observe(el)
        })
    }
}
