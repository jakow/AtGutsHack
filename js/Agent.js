// var Vector2 = require('./Vector2');
var defaultConstants = {
		radius: 10,
		contactRadius: 20,
		flockingRadius: 40,
		maxSpeed: 20
	}

class Agent {

	constructor(position = new Vector2(0,0),
		velocity = new Vector2(0,0),
		desiredVelocity = new Vector(0,0),
		constants = {}) {
		this.position = position;
		this.velocity = velocity;
		this.desiredVelocity = desiredVelocity;
		this.constants = _.extend({}, defaultConstants, constants);
	}

	distanceTo(agent) {
		return this.position.distanceTo(agent.position);
	}

	computeVelocity(otherAgents, walls) {
		let contactRadius = this.constants.contactRadius;
		let maxSpeed = this.constants.maxSpeed;

		if (!Array.isArray(otherAgents)) throw new Error("Agent: No other agents given");
		var repulsedAgents = otherAgents.filter(
			agent => (this.position.distanceTo(agent.position)
						.mag() < contactRadius));


		var repulsedWalls = walls.filter((wall) =>
			 {

			 	var distanceVector = wall.lines[0].minDistanceTo(this.position)
			 	var distance = distanceVector.mag();
			 	// console.log('dist: ', distance, distanceVector);
		 		return distance < contactRadius;
			 } 
		);

		// repulsedWalls.forEach(wall => console.log(wall.lines[0].minDistanceTo(this.position)));
		// console.log(repulsedWalls);

		var flockingWith = otherAgents.filter(agent => 
			this.position
				.distanceTo(agent.position)
				.mag() < this.constants.flockingRadius);
			
		var repAgents = repulsedAgents.map(agent => (
			repulsion(this.position.distanceTo(agent.position))
			));
		var repAgentF = repAgents.reduce((acc, curr) => acc.add(curr), new Vector2(0,0));
		
		var repWalls = repulsedWalls.map(wall => {
			// console.log(this.position);
			var distance = wall.lines[0].minDistanceTo(this.position);
			var rep =  repulsion(distance.times(1));
			// console.log('Wall repulsion: ', rep);
			return rep;
		});
		// if (repulsedWalls.length) console.log("in contact");
		var repWallF = repWalls.reduce((acc, curr) => acc.add(curr), new Vector2(0,0));

		var propF = propulsion(this.desiredVelocity, this.velocity);
		// console.log(otherAgents);
		// var flockF = flocking(flockingWith);
		var flockF = new Vector2(0,0);
		var noiseF = new Vector2(0,0);
		var sum = [repAgentF, repWallF, propF, flockF, noiseF]
		.reduce((acc,curr) => acc.add(curr));

		var computedV =  this.velocity.add(sum.times(timestep));

		if (computedV.mag() > maxSpeed) return computedV.unit().times(maxSpeed);
		else return computedV;
	}
	setPosition(newVelocity) {
		return new Agent(this.position.add(newVelocity.times(timestep)),
						newVelocity,
						this.desiredVelocity,
						this.constants);

	}
	draw() {
		ctx.beginPath();
		ctx.arc(this.position.x,c.height-this.position.y,this.constants.radius,0,2*Math.PI);
		ctx.stroke();
	}
}
