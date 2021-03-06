// rij - center to center distance 	
// l - distance between two agent
var radius = 10;
var contactRadius = 2 * radius;
var flockingRadius = 4 * radius;
var epsilon = 20; // strength of repulsion
var damp = 1; //damping cosntant
var flock = 0.55;
var noiseLevel = 0.01;

var timestep = 0.1;


function repulsion(distance) {
	if (distance.mag() < contactRadius) {
		// console.log(distance.mag());
		return distance.unit().times(-epsilon * (1 - Math.pow(distance.mag()/(2*contactRadius), 2.5)));
	}
	else
		return new Vector2(0,0);
}

function propulsion(desired, current) {
	return desired.unit().times(damp*(desired.sub(current).mag()));
}

function flocking(others) {
	var sum = others.reduce(function(prev, currAgent) {
		return prev.add(currAgent.velocity)},
		new Vector2(0,0));
	if (sum.mag() == 0)
		return new Vector2(0,0);
	else
		return sum.times(flock/sum.mag());
}

function noise() {
	return new Vector2(Math.random()-0.5, Math.random()-0.5).times(noiseLevel);
}
