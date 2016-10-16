// Add checking if agant was spawned on the LINE/WALL
// Create new agents at postitions specified by positions array

var solverStep = 0.02;
// var fps = 30;
function init() {
 c = document.getElementById('canvas2');
ctx = document.getElementById('canvas2').getContext('2d');
var positions = generatePositions(100, 0, 400, 0, 400);
var agents = generateAgents(positions, new Vector2(10,0));
agents.forEach(agent => agent.draw());

var walls = [
new Wall(new Line(new Vector2(0,0), new Vector2(100, 150))),
new Wall(new Line(new Vector2(0,400), new Vector2(100, 250))),
new Wall(new Line(new Vector2(100,150), new Vector2(400, 150))),
new Wall(new Line(new Vector2(100,250), new Vector2(400, 250)))
];
// walls = [];
function recomputePositions() {

 	agents = agents.map(function(agent, idx, agents) {

 		let others = agents.filter((other, otherIdx) => otherIdx !== idx);
		return agent.setPosition(agent.computeVelocity(others, walls));
 	});
 	return agents;
}

function solve() {
	agents = recomputePositions();
}

function frame(timestamp) {
  ctx.clearRect(0,0,c.width,c.height);
	agents.forEach(function(agent) {
		agent.draw();
	});
	walls.forEach(wall => wall.draw());
	requestAnimationFrame(frame);
}

var tick = setInterval(solve, solverStep*1000);
var start = 0;
requestAnimationFrame(frame);

// setTimeout(tick => clearInterval(tick), 10000);
} window.onload = init;
