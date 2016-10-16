// var Vector2 = require('./Vector2');
var defaultConstants = {
		radius: 10,
		contactRadius: 20,
		flockingRadius: 40
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

	computeVelocity(otherAgents) {
		if (!Array.isArray(otherAgents)) throw new Error("Agent: No other agents given");
		var repulsedBy = otherAgents.filter(
			agent => (this.position.distanceTo(agent.position)
						.mag() < this.constants.contactRadius));
		var flockingWith = otherAgents.filter(agent => 
			this.position
				.distanceTo(agent.position)
				.mag() < this.constants.flockingRadius);
			
		var repForces = otherAgents.map(agent => (
			repulsion(this.position.distanceTo(agent.position)
		)));

		var repF = repForces.reduce((acc, curr) => acc.add(curr), new Vector2(0,0));
		var propF = propulsion(this.desiredVelocity, this.velocity);
		var flockF = flocking(otherAgents);
		var noiseF = 0;

		var sum = [repF, propF, flockF, noiseF]
		.reduce((acc,curr) => acc.add(curr));

		return this.velocity.add(sum.times(timestep));
	}
	setPosition(newVelocity) {
		return new Agent(this.position + newVelocity*timestep,
						newVelocity,
						this.desiredVelocity,
						this.constants);

	}
	draw() {
		ctx.beginPath();
		ctx.arc(this.position.x,this.position.y,this.constants.radius,0,2*Math.PI);
		ctx.stroke();
	}
}
