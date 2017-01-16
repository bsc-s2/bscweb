jQuery(document).ready(function() {
	$("#products").click(function(){
	$('#nav_up').animate({left:'10rem'});
	});
	$("#products").blur(function(){
	$('#nav_up').animate({left:'-12rem'});
	});
	var width = $(window).width();
	if (width < 766) {
		$('#index_logo').attr('src','../public/image/logo_black.png');
	}
	
});