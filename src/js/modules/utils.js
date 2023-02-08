export function documentReady() {
    // все скрипты загружены документ готов
    $('html').addClass('ready')
}

export const createElement = (template) => {
    const newElement = document.createElement(`div`);
    newElement.innerHTML = template;

    return newElement;
};

export function getCSS(element, property) {
    return window.getComputedStyle(element, null).getPropertyValue(property);
}

export function offset(elem) {
    function getOffsetSum(elem) {
        let top = 0, left = 0;
        while (elem) {
            top = top + parseInt(elem.offsetTop);
            left = left + parseInt(elem.offsetLeft);
            elem = elem.offsetParent;
        }

        return {top: top, left: left};
    }

    function getOffsetRect(elem) {
        let box = elem.getBoundingClientRect();

        let body = document.body;
        let docElem = document.documentElement;

        let scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
        let scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;

        let clientTop = docElem.clientTop || body.clientTop || 0;
        let clientLeft = docElem.clientLeft || body.clientLeft || 0;

        let top = box.top + scrollTop - clientTop;
        let left = box.left + scrollLeft - clientLeft;

        return {
            top: Math.round(top),
            left: Math.round(left)
        };
    }

    if (elem.getBoundingClientRect) {
        return getOffsetRect(elem);
    } else {
        return getOffsetSum(elem);
    }
}

export function copyUrl(link) {
    const input = document.createElement("input");

    document.body.appendChild(input);
    input.value = link;
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
}

export function scrollTo (top= 0) {
    window.scrollTo({
        top,
        behavior: 'smooth'
    })
}

export const isLocalhost = window.location.hostname === 'localhost';
