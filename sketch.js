var blackImg, black;
var starImg, star, starGroup;
var stoneImg, stone, stoneGroup;
var rocket, rocektImg;
var gameState = "play"
var points=0  ; 

function preload(){
  blackImg = loadImage("black.png");
  starImg = loadImage("star.png");
  stoneImg = loadImage("stone.png");
  rocketImg = loadImage("rocket.png");
  
  
}

function setup() {
  createCanvas(600, 600);
  
  black = createSprite(300,300);
  black.addImage("black",blackImg);
  black.velocityY = 5;

  rocket = createSprite(200,200,50,50);
  rocket.addImage(rocketImg);
  rocket.scale=0.3
   
  starGroup=new Group();
  stoneGroup=new Group();
  
  
}

function draw() {
  background(200); 

if(gameState=="play"){

  if(black.y > 400){
      black.y = 300
 
    }

   if(keyDown("left_arrow")){
     rocket.x=rocket.x-3
   }

   if(keyDown("right_arrow")){
     rocket.x=rocket.x+3
   }

   if(keyDown("space")){
     rocket.velocityY=-3
   }

   rocket.velocityY=rocket.velocityY+0.8;

  if(stoneGroup.isTouching(rocket)){
     rocket.velocityY=0;
   }

   if(stoneGroup.isTouching(rocket) || rocket.y>600 ){
     rocket.destroy();

       gameState="end"

   }
   if(starGroup.isTouching(rocket)){
    star.destroy();
    points=points+10  
    gameState="play"
   }
   
    drawSprites();

    spawnstar();
    
}
if(gameState=="end"){
  fill("white");
  background("black")
  textSize(30); 
  text("game over" ,210,250);


}

if (gameState=="play"){
  fill("white")
  textSize(20 )
  text("POINTS:"+ points ,10,40)

  
}
}

function spawnstar(){
  if(frameCount%240==0){
    star = createSprite(200,50);
    star.addImage(starImg);
    star.x=Math.round(random(120,400));
    star.velocityY=1;
    star.lifetime=800;
    starGroup.add(star);
    star.scale=0.05
    


    stone = createSprite(200,10);
    stone.addImage(stoneImg);
    stone .x=Math.round(random(120,400));
    stone.velocityY=1;
    stone.lifetime=800;
    stoneGroup.add(stone);
    stone.scale=0.09 
  
  }

  
}




