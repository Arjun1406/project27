class Chain{
    constructor(bodyA,bodyB,pointX){
      var options={
          bodyA:bodyA,
          bodyB:bodyB,
          pointB:{x:pointX,y:0}
      } 
      this.chain=Matter.Constraint.create(options)
      World.add(world,this.chain)
      this.pointB=pointX 
    }
    display(){
        var pointA=this.chain.bodyA.position
        var pointB=this.chain.bodyB.position
        fill("purple");
        line(pointA.x,pointA.y,pointB.x-this.pointB,pointB.y)
    }

}