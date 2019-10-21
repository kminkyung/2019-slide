(function (){
	var now = 1;
	var interval = setInterval(slide, 3000);
	function slide() {
		$(".banners").stop().animate({"top":(-380*now)+"px"}, 500, function (){
			if(now == 5) {
				now = 1;
				$(this).css({"top":0});
			}
			else now++;
		})
	}
})();
