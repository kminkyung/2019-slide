var AniEasy = (function(){
	function AniEasy(elem) {
		this.elem = (elem == undefined) ? ".ani-easy" : elem;
		this.elem = document.querySelector(this.elem);
		// this.item = document.querySelector(".box");
		// this.interval = setInterval(ani, 5);
		this.interval;
	}
	return AniEasy;
})();

AniEasy.prototype.animate = function(css, cb){
	this.css = css;
	this.interval;
	this.cb = (typeof cb === 'undefined') ? false : (typeof cb === 'function') ? cb : false;
	for(var key in this.css){
		this.cssName = key;
		this.cssValue = this.css[key];
	}
	var position = Number(this.cssValue.replace("px", "")); // -720(숫자)
	var tar = Number(getComputedStyle(this.elem)[this.cssName].replace("px", "")); // 초기값 0 (숫자)
	// console.log(position, allCSS);
	clearInterval(this.interval);
	this.interval = setInterval(ani, 20, this) // 함수안에서 this는 함수의 부모(window), 여기서는 AniEasy

	function ani(obj) { // obj는 AniEasy
		// console.log(this)
		if(Math.ceil(Math.abs(tar)) == Math.abs(position)) {
			clearInterval(obj.interval);
			obj.elem.style[obj.cssName] = position + "px";
			if(obj.cb) obj.cb();
		}
		else {
			tar += (position - tar) * 0.15;
			if(tar > Number(getComputedStyle(obj.elem)["width"].replace("px", ""))) tar = 0;
			obj.elem.style[obj.cssName] = tar + "px";
		}
	}
};

/* 
obj = {
	element: ".box", "#box", "div",
	target: 700,
	speed: 500,
}
*/