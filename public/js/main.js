$("#products").click(function(){
	$('#nav_up').animate({left:'9rem'});
});
$("#products").blur(function(){
	$('#nav_up').animate({left:'-9rem'});
});
