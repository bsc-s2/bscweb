jQuery(document).ready(function() {
    window.onload = function() {
        $('#blocksItContainer').css('visibility', 'visible');
        setBlocksItCol();
    };

    function setBlocksItCol() {
        var winWidth = $(window).width();
        var col = 2 + ((winWidth - 767) > 0) + ((winWidth - 1099) > 0);
        $('#blocksItContainer').width('100%').BlocksIt({
            numOfCol: col,
            offsetX: 8,
            offsetY: 8
        });
    }
    $(window).resize(function() {
        setBlocksItCol();
    });
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'disableScrolling': true
    });
    $('.ccx-gd').sliderPlay({ btnFocusStyle: 'ccx-btn-hover', residenceTime: 3000 });

    $('.slider-cdn-xs').sliderPlay({ btnFocusStyle: 'ccx-btn-hover', residenceTime: 3000 });

    (function(i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function() {
            (i[r].q = i[r].q || []).push(arguments);
        };
        i[r].l = 1 * new Date();
        a = s.createElement(o);
        m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m);
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-91873933-1', 'auto');
    ga('send', 'pageview');

});