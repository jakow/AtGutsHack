

// Add checking if agant was spawned on the LINE/WALL
// Create new agents at postitions specified by positions array

var solverStep = 0.03;
var fps = 30;
function init() {
ctx = document.getElementById('canvas2').getContext('2d');


var agents = generateAgents(generatePositions(100, 0, 400, 0, 400));
agents.forEach(agent => agent.draw());

function recomputePositions() {
 	

 	agents = agents.map(function(agent, idx, agents) {

 		let others = agents.filter((other, otherIdx) => otherIdx !== idx);
		return agent.setPosition(agent.computeVelocity(others));
 	});
 	return agents;
 	

 	// console.log('recomputing');

}

function solve() {
	agents = recomputePositions();
}

function frame(timestamp) {
	agents.forEach(function(agent) {
		agent.draw();
	});
	requestAnimationFrame(frame);

}

var tick = setInterval(solve, solverStep*1000);

var start = 0;
requestAnimationFrame(frame);

// setTimeout(tick => clearInterval(tick), 10000);
}

window.onload = init;



