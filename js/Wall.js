class Wall {

  constructor(lines = new Line(new Vector2(0,0), new Vector2(1,1))) {
    if (Array.isArray(lines))
    	this.lines = lines;
    else 
    	this.lines = [lines];
  }

  draw() {
  	lines.forEach(function(line) {
  		// draw line
  	});
  }

  





}
