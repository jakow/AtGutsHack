class Wall {

  constructor(lines = new Line(new Vector2(0,0), new Vector2(1,1))) {
    if (Array.isArray(lines))
    	this.lines = lines;
    else
    	this.lines = [lines];
  }

  draw() {
  	this.lines.forEach(function(line) {
      console.log("Drawing!")
      ctx.moveTo(line.start.x, line.start.x);
      ctx.lineTo(line.end.x, line.end.y);
      ctx.stroke();
  	});
  }

  





}
