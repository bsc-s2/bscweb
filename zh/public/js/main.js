jQuery(document).ready(function() {
    $('#headerwrap').click(function(){
        console.log('sdddd');
        $('#jobLink').trigger('click');
    })
    window.onload = function() {
        $('#blocksItContainer').css('visibility', 'visible');
        setBlocksItCol();
    };
    $("#navXSContent").click(function(event) {
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
    $('#videoTrigger').click(function(event) {
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
    /* login analytics */
    $('#login').click(function(event) {
        ga('send', 'event', 'Login');
        
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
    ga('set', 'userId', 'USER_ID');


    //cln-API L2 Cache svg js start
    $("#step-1").hide();
    $("#step-2").hide();
    $("#step-3").hide();
    $("#step-4").hide();

    function showStep(step) {
        $("#step-1").hide('slow');
        $("#step-2").hide('slow');
        $("#step-3").hide('slow');
        $("#step-4").hide('slow');
        $("#step-" + step).show('slow');
    }
    
    $("._step_").mouseout(function(){
        showStep(-1);
    });

    var auto = true;
    var i = 1;
    setInterval(function(){
        if ( !auto ) return;
            showStep(i);
        if ( i > 4 ) {
            i = 1;
        } else {
            i++;
        }
    }, 2500);

    $("#oval-step-1").mouseover(function() {
        auto = false;
        showStep(1);
    });
    $("#oval-step-2").mouseover(function() {
        auto = false;
        showStep(2);
    });
    $("#oval-step-3").mouseover(function() {
        auto = false;
        showStep(3);
    });
    $("#oval-step-4").mouseover(function() {
        auto = false;
        showStep(4);
    });
    //cln-API L2 Cache svg js end

    // cln-x banner
    const img = document.getElementById("bannerImg")
    const urlArray = $('#bannerImg').attr('src').split('/')
    const srcArray = ['cln-defore.png','cln-after.png']
    const len = srcArray.length - 1
    let index = 0
    setInterval(function() {
        img.style.transition='opacity 1s ease-in 0s'
        img.style.opacity=0.2
        setTimeout(function(){
            urlArray.splice(urlArray.length-1,1,srcArray[index])
            img.src = urlArray.join('/')
            img.style.transition='opacity 1s ease-out 0s'
            img.style.opacity=1
        },1000)
        setTimeout(function(){
            img.style.transition='none'
        },2000)
        if(++index > len) {
            index = 0
        }
    },4000)
});
