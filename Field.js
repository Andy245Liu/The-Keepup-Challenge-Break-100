function Field(){
  this.x = 0
  this.y = height - 120
  this.xSize = width
  this.ySize = 120
  
  this.draw = function(){
    stroke(73, 250, 91)
    fill(73, 250, 91)
    rect(this.x, this.y, this.xSize, this.ySize)
  }

  this.collision = function(aBall){
    if(aBall.y > this.y-aBall.radius){
      return true
    }
    else{
      return false
    }

  }
}
