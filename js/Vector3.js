var pow = Math.pow;
function pow2(x) { return Math.pow(x,2)}
var sqrt = Math.sqrt;
class Vector3 {
	constructor(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
	}

	normal() {
		var weight = sqrt(pow2(this.x)+pow2(this.y)+pow2(this.z));
		return new Vector3(this.x/weight, this.y/weight, this.z/weight);
	}

	toString() {return `[${this.x}, ${this.y}, ${this.z}]`;}
}


var unitV = new Vector3(1,1,1);
var unitV = unitV.normal();

console.log(unitV);