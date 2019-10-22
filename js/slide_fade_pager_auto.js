/* 전역변수 */
var now = 0;    // 페이드 될 li
var depth = 10; // 계속 증가될 z-index값
var speed = 1000; // opacity 속도
var delay = 3000; // animation delay
var interval;

/* 이벤트 */
interval = setInterval(intervalCb, delay);

/* 동작 */
function intervalCb(){
	(now == 4) ? now = 0 : now++;
	$(".pager").eq(now).trigger("click");
	pagerInit();
};

$(".banners").mouseenter(function(){
	clearInterval(interval);
});
$(".banners").mouseleave(function(){
	clearInterval(interval);
	interval = setInterval(intervalCb, delay);
});

$(".pager").click(function(){
	clearInterval(interval);
	now = $(this).index();
	$(".banner").eq(now).css({"z-index": depth++, "opacity": 0});
	$(".banner").eq(now).stop().animate({"opacity": 1}, speed);
	$(".pager").removeClass("active");
	$(".pager").eq(now).addClass("active");
});

