var backgroundImg,ballImg,basketImg;
var gamestartSound;
var barGroup;
var ball;
var basket;
var edges;
var score=0;
var life=3;
var PLAY = 1;
var END = 0;
var WON=2;
var gameState = PLAY;


function preload(){
  backgroundImg=loadImage("Images/background.png")
  basketImg=loadImage("Images/basket.png")
  gamestartSound=loadSound("Sound/Gamestart.wav")
 
}



function setup() {
  createCanvas(1000,500)
   barGroup=createGroup();
   edges=createEdgeSprites();


  //top row
   barGroup.add(createSprite(105,6,65,20))
   barGroup.add(createSprite(171.5,6,65,20))
   barGroup.add(createSprite(238,6,65,20))
   barGroup.add(createSprite(305,6,65,20))
   barGroup.add(createSprite(371.5,6,65,20))
   barGroup.add(createSprite(438,6,65,20))
   barGroup.add(createSprite(504.5,6,65,20))
   barGroup.add(createSprite(571,6,65,20))
   barGroup.add(createSprite(638,6,65,20))
   barGroup.add(createSprite(706,6,65,20))
   barGroup.add(createSprite(774,6,65,20))
   barGroup.add(createSprite(842,6,65,20))
   barGroup.add(createSprite(910,6,65,20))

  // middle row
  barGroup.add(createSprite(176,27,65,20))
  barGroup.add(createSprite(243,27,65,20))
  barGroup.add(createSprite(311,27,65,20))
  barGroup.add(createSprite(378,27,65,20))
  barGroup.add(createSprite(445,27,65,20))
  barGroup.add(createSprite(513,27,65,20))
  barGroup.add(createSprite(580,27,65,20))
  barGroup.add(createSprite(647,27,65,20))
  barGroup.add(createSprite(714,27,65,20))
  barGroup.add(createSprite(781,27,65,20))
  barGroup.add(createSprite(848,27,65,20))

  //bottom row
  barGroup.add(createSprite(315,48,65,20))
  barGroup.add(createSprite(382,48,65,20))
  barGroup.add(createSprite(449,48,65,20))
  barGroup.add(createSprite(516,48,65,20))
  barGroup.add(createSprite(583,48,65,20))
  barGroup.add(createSprite(650,48,65,20))
  barGroup.add(createSprite(717,48,65,20))
  

  barGroup.setColorEach("brown")

  basket=createSprite(95,325,85,20)
  basket.addImage(basketImg)

  ball=createSprite(10,231,20,20)
  ball.setVelocity(6,6);
  ball.shapeColor="darkblue"




 }


function draw() {
background(backgroundImg)


ball.bounceOff(basket)
ball.bounceOff(edges)

drawSprites();

textSize(25)
fill("red")
   text("Score :" +score,209,432)

textSize(25)
fill("red")
   text("Life :" +life,750,432)

   if(gameState===PLAY){
      gamestartSound.play();
 textSize(30)
 fill('darkgreen')
 text("Save the ball",460,250 )

   
   if(life<=0 ){
   gameState=END;
   }

   if(barGroup.length===0)
    {
      gameState=WON;
    }
  
    basketMovement();
    barCollection();
    lifeCount();

  }
   
   

  if(gameState===END){

    background(0)
   
    textSize(40)
    fill('red')
   text("GAMEOVER",500,250)

  } 

  if(gameState===WON )

  {
    background(0);
    textSize(35);
   fill("red");
    text("HURRAY! WON",400,150);
    }
  
  }



function basketMovement(){
     
  if(keyDown("left")){
    basket.x-=7;
  
  }
    
  if(keyDown("right")){
    basket.x+=7;
  
  }
  
  basket.bounceOff(edges);
}

function barCollection(){
   
  
    for(var c=0;c<barGroup.length;c++)
    {
      if(ball.isTouching(barGroup.get(c)))
      {
        barGroup.get(c).destroy();
        score = score +1;
      }
    }
}    



function lifeCount(){

  if(ball.y>=325){
    ball.x=10;
    ball.y=231;
    ball.setVelocity(6,6)
    basket.x=95;
    basket.y=325;
    life=life-1;
  }
}

