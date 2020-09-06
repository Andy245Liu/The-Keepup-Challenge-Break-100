function Ball(){
  this.x = width/2
  this.y = height*1/4
  this.radius = 50

  this.xSpeed = 0
  this.lifty = 0
  this.liftx = 0
  this.gravity = 0.5
  this.ySpeed = 0
  this.force = 18


  this.draw = function(){
    fill(255,255,255)
    stroke(255,255,255)

    ellipse(this.x, this.y, 2*this.radius)
  }

  this.aero = function(aField){
    this.ySpeed += this.lifty + this.gravity
    this.y += this.ySpeed
    this.xSpeed += this.liftx
    this.x += this.xSpeed
    this.lifty = 0
    this.liftx = 0
    if (this.y < this.radius){
      this.ySpeed = (-1)* this.ySpeed
      this.y = this.radius
    } else if(this.y > (height-aField.ySize) - this.radius){
      this.ySpeed = 0
      this.y = (height-aField.ySize) - this.radius

    }
    //x vevlocity decreases in magnitude each time it collides with a wall
    if(this.x > width - this.radius){
      this.xSpeed = (-1) * abs(abs(this.xSpeed)-10)
    }
    else if(this.x < this.radius){
      this.xSpeed = abs(abs(this.xSpeed)-10)
    }
  }
 this.kick = function(x, y){
    var yDiff = this.y - y
    var xDiff = this.x - x
    var hyp = sqrt((yDiff)*(yDiff)  + (xDiff)*(xDiff) )
    if(this.ySpeed >= -5 || this.ySpeed <= 5){
      this.lifty += this.force * yDiff/hyp
    }
    if(this.xSpeed >= -5 || this.xSPeed <= 5){
      this.liftx += this.force * xDiff/hyp
    }

  }
}
