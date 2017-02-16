(function($) {
    var defaultConfig = { btnFocusStyle: 'slider_button_hover', residenceTime: 3000 };
    var myTimer = null;
    var index = 0;
    var preIndex = 0;
    var btnObj = {};

    function scrollPlay(sliderBox) {
        if (index == preIndex) {
            return;
        }
        var mybtnFocusStyle = sliderBox.config.btnFocusStyle;
        btnObj.eq(index).addClass(mybtnFocusStyle).siblings().removeClass(mybtnFocusStyle);
        var sliders = sliderBox.find('.slider');
        var preObj = sliders.eq(preIndex);
        var indexObj = sliders.eq(index);

        var leftValue = 100;
        if (index < preIndex) {
            leftValue *= -1;
        }
        preObj.stop(true, true).animate({ 'left': (-1) * leftValue + '%' });
        indexObj.css('left', leftValue + '%').stop(true, true).animate({ 'left': '0%' });
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
        }, sliderBox.config.residenceTime);
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
        var a = $(this);
        a.config = defaultConfig;
        if (myConfig && typeof myConfig === "object") {
            a.config = $.extend({}, defaultConfig, myConfig);
        }
        autoPlay(a);
        return this;
    };
})(jQuery);