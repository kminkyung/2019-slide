/* 전역변수 */
var now = 4;    // 페이드 될 li
var depth = 10; // 계속 증가될 z-index값
var speed = 1000; // opacity 속도
var delay = 3000; // animation delay
var interval;

/* 이벤트 */
interval = setInterval(intervalCb, delay);

/* 동작 */
function intervalCb(){
/* 	if(depth == 800) {
		$(".banner").css({"z-index": 9});
		depth = 9;
	} */
	(now == 4) ? now = 0 : now++;
/* 	if(now == 4) now = 0;
	else now++; */
	$(".banner").eq(now).css({"z-index": depth++, "opacity": 0});
	$(".banner").eq(now).stop().animate({"opacity": 1}, speed);
};