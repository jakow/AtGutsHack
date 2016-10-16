

// Add checking if agant was spawned on the LINE/WALL
// Create new agents at postitions specified by positions array


function init() {
ctx = document.getElementById('canvas2').getContext('2d');


var agents = generateAgents(generatePositions(100, 0, 400, 0, 400));
agents.forEach(agent => agent.draw());

function recomputePositions() {
 	agents = agents.map(agent => agent.setPosition(agent.computeVelocity(agents)));
 	agents.forEach(agent => agent.draw());

}
recomputePositions();

// var tick = setInterval(recomputePositions, 30);

// setTimeout(tick => clearInterval(tick), 10000);
}

window.onload = init;



