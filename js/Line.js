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
	minDistanceTo(point) {
		var len = this.length();
		var len_sq = len*len;
		// console.log(len);
		var start = this.start;
		var end = this.end;
		if (len_sq === 0) {
			// console.log('len_sq === 0');
			return point.distanceFrom(start);
		}
		// t defining parametric eq
		var t = (point.sub(start).dot(end.sub(start))/len_sq);
		// var t = start.sub(p).dot(end.sub(start))/len_sq;
		// console.log('t: ', t);
		if (t < 0) return point.distanceFrom(start);

		else if (t > 1) return point.distanceFrom(end);

		else {
			var projection = start.add(end.sub(start).times(t));
			// console.log('projection: ', projection, 'point:', point);
			var dist = point.distanceTo(projection);
			// console.log('dist: ', dist);
			return dist;
		}

	}
}

var line = new Line(new Vector2(2.5,3), new Vector2(4,1));
var point = new Vector2(1,4);
var point2 = new Vector2(1,1);
var point3 = new Vector2(0,0);
// console.log(line.minDistanceTo(point));
// console.log(line.minDistanceTo(point2));

var l2 = new Line(new Vector2(4,4), new Vector2(4,1));

// console.log(l2.minDistanceTo(new Vector2(2,2)))

var line0 = new Line;
line0.minDistanceTo(point2);
