// var Vector2 = require('./Vector2');
var defaultConstants = {
		radius: 1,
		flockingRadius: 2,
		desiredVelocity: new Vector2(0,0)
	}

class Agent {

	constructor(position = new Vector2(0,0),
		velocity = new Vector2(0,0),
		constants = {}) {
		this.position = position;
		this.velocity = velocity;
		this.constants = _.extend({}, defaultConstants, constants);
	}

	distanceTo(agent) {
		return this.position.to(agent.position);
	}

	draw() {
		ctx.beginPath();
	  ctx.arc(this.position.x,this.position.y,this.constants.radius,0,2*Math.PI);
	  ctx.stroke();
	}

}
