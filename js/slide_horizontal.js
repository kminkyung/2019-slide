(function (){
	var now = 1; // 몇번째그림인지
	var interval = setInterval(slide, 3000);
	function slide(){
		$(".banners").stop().animate({"left": (-720*now)+"px"}, 500, function(){
			if(now == 5) {
				now = 1;
				$(this).css({"left":0}); // 눈속임
			}
			else now++;
		});
	}
})();
