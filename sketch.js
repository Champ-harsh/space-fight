
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject;
var asteroidImg;
var world,boy;
var launcherObject;
var launchForce = 100;
var asteroidGroup,meteoriteGroup,villagerGroup;
var villager;
var position;
var villager1,villager2,villager3,villager4;
var score = 0;
var Stonesgroup;
var life = 3;


function preload(){
	boyImage=loadImage("images/boy.png");
  backgroundImg = loadImage("images/newback.png");
   asteroidImg = loadImage("images/aqsteroid.png");
   meteoImg = loadImage("images/download (1).png");
   villlager1 = loadImage("images/villagerlady.png");
   villlager2 = loadImage("images/villagerwomen.jpg");
   villlager3 = loadImage("images/images.png");
   villlager4 = loadImage("images/images(1).png");
   stoneImg =loadImage("images/stone.png");
  }

function setup() {
	createCanvas(1300, 600);
  //  backGround = createSprite(width/2,height/2,10,10);
  //  backGround.addImage(backgroundImg);
  //  backGround.scale = 6.2;
  //  Boy = createSprite(200,340);
  //  Boy.addImage(boy);
  //  Boy.scale = 0.15;
  Stonesgroup = new Group();

  base = createSprite(width/2,height-3,width,5);
  base.visible = false;

  asteroidImg.scale=0.005;


boy = createSprite(width/2,490);
boy.addImage(boyImage);
boy.scale= 0.15

  asteroidGroup = new Group();

  villagerGroup = new Group();

 meteoriteGroup = new Group();
  // problem in displaying the launcher object due to background

   
  //stoneObj=new stone(235,420,30); 

  // launcherObject =new Launcher(stoneObj.body,{x:235,y:420});

}

function draw() {
  background(backgroundImg);
  textSize(25);
   text("Press Space to get a second Chance to Play!!",50 ,50);
   text("Score: "+score,1000,50);
   text("Life: "+life,1000,90);
 
  drawSprites();

   Asteroids();
  meteorites();
  // villagers();

// Shooting logic
if(keyDown("LEFT_ARROW")){
  boy.x= boy.x-5;
}
if(keyDown("RIGHT_ARROW")){
  boy.x= boy.x+5;
}
if(keyDown("space"))
stones();
stone.velocityY = -3

if(Stonesgroup.isTouching(meteoriteGroup)){
  Stonesgroup.destroyEach();
  meteoriteGroup.destroyEach();
  score = score+5;
}
if(Stonesgroup.isTouching(asteroidGroup)){
  Stonesgroup.destroyEach();
  asteroidGroup.destroyEach();
  score = score+10;
}

if(asteroidGroup.collide(base)){
  asteroidGroup.destroyEach();
  life = life-1;
}
if(meteoriteGroup.collide(base)){
  meteoriteGroup.destroyEach();
  life = life-1;
}
if(life===0){
  textSize(40);
  fill("red");
  text("you lose!!",width/2,height/2);
  Stonesgroup.destroyEach();
  asteroidGroup.destroyEach();
  meteoriteGroup.destroyEach();
}


if(score>=10){
  textSize(40);
  fill("red");
  text("you win!!",width/2,height/2);
  Stonesgroup.destroyEach();
  asteroidGroup.destroyEach();
  meteoriteGroup.destroyEach();
}

}
  
  
function stones(){
 
stone = createSprite(boy.x-70,boy.y-90);
stone.addImage(stoneImg);
stone.scale=0.09;
stone.life = width/3;
Stonesgroup.add(stone);

}

function villagers(){
  if (frameCount % (Math.round(random(100,500)))===0){
    villager = createSprite(1200,450,10,10); 
    villager.velocityX=-8;
    r = Math.round(random(1,4));
       console.log(r);

    if(r===1){
      villager.addImage(villlager1);
      villager.scale=0.2
    }

    if(r===2){
      villager.addImage(villlager2);
    }

    if(r===3){
      villager.addImage(villlager3);
    }

    if(r===4){
      villager.addImage(villlager4);
    }
  


    position = Math.round(random(1,2));

  //  console.log(position);
       if(position==1)
     {
     villager.x = 1300;  
     villager.velocityX=-8;}
     
       else if(position==2){
           villager.x = 0;
           villager.velocityX=8;
         }

  }
         
 
}

function meteorites(){
    
  if(frameCount % 150 ===0){
    meteorite = createSprite(50,-10,50,50);
   meteorite.x = Math.round(random(100,1200));
   meteorite.velocityY = 3;
   meteorite.scale = 0.5;
    meteorite.addImage(meteoImg);
    meteoriteGroup.add(meteorite);
    meteorite.life=width/0.5;
    
   
}
}
 
  function Asteroids(){
    
    if(frameCount % 150 ===0){
      asteroid = createSprite(50,-10,50,50);
      asteroid.x = Math.round(random(100,1200));
      asteroid.velocityY = 2;
      asteroid.addImage(asteroidImg);
      asteroid.scale = 0.09; 
      asteroidGroup.add(asteroid);
      asteroid.life = width/0.5;
    
    }
  }