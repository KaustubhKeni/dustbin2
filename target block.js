class Block {
    constructor(x, y,  height,width) {
      var options = {
        isStatic:true
      }
      this.body = Bodies.rectangle(x, y, 129, height, options);
      this.width = 140;
      this.height = height;
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

      
     rect(0, 0, this.width, this.height);
      pop();
    }
  };