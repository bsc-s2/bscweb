(function($) {
    var configObj = { btnFocusStyle: 'slider_button_hover', speed: 3000 };
    var clearTime = null;
    var $index = 0;
    var $qianindex = 0;
    var btnObj = {};

    function scrollPlay(sliderBox) {
        btnObj.eq($index).addClass(configObj.btnFocusStyle).siblings().removeClass(configObj.btnFocusStyle);
        var preObj = sliderBox.find('.slider').eq($qianindex);
        var indexObj = sliderBox.find('.slider').eq($index);
        if ($index > $qianindex) {
            primarySlideAnimate(preObj, indexObj, true);
        } else {
            primarySlideAnimate(preObj, indexObj, false);
        }
    }

    function primarySlideAnimate(preObj, indexObj, direction) {
        var leftValue = '100%';
        var leftValueNegative = '-100%';
        if (direction) {
            leftValue = '100%';
            leftValueNegative = '-100%';
        } else {
            leftValue = '-100%';
            leftValueNegative = '100%';
        }
        preObj.stop(true, true).animate({ 'left': leftValueNegative });
        indexObj.css('left', leftValue).stop(true, true).animate({ 'left': '0%' });
    }

    function autoPlay(sliderBox) {
        btnObj = sliderBox.next('div.slider-btn').find("ul li");
        var picNum = sliderBox.find('.slider').length - 1;

        function setTime() {
            clearTime = setInterval(function() {

                $index++;
                if ($index > picNum) {
                    $index = 0;
                }
                scrollPlay(sliderBox);
                $qianindex = $index;
            }, configObj.speed);
        }

        btnObj.click(function() {
            clearInterval(clearTime);
            $index = $(this).index();
            if ($index != $qianindex) {
                scrollPlay(sliderBox);
                $qianindex = $index;
            }
            setTime();
        });

        setTime();
    }

    $.fn.sliderPlay = function(myConfig) {
        if (myConfig && typeof myConfig === "object") {
            $.extend(configObj, myConfig);
        }
        autoPlay($(this));
        return this;
    };
})(jQuery);