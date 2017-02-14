jQuery(document).ready(function() {
    window.onload = function() {
        $('#blocksItContainer').css('visibility', 'visible');
        $('#blocksItContainer').BlocksIt({
            numOfCol: 4,
            offsetX: 8,
            offsetY: 8
        });
    };
    $('#contact').parent('.post').parent('.content').parent('body').css('background', 'url(../../../../public/image/black-bg.jpg) no-repeat');
    $('#contact').parent('.post').parent('.content').parent('body').css('background-size', 'cover');

    var currentWidth = 1100;
    $(window).resize(function() {
        var winWidth = $(window).width();
        var conWidth;
        if (winWidth < 660) {
            conWidth = 440;
            col = 2;
        } else if (winWidth < 880) {
            conWidth = 660;
            col = 3;
        } else if (winWidth < 1100) {
            conWidth = 880;
            col = 4;
        } else {
            conWidth = 1100;
            col = 4;
        }

        if (conWidth != currentWidth) {
            currentWidth = conWidth;
            $('#blocksItContainer').width(conWidth);
            $('#blocksItContainer').BlocksIt({
                numOfCol: col,
                offsetX: 8,
                offsetY: 8
            });
        }
    });
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'disableScrolling': true
    });
    $('.ccx-gd').sliderPlay({ btnFocusStyle: 'ccx-btn-hover', speed: 3000 });

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

    ga('create', 'UA-91887510-1', 'auto');
    ga('send', 'pageview');

});