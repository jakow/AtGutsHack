// Add checking if agant was spawned on the LINE/WALL
// Create new agents at postitions specified by positions array

var timestep = 0.03;
function init() {
c = document.getElementById('canvas2');
ctx = document.getElementById('canvas2').getContext('2d');

var agents = generateAgents(generatePositions(100, 0, 400, 0, 400));
agents.forEach(agent => agent.draw());

function recomputePositions() {

 	agents = agents.map(function(agent, idx, agents) {

 		let others = agents.filter((other, otherIdx) => otherIdx !== idx);
		return agent.setPosition(agent.computeVelocity(others));
 	});
 	return agents;
}

recomputePositions();

function frame() {
  ctx.clearRect(0,0,c.width,c.height);
	recomputePositions().map(agent => agent.draw());
}
var tick = setInterval(frame, timestep*1000);
// setTimeout(tick => clearInterval(tick), 10000);
} window.onload = init;
