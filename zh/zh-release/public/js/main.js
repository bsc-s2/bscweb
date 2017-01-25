jQuery(document).ready(function () {
	window.onload = function() {
		$('#blocksItContainer').BlocksIt({
			numOfCol: 4,
			offsetX: 8,
			offsetY: 8
		});
	}
	$("#contact").parent(".post").parent(".content").parent("body").css("background","url(../../../../public/image/black-bg.jpg) no-repeat");
	$("#contact").parent(".post").parent(".content").parent("body").css("background-size","cover");

        if ($(".head-img").length > 0) {
            var headHeight = $(".head-img").css("height").slice(0,-2) - 80 +"px";
            $("p.headimg-box").css("height",headHeight);
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




	//中文
	$(".ccx-u ul li").click(function(){
		var ccx_id = $(this).attr("id");
		$(".ccx-h .ccx-y").removeClass("ccx-active");
		$("#ccx_ym_sj img").css("visibility","hidden");
		$("#ccx_xz_sj img").css("visibility","hidden");
		$("#ccx_dt_sj img").css("visibility","hidden");
		$("#ccx_db_sj img").css("visibility","hidden");
		$("#ccx_zb_sj img").css("visibility","hidden");
			if (ccx_id=="ccx_ym"){
				$(".ccx-h #ccx_ym").addClass("ccx-active");
				$("#ccx_ym_sj img").css("visibility","visible");
			}
			if (ccx_id=="ccx_xz"){
				$(".ccx-h #ccx_xz").addClass("ccx-active");
				$("#ccx_xz_sj img").css("visibility","visible");
			}
			if (ccx_id=="ccx_dt"){
				$(".ccx-h #ccx_dt").addClass("ccx-active");
				$("#ccx_dt_sj img").css("visibility","visible");
			}
			if (ccx_id=="ccx_db"){
				$(".ccx-h #ccx_db").addClass("ccx-active");
				$("#ccx_db_sj img").css("visibility","visible");
			}
			if (ccx_id=="ccx_zb"){
				$(".ccx-h #ccx_zb").addClass("ccx-active");
				$("#ccx_zb_sj img").css("visibility","visible");
			}
	});
	var clearTime6 = null;
	var $index6 = 0;
	var $qianindex6 = 0;
	autoPlay6();
	function scrollPlay6(){
		$(".ccx-btn li").eq($index6).addClass("ccx_btn_hover").siblings().removeClass("ccx_btn_hover");
		if($index6 > $qianindex6){
			$(".ccx-gd .ccx-dy").eq($qianindex6).stop(true,true).animate({"left":"-100%"});
			$(".ccx-gd .ccx-dy").eq($index6).css("left","100%").stop(true,true).animate({"left":"0%"});
		}else{
			$(".ccx-gd .ccx-dy").eq($qianindex6).stop(true,true).animate({"left":"100%"});
			$(".ccx-gd .ccx-dy").eq($index6).css("left","-100%").stop(true,true).animate({"left":"0%"});
		}
	}
	$(".ccx-btn li").click(function(){
		clearInterval(clearTime6);
		$index6 = $(this).index();
		if($index6 != $qianindex6){
			scrollPlay6();
			$qianindex6 = $index6;
		}
		autoPlay6();
	});
	function autoPlay6(){
		clearTime6 = setInterval(function(){
			$index6++;
			if($index6 >5){
				$index6 = 0;
			}		
			scrollPlay6();
			$qianindex6 = $index6;
		},10000);
	}
});
