import {Breakpoints} from "./breakpoints";

const $doc = $(document);
const activeClass = 'is-active';

export function selectTab(tabsName, id) {
    $('[data-tab='+ tabsName +']').removeClass(activeClass);
    $('[data-tab-id='+ id +']').addClass(activeClass);

    $('[data-tab-block='+ tabsName +']').removeClass(activeClass);
    $('[data-tab-block-id=' + id +']').addClass(activeClass);

    $doc.trigger('changeTab', [tabsName, id]);
}
//
// $doc.on('changeTab', function(e, tabsName, id) {
//
// });

$doc.on('click', '[data-tab]', function(e) {
    e.preventDefault();
    const $this = $(this);

    if ($this.hasClass(activeClass)) return;

    const tabsName = $this.data('tab'),
        id = $this.data('tab-id');
    selectTab(tabsName, id);
});
