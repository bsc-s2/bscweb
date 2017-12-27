$(document).ready(function() {
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
    })
    
})