class Roof {
    
        constructor(x, y,height){
            var options={
                isStatic:true
              }
            this.body = Bodies.rectangle(x, y, 1000, height, options);
            this.width = 1000;
            this.height = height;
            
            
            World.add(world, this.body);
          }
        
           
display(){
   
    rectMode(CENTER)
    rect( this.body.position.x,this.body.position.y, this.width, this.height);
    
}
}