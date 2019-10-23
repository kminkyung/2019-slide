var AniEasy = (function(){
	function AniEasy(obj) {
		this.elem = obj.elem == undefined ? ".ani-easy" : obj.elem;
		this.elem = document.querySelector(this.elem);
		// this.item = document.querySelector(".box");
		// this.interval = setInterval(ani, 5);
	}
	return AniEasy;
})();

AniEasy.prototype.animate = function(css, speed, cb){
	this.css = css;
	this.speed = speed;
	this.cb = (typeof cb === 'undefined') ? false : (typeof cb === 'function') ? cb : false;
	for(var key in this.css){
		this.cssName = key;
		this.cssValue = this.css[key];
	}
	var position = Number(this.cssValue.replace("px", ""));
	var tar = Number(getComputedStyle(this.elem)[this.cssName].replace("px", ""));
	// console.log(position, allCSS);
	this.interval; 
	interval = setInterval(ani, 20, this);
	function ani(obj) {
		if(Math.ceil(tar) == position) {
			clearInterval(this.interval);
			obj.elem.style[obj.cssName] = position + "px";
			if(obj.cb) obj.cb();
		}
		else {
			tar += (position - tar) * 0.15;
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