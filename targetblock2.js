class Block2 {
    constructor(x, y,  height,width) {
      var options = {
        isStatic:true
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      this.height = height;
   // dustimage=loadImage("dustbingreen.png");
      // Matter.Body.setAngle(this.body,angle)
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
      rectMode(CENTER);
      fill("red");
      dustimage=loadImage("dustbingreen.png");
      
     rect(0, 0, this.width, this.height);
      pop();
    }
  };