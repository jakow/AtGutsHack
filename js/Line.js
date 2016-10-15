class Line {
constructor(start = new Vector2(0,0), end = new Vector2(0,0)){
	this.start = start;
	this.end = end;
	this.vec = this.start.sub(this.end);
}

	normal() {
		return new Vector2(-this.vec.y, this.vec.x).unit();
	}
	length() {
		return this.end.sub(this.start).mag()
	}
	minDistance(point) {
		var len = this.length();
		var len_sq = len*len;
	}
}

var line = new Line(new Vector2(0,0), new Vector2(1,1));
console.log('normal:', line.normal());
