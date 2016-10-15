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
		// t defining parametric eq
		var start = this.start;
		var end = this.end;
		var t = point.sub(start).dot(end.sub(start))/len_sq;
		if (t < 0) return point.to(start).mag();

		else if (t > 1) return point.to(end).mag();

		else {
			var projection = start + t*end.sub(start);
			return point.to(projection).mag();
		}
	
	}
}

var line = new Line(new Vector2(0,0), new Vector2(1,1));
console.log('normal:', line.normal());