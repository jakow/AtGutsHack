function generatePositions (nAgents, width, height, ){
	var positions = [];
	function randomPosition (){
		return new Vector2(Math.random()*width, Math.random()*height);
	}
	function positionExist (newPosition){
		for (var j = 0; j <= positions.length - 1; j++) {
			if (newPosition.x = positions[j].x && newPosition.y = positions[j].y) {
				return true;
			}
		}
		return false;
	}
	for (var i = 0; i <= nAgents; i++) {
		var newPosition = randomPosition()
		while (positionExist(newPosition)){
			newPosition = randomPosition();
		}
		positions.push(newPosition);
	}
	return positions
}

// Add checking if agant was spawned on the LINE/WALL
// Create new agents at postitions specified by positions array

