class ground {
    constructor(x, y, width, height) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
          

      }
    //  ellipse(200,200,20,20)
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this
      this.image = loadImage("Ball.jpg");

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      fill(191,17,191);
ellipse(0,0,40,40)
      pop();
      paper.shapeColor="red";
    }
  };
  
    