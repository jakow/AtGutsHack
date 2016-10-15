class Vector2 {
	constructor(x = 0 , y = 0) {
		this.x = x;
		this.y = y;
	}
	toString() {
		return `[${this.x}, ${this.y}]`
	}

	unit() {
		var mag = this.mag();
		return new Vector2(this.x/mag, this.y/mag);
	}
	mag() {
		return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2));
	}
	times(scalar) {
		return new Vector2(this.x*scalar, this.y * scalar);
	}
	add(other) {
		return new Vector2(this.x+other.x, this.y+other.y);
	}
	to(other) {
		return new Vector2(other.x - this.x, other.y - this.y);
	}
	from(other) {
		return this.to.times(-1)
	}

	dot(other) { 
		return new Vector(this.x* other.x, this.y*other.y)
	}

}