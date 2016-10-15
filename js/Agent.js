// var Vector2 = require('./Vector2');
var defaultConstants = {
		radius: 1,
		flockingRadius: 2
	}

class Agent {

	constructor(position = new Vector2(0,0),
		speed = new Vector2(0,0),
		constants = {}) {
		this.position = position;
		this.speed = speed;
		this.constants = _.extend({}, defaultConstants, constant);
	}

	distanceTo(agent) {
		return this.position.distanceTo(agent.position);
	}

}