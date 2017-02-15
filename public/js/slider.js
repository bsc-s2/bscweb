(function($) {
    var configObj = { btnFocusStyle: 'slider_button_hover', residenceTime: 3000 };
    var myTimer = null;
    var index = 0;
    var preIndex = 0;
    var btnObj = {};

    function scrollPlay(sliderBox) {
        btnObj.eq(index).addClass(configObj.btnFocusStyle).siblings().removeClass(configObj.btnFocusStyle);
        var preObj = sliderBox.find('.slider').eq(preIndex);
        var indexObj = sliderBox.find('.slider').eq(index);
        var direction = true;
        if (index <= preIndex) {
            direction = false;
        }
        primarySlideAnimate(preObj, indexObj, direction);
    }

    function primarySlideAnimate(preObj, indexObj, direction) {
        var leftValue = '100%';
        if (!direction) {
            leftValue = '-100%';
        }
        var leftValueNegative = (Number(leftValue.substr(0, leftValue.length - 1)) / -1).toString() + "%";
        preObj.stop(true, true).animate({ 'left': leftValueNegative });
        indexObj.css('left', leftValue).stop(true, true).animate({ 'left': '0%' });
    }

    function startTimer(sliderBox) {
        var picNum = sliderBox.find('.slider').length - 1;
        myTimer = setInterval(function() {

            index++;
            if (index > picNum) {
                index = 0;
            }
            scrollPlay(sliderBox);
            preIndex = index;
        }, configObj.residenceTime);
    }

    function autoPlay(sliderBox) {
        btnObj = sliderBox.next('div.slider-btn').find("ul li");

        btnObj.click(function() {
            clearInterval(myTimer);
            index = $(this).index();
            if (index != preIndex) {
                scrollPlay(sliderBox);
                preIndex = index;
            }
            startTimer(sliderBox);
        });
        startTimer(sliderBox);
    }

    $.fn.sliderPlay = function(myConfig) {
        if (myConfig && typeof myConfig === "object") {
            $.extend(configObj, myConfig);
        }
        autoPlay($(this));
        return this;
    };
})(jQuery);