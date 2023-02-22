function pageWidget(pages) {
    const widgetWrap = $(`<div class="widget_wrap"><ul class="widget_list"></ul></div>`);
    widgetWrap.prependTo("body");
    for (let i = 0; i < pages.length; i++) {
        $(`<li class="widget_item"><a class="widget_link" href="${pages[i]}.html">${pages[i]}</a></li>`).appendTo('.widget_list');
    }
    const widgetStilization = $(`
        <style>
            body {  
                position: relative;  
            }
            
            .widget_wrap {
                position: absolute;
                top: 0;
                left: 0;
                z-index: 9999;
                padding: 10px 20px;
                background: #222;
                border-bottom-right-radius: 10px;
                -webkit-transition: all .3s ease;
                transition: all .3s ease;
                -webkit-transform: translate(-100%, 0);
                -ms-transform: translate(-100%, 0);
                transform: translate(-100%, 0);
            }
            
            .widget_wrap:after {
                content: " ";
                position: absolute;
                top: 0;
                left: 100%;
                width: 44px;
                height: 44px;
                background: #222 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) no-repeat 50% 50%;
                cursor: pointer;
            }
            
            .widget_wrap:hover {
                -webkit-transform: translate(0, 0);
                -ms-transform: translate(0, 0);
                transform: translate(0, 0);
            }
            
            .widget_item {
                padding: 0 0 10px;
            }
            
            .widget_link {
                color: #fff;
                text-decoration: none;
                font-size: 15px;
            }
            
            .widget_link:hover {
                text-decoration: underline;
            }       
        </style>
    `);
    widgetStilization.prependTo(".widget_wrap");
}

$(function () {
    pageWidget([
        'index',
        'catalog',
        'product-detail',
        'news',
        'news-detail',
        'reviews',
        'basket',
        'order',
        'about',
        'sizes',
        'contacts',
        'delivery',
        'profile',
        'orders',
        'wishlist',
        'favorites',
        '404'
    ]);
});
