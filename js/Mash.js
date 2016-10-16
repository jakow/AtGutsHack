

// rij - center to center distance
// l - distance between two agent
var radius = 1;
var contactRadius = 2 * radius;
var flockingRadius = 4 * radius;
var epsilon = 100; // strength of repulsion
var damp = 1; //damping cosntant
var flock = 0.55;
var noiseLevel = 0.01;

var timestep = 0.1;


function repulsion(distance) {
	if (distance.mag() < contactRadius) {
		return distance.unit().times(-epsilon * (1 - Math.pow(distance.mag()/(2*contactRadius), 2.5)));
	}
	else
		return new Vector2(0,0);
}

function propulsion(desired, current) {
	return current.unit().times(damp*(desired.mag() - current.mag()));
}

function flocking(others) {
	var sum = others.reduce((prev, curr) => (prev.add(curr)), 
		new Vector2(0,0));
	return sum.times(flock/sum.mag());
}

function noise() {
	return new Vector2(Math.random()-0.5, Math.random()-0.5).times(noiseLevel);
}
