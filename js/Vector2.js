class Vector2 {
	constructor(x = 0 , y = 0) {
		this.x = x;
		this.y = y;
	}
	toString() {
		return `[${this.x}, ${this.y}]`
	}

	mag() {
		return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2));
	}

	unit() {
		let mag = this.mag();
		if (mag == 0) 
			return new Vector2(0,0);
		else 
			return new Vector2(this.x/mag, this.y/mag);
	}

	times(scalar) {
		return new Vector2(this.x*scalar, this.y * scalar);
	}
	add(other) {
		return new Vector2(this.x+other.x, this.y+other.y);
	}	
	sub(other) {
		return new Vector2(this.x-other.x, this.y-other.y);
	}
	distanceTo(other) {
		return new Vector2(other.x - this.x, other.y - this.y);
	}
	distanceFrom(other) {
		return new Vector2(this.x - other.x, this.x - other.y);
	}

	dot(other) { 
		return this.x* other.x + this.y*other.y;
	}

	draw(startPos) {
		ctx.moveTo(startPos.x, startPos.y);
		ctx.lineTo(this.x, this.y);
	} 

}
