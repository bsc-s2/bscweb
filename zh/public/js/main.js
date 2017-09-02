jQuery(document).ready(function() {
    // let contentHeight = $('.my-container').css('height').slice(0,-2)
    // let windowHeight = $(window).height()
    // let postHeight = $('.post').css('height').slice(0,-2)
    // let bottomHeight = $('.bottom-nav-cn').css('height').slice(0,-2)
    // if (contentHeight < windowHeight) {
    //     let prevHeight = contentHeight - postHeight
    //     let targetHeight = `${windowHeight - bottomHeight - prevHeight}px`
    //     $('.post').css('height', targetHeight)
    // }
    $('#headerwrap').click(function(){
        console.log('sdddd');
        $('#jobLink').trigger('click');
    })
    window.onload = function() {
        $('#blocksItContainer').css('visibility', 'visible');
        setBlocksItCol();
    };
    $("#navXSContent").click(function() {
        event.stopPropagation();
    });
    $("#navXSButton").click(function() {
        $("#navXSBox").css('display', 'block').removeClass('navhide').addClass('navshow');
    });
    var $navXSBox = $("#navXSBox");
    $navXSBox.click(function() {
        $navXSBox.removeClass('navshow').addClass('navhide');
        setTimeout(function() {
            $navXSBox.css('display', 'none');
        }, 500);
    });
    $("#xsNavButton").click(function() {
        $('#xsNav').toggle();
    });
    $("#productsDropdownButton").click(function() {
        $('#productsDropdown').toggle();
    });
    /*video*/
    $('#videoTrigger').click(function() {
        event.stopPropagation();
        $("#videoBox").css('display', 'block');
        $('#indexVideo')[0].play();
        ga('send', 'event', 'Videos', 'play', 'Product film');
        
    })
    $('#videoClose').click(function() {
        $('#indexVideo')[0].pause();
        $("#videoBox").css('display', 'none');
        var myVideo = document.getElementById("indexVideo");
        ga('send', 'event', 'Videos', 'close', 'Product film', parseInt(myVideo.currentTime));
        
    })

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