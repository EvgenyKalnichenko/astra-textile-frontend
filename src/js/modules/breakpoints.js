export const Breakpoints = {
    XL: 1640,
    LG: 1279,
    MD: 1023,
    SM: 767,
    XS: 575,
    XXS: 449
};

export const mediaBreakpoints = {
    XL: window.matchMedia(`(max-width: ${Breakpoints.XL}px)`),
    LG: window.matchMedia(`(max-width: ${Breakpoints.LG}px)`),
    MD: window.matchMedia(`(max-width: ${Breakpoints.MD}px)`),
    SM: window.matchMedia(`(max-width: ${Breakpoints.SM}px)`),
    XS: window.matchMedia(`(max-width: ${Breakpoints.XS}px)`),
    XXS: window.matchMedia(`(max-width: ${Breakpoints.XXS}px)`),
};

export const withBreakpoint = function(fn, bp) {
    const mq = window.matchMedia('(max-width: '+ bp +'px)');
    fn(mq);
    mq.addListener(fn);
};
