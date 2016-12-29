$(document).ready(function(){
 	$("#products").click(function(){
		(this).fadeIn();
	});
	$("#products").blur(function(){
		(this).fadeOut();
	});
});