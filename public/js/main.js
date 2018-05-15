jQuery(document).ready(function() {
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
    })
});


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
