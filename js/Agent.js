// var Vector2 = require('./Vector2');
var defaultConstants = {
		radius: 1,
		flockingRadius: 2,
		desiredVelocity: new Vector2(0,0)
	}

class Agent {

	constructor(position = new Vector2(0,0),
		speed = new Vector2(0,0),
		constants = {}) {
		this.position = position;
		this.velocity = velocity;
		this.constants = _.extend({}, defaultConstants, constant);
	}

	distanceTo(agent) {
		return this.position.to(agent.position);
	}

	draw() {
		ctx.beginPath();
	  ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
	  ctx.stroke();
	}

}
