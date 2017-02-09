(function(a) {
    var b = { numOfSlidePic: 2, btnFocusStyle: 'slider_button_hover', speed: 3000 };
    var clearTime = null;
    var $index = 0;
    var $qianindex = 0;
    var btnObj = {};

    function scrollPlay(o) {
        console.log("===>>>scrollPlay");
        btnObj.eq($index).addClass(b.btnFocusStyle).siblings().removeClass(b.btnFocusStyle);
        console.log('window.btnObj', window.btnObj);
        if ($index > $qianindex) {
            o.find('.slider').eq($qianindex).stop(true, true).animate({ 'left': '-100%' });
            o.find('.slider').eq($index).css('left', '100%').stop(true, true).animate({ 'left': '0%' });
        } else {
            o.find('.slider').eq($qianindex).stop(true, true).animate({ 'left': '100%' });
            o.find('.slider').eq($index).css('left', '-100%').stop(true, true).animate({ 'left': '0%' });
        }
    }



    function autoPlay(o) {
        btnObj = o.next('div.slider-btn').find("ul li");

        function setTime() {
            console.log("setTime===>");
            clearTime = setInterval(function() {

                $index++;
                if ($index > b.numOfSlidePic) {
                    $index = 0;
                }
                scrollPlay(o);
                $qianindex = $index;
            }, b.speed);
        }

        btnObj.click(function() {
            console.log("===>>>click");
            clearInterval(clearTime);
            $index = $(this).index();
            if ($index != $qianindex) {
                scrollPlay(o);
                $qianindex = $index;
            }
            setTime();
        });

        setTime();
    }


    a.fn.sliderPlay = function(g) {
        console.log("===>>>sliderPlay");
        if (g && typeof g === "object") {
            console.log("g====object")
            a.extend(b, g);
        }
        console.log("b==", b);
        autoPlay(a(this));
        return this;
    };
})(jQuery);