function generatePositions (nAgents, xMin, xMax, yMin, yMax){
	var positions = [];
	function randomPosition (){
		return new Vector2(Math.random()*xMax + xMin, Math.random()*yMax + yMin);
	}
	function positionExists(newPosition) {
		for (var j = 0; j <= positions.length - 1; j++) {
			if (newPosition.x === positions[j].x && newPosition.y === positions[j].y) {
				return true;
			}
			else if (contactRadius > newPosition.sub(positions[j]).mag()) {
				return true;
			}
		}
		return false;
	}

	for (var i = 0; i <= nAgents-1; i++) {
		var newPosition = randomPosition()
		while (positionExists(newPosition)){
			newPosition = randomPosition();
		}
		positions.push(newPosition);
	}
	return positions;
}

function generateAgents(positions, desiredVelocity) {
	return positions.map(pos => 
		(new Agent(pos, new Vector2(0,0), desiredVelocity))
	)
}
