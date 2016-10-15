class Vector2 {
	constructor(x = 0 , y = 0) {
		this.x = x;
		this.y = y;
	}
	toString() {
		return `[${this.x}, ${this.y}]`
	}

	normal() {
		let weight = Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2));
		return new Vector2(this.x/weight, this.y/weight);
	}
}
