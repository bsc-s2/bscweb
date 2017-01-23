jQuery(document).ready(function () {
	window.onload = function() {
		$('#blocksItContainer').BlocksIt({
			numOfCol: 4,
			offsetX: 8,
			offsetY: 8
		});
	}
	setInterval(function(){
		$("#blocksItContainer").css("visibility","visible")
	},1000);
	var currentWidth = 1100;
	$(window).resize(function() {
		var winWidth = $(window).width();
		var conWidth;
		if(winWidth < 660) {
			conWidth = 440;
			col = 2
		} else if(winWidth < 880) {
			conWidth = 660;
			col = 3
		} else if(winWidth < 1100) {
			conWidth = 880;
			col = 4;
		} else {
			conWidth = 1100;
			col = 4;
		}

		if(conWidth != currentWidth) {
			currentWidth = conWidth;
			$('#blocksItContainer').width(conWidth);
			$('#blocksItContainer').BlocksIt({
				numOfCol: col,
				offsetX: 8,
				offsetY: 8
			});
		}
	});
	lightbox.option({
		'resizeDuration': 200,
		'wrapAround': true,
		'disableScrolling':true
	});
	/*$('#blocksItContainer').BlocksIt({
		numOfCol: 4,
		offsetX: 8,
		offsetY: 8
	});*/

	var clearTime = null;
	var $index = 0;
	var $qianindex = 0;
	autoPlay();
	
	function scrollPlay(){
		$("#overview_button li").eq($index).addClass("overview_button_hover").siblings().removeClass("overview_button_hover");
		if($index > $qianindex){
			$(".overview_slide").eq($qianindex).stop(true,true).animate({"left":"-100%"});
			$(".overview_slide").eq($index).css("left","100%").stop(true,true).animate({"left":"0%"});
		}else{
			$(".overview_slide").eq($qianindex).stop(true,true).animate({"left":"100%"});
			$(".overview_slide").eq($index).css("left","-100%").stop(true,true).animate({"left":"0%"});
		}
	}
	$("#overview_button li").click(function(){
		clearInterval(clearTime);
		$index = $(this).index();
		if($index != $qianindex){
			scrollPlay();
			$qianindex = $index;
		}
		autoPlay();
	});
	function autoPlay(){
		clearTime = setInterval(function(){
			$index++;
			if($index >1){
				$index = 0;
			}			
			scrollPlay();
			$qianindex = $index;
		},4000);
	}

	var clearTime4 = null;
	var $index4 = 0;
	var $qianindex4 = 0;
	autoPlay4();
	
	function scrollPlay4(){
		var cln_long = $(".products_slide").eq($index4).attr("id");
		if(cln_long=="cln_long"){
			$(".products_roll").css("height","470");
		}else{
			$(".products_roll").css("height","300");
		}
		$("#products_button li").eq($index4).addClass("products_button_hover").siblings().removeClass("products_button_hover");
		if($index4 > $qianindex4){
			$(".products_slide").eq($qianindex4).stop(true,true).animate({"left":"-100%"});
			$(".products_slide").eq($index4).css("left","100%").stop(true,true).animate({"left":"0%"});
		}else{
			$(".products_slide").eq($qianindex4).stop(true,true).animate({"left":"100%"});
			$(".products_slide").eq($index4).css("left","-100%").stop(true,true).animate({"left":"0%"});
		}
	}
	$("#products_button li").click(function(){
		clearInterval(clearTime4);
		$index4 = $(this).index();
		if($index4 != $qianindex4){
			scrollPlay4();
			$qianindex4 = $index4;
		}
		autoPlay4();
	});
	function autoPlay4(){
		clearTime4 = setInterval(function(){
			$index4++;
			if($index4 >3){
				$index4 = 0;
			}		
			scrollPlay4();
			$qianindex4 = $index4;
		},4000);
	}
});