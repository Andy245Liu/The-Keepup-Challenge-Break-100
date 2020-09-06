var myScore = 0,
  myFrameRate = 30,
  gameover = false

function setup(){
  createCanvas(1200,600)
  myField = new Field()
  myBall = new Ball()
}
function displayScoreTime(){

  textSize(32)
  text("Score: " + myScore, width - 150, 60)

}


function mousePressed(){


  if(gameover == false){
  
  if(sqrt((mouseX- myBall.x)*(mouseX- myBall.x) + (mouseY-myBall.y)*(mouseY-myBall.y)) <= myBall.radius){
    myBall.kick(mouseX, mouseY)

      myScore = myScore + 1

    }
  }
}

function draw(){

  frameRate(30)
  background(93, 151, 244)
  displayScoreTime()
  if(myBall.y >= myField.y-myBall.radius)  {
    myBall.xSpeed = 0
    myBall.ySpeed = 0
    gameover = true
    textSize(50)
    if(myScore < 100){

      text("Game Over! Try Again!" , width/4 + 20, height/2)
      text("Your Score was: "+ myScore, width/3-20, height/2+60)

    } else if(myScore == 100){
      text("Game Over! Mission Accomplished!" , width/4, height/2)
      text("Your Score was: "+ myScore, width/3-20, height/2+60)
    }
    else{
      text("Game Over! You're a Legend!" , width/4, height/2)
      text("Your Score was: "+ myScore, width/3-20, height/2+60)
    }
  }
  myField.draw()
  myBall.draw()
  myBall.aero(myField)



}
