class PlayerArcher {
    constructor(x, y, width, height) {
      var options = {
        isStatic: true
      };
  
      this.body = Bodies.rectangle(x, y, width, height, options);
  
      this.width = width;
      this.height = height;
      this.image = loadImage("./assets/playerArcher.png");
      Matter.Body.setAngle(this.body, -PI/2)
      if(keyIsDown("UP_ARROW") && angle > -2.1){
        angle-=0.02;
        Matter.Body.setAngle(this.body,angle)
      }

      if(keyIsDown("DOWN_ARROW") && angle < 1.0){
        angle+=0.02;
        Matter.Body.setAngle(this.body,angle)
      }
  
          World.add(world, this.body);
    }
  
     display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
  