class Ball {
    constructor(x,y) {
      var options = {
          restitution:1,
          friction:0.8,
          density:0.8
      }
      this.body = Bodies.circle(x,y,20,options);
      this.r = 20;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("white");
      ellipse(pos.x, pos.y, this.r, this.r);
    }
  };