jQuery(document).ready(function () {
	$(window).load( function() {
		$('#blocksItContainer').BlocksIt({
			numOfCol: 4,
			offsetX: 8,
			offsetY: 8
		});
	});
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
	})

});