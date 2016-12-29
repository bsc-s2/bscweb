$("#products").click(function(){
	$('#nav_up').fadeIn().addClass('nav_up');
});
$("#products").blur(function(){
	$('#nav_up').fadeOut().removeClass('nav_up');
});
