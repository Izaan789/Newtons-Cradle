class Chain{

       constructor(body1,point2){
var options = {
    bodyA:body1,
    pointB:point2,
    length:350,

}
this.chain=Constraint.create(options)
World.add(world,this.chain)

this.pointB=point2

       }


       display(){
      
      var pointA=this.chain.bodyA.position;
      var pointB=this.pointB
       
      push()
      strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop()
       }
}
