class Ball{

    constructor(x,y,radius){

        var options={
            restitution:1.3
          }
        
          this.body = Bodies.circle(x,y,radius,options)
          World.add(world,this.body)

          this.radius=radius;
        }


    display(){  

        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,this.radius)
    }


}