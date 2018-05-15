(function($) {
    var defaultConfig = { btnFocusStyle: 'overview-button-hover', residenceTime: 3000 };

    var slider = function(sliderBox) {
        var self = this;
        this.sliderBox = sliderBox;
        this.config = sliderBox.config;
        this.index = 0;
        this.preIndex = 0;

        this.btnObjs = this.sliderBox.next('div.slider-btn').find("ul li");
        this.btnObjs.click(function() {
            clearInterval(self.timer);
            self.index = $(this).index();
            if (self.index != self.preIndex) {
                self.scrollPlay();
                self.preIndex = self.index;
            }
            self.startTimer();
        });

        this.startTimer();
    };

    slider.prototype = {
        startTimer: function() {
            var self = this;
            var picNum = this.sliderBox.find("div.slider").length;
            this.timer = setInterval(function() {
                self.index = (self.index + 1) % picNum;
                self.scrollPlay();
                self.preIndex = self.index;
            }, this.config.residenceTime);
        },
        scrollPlay: function() {
            var index = this.index;
            var preIndex = this.preIndex;
            if (index == preIndex) {
                return;
            }

            var mybtnFocusStyle = this.config.btnFocusStyle;
            this.btnObjs.eq(index).addClass(mybtnFocusStyle).siblings().removeClass(mybtnFocusStyle);
            var sliders = this.sliderBox.find('.slider');
            var preObj = sliders.eq(preIndex);
            var indexObj = sliders.eq(index);
            var leftValue = 100;
            if (index < preIndex) {
                leftValue *= -1;
            }
            preObj.stop(true, true).animate({ 'left': leftValue * (-1) + '%' });
            indexObj.css('left', leftValue + '%').stop(true, true).animate({ 'left': '0%' });
        }
    };

    $.fn.sliderPlay = function(myConfig) {
        var a = $(this);
        a.config = defaultConfig;
        if (myConfig && typeof myConfig === "object") {
            a.config = $.extend({}, defaultConfig, myConfig);
        }
        myslider = new slider(a);
        return this;
    };
})(jQuery);