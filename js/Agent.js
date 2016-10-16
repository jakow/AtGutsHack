// var Vector2 = require('./Vector2');
var defaultConstants = {
		radius: 1,
		contactRadius: 2,
		flockingRadius: 4
	}

class Agent {

	constructor(position = new Vector2(0,0),
		velocity = new Vector2(0,0),
		desiredVelocity = 0,
		constants = {}) {
		this.position = position;
		this.velocity = velocity;
		this.desiredVelocity = 0;
		this.constants = _.extend({}, defaultConstants, constant);
	}

	distanceTo(agent) {
		return this.position.to(agent.position);
	}

	computeVelocity(otherAgents) {
		var repulsedBy = otherAgents.filter(
			agent => (this.position.to(agent.position)
						.mag() < this.constants.contactRadius));
		var flockingWith = otherAgents.filter();

		var repF = otherAgents
			.map(agent => (repulsion(this.distanceTo(agent))))
			.reduce((acc, curr) => acc.add(curr), new Vector2(0,0));
		var propF = propulsion(this.desiredVelocity, this.velocity);
		var flockF = flocking(others);
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

}