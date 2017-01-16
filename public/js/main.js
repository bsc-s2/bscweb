jQuery(document).ready(function() {
	$("#products").click(function(){
		$('#nav_up').animate({left:'9rem'});
	});
	$("#products").blur(function(){
		$('#nav_up').animate({left:'-9rem'});
	});
	var width = $(window).width();
	if (width < 766) {
		$('#index_logo').attr('src','{{ site.baseurl }}/public/image/logo_black.png');
	}
});