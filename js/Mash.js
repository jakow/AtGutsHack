

// rij - center to center distance
// l - distance between two agent
var radius = 1;
var contactRadius = 2 * radius;
var flockingRadius = 2 * radius;
var epsilon = 100; // strength of repulsion
var damp = 1; //damping cosntant
var flock = 0.55;
var noiseLevel = 0.01;



var v1 = new Vector2(1,2);
var v2 = new Vector2(2,5);
distance = v1.to(v2);

function repulsion(distance) {
	if (distance.mag() < contactRadius) {
		return distance.unit().times(-epsilon * (1 - Math.pow(distance.mag()/(2*contactRadius), 2.5)));
	}
	else
		return new Vector2(0,0);
}

console.log(repulsion(distance));

var v1 = new Vector2(1,2);
var v2 = new Vector2(1,3);
distance = v1.to(v2);
console.log(repulsion(distance));

function propulsion(desired, current) {
	return current.unit().times(damp*(desired.mag() - current.mag()));
}

console.log('propulsion:', propulsion(v1, v2));

damp = 5;

console.log('propulsion:', propulsion(v1, v2));


function flocking(others) {
	var sum = others.reduce((prev, curr) => (prev.add(curr)), 
		new Vector2(0,0));
	return sum.times(flock/sum.mag());
}
var v3 = new Vector2(2,5);
console.log('flocking: ',flocking([v1,v2,v3]).toString());


function noise() {
	return new Vector2(Math.random()-0.5, Math.random()-0.5).times(noiseLevel);
}
for (var i = 0; i < 10; ++i) {
	console.log(noise().toString());
}
