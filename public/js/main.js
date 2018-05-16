jQuery(document).ready(function() {
    $('#videoTrigger').click(function(event) {
        event.stopPropagation();
        $("#videoBox").css('display', 'block');
        $('#indexVideo')[0].play();
        ga('send', 'event', 'Videos', 'play', 'Product film');
        
    });
    
    $('#videoClose').click(function() {
        $('#indexVideo')[0].pause();
        $("#videoBox").css('display', 'none');
        var myVideo = document.getElementById("indexVideo");
        ga('send', 'event', 'Videos', 'close', 'Product film', parseInt(myVideo.currentTime));
        
    })
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'disableScrolling': true
    });

    $('#squeegee').mousemove(function (event) {
        var Ev= event || window.event;
        var pointX = Ev.clientX
        var warp = $('#squeegee')[0]
        var wrapX = warp.offsetLeft
        var wrapWidth = warp.offsetWidth
        var afterWidth = Ev.clientX - wrapX
        var beforeWidth = wrapWidth - afterWidth
        afterWidth = afterWidth > 950 ? 950 : afterWidth
        beforeWidth = beforeWidth < 40 ? 40 : beforeWidth
        $('#squeegee .squeegee-before').width(beforeWidth)
        $('#squeegee .squeegee-after').width(afterWidth)
        $('#squeegee .squeegee-handle').css({left: afterWidth})
    });
    
    $(document).scroll(function(){
      if($(document).scrollTop() > 100) {
        $(".navbar").addClass('navbar-with-background');
      } else {
        $(".navbar").removeClass('navbar-with-background');
      };
    });

    $(".index-product").mouseenter(function (event) {
        $(this).children().slideUp(200)
        $(this).next().slideDown(200)
    })
    $(".index-product-hover").mouseleave(function (event) {
        $(this).slideUp(200)
        $(this).prev().children().slideDown(200)
    })
});
