$("#products").click(function(){
	$('#nav_up').animate({left:'8rem'});
});
$("#products").blur(function(){
	$('#nav_up').animate({left:'-8rem'});
});
