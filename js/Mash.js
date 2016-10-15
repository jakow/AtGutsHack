

// rij - center to center distance
// l - distance between two agent
var radius = 1;
var contactRadius = 2 * radius;
var flockingRadius = 2 * radius;
var epsilon = 100; // strength of repulsion
var mu = 1; //damping cosntant



var v1 = new Vector2(1,2);
var v2 = new Vector2(2,5);
distance = v1.to(v2);

function repulsion(distance) {
	if (distance.mag() < contactRadius) {
		return distance.normal().times(-epsilon * (1 - Math.pow(distance.mag()/(2*contactRadius), 2.5)));
	}
	else
		return new Vector2(0,0);
}

console.log(repulsion(distance));

var v1 = new Vector2(1,2);
var v2 = new Vector2(1,1.5);
distance = v1.to(v2);
console.log(repulsion(distance));

var propulsion(distance)


