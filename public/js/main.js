jQuery(document).ready(function() {
    window.onload = function() {
        $('#blocksItContainer').BlocksIt({
            numOfCol: 4,
            offsetX: 8,
            offsetY: 8
        });
    };
    $('#contact').parent('.post').parent('.content').parent('body').css('background', 'url(../../../../public/image/black-bg.jpg) no-repeat');
    $('#contact').parent('.post').parent('.content').parent('body').css('background-size', 'cover');

    setInterval(function() {
        $('#blocksItContainer').css('visibility', 'visible');
    }, 1000);
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
    $('.ccx-gd').sliderPlay({ numOfSlidePic: 5, btnFocusStyle: 'ccx_btn_hover', speed: 3000 });
});