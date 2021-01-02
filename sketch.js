var score=0;
var wormGroup;
function preload() {
  //load game assets
  playerImage=loadImage("images/frog.png");
  wormImage=loadImage("images/worm.png");
  bgImage=loadImage("images/swampImg.png");
}


function setup() {
  createCanvas(600,600);
  bg=createSprite(300,300,600,600);
  player=createSprite(40,550,30,30);
  wormGroup=new Group();
}

function draw() {
  background("black");
  bg.addImage(bgImage);
  bg.scale=2.5;
  player.addImage(playerImage);
  player.scale=0.4;

  stroke("red");
  noFill();
  ellipse(100,350,40,30);
  player.x=mouseX;
  player.y=mouseY;
  generateWorms();

  // hole coordinate -> 100 350

  if(player.x>=60 && player.x<=140 && player.y>=280 && player.y<=420)
  {
    text("NO CHEATING",300,300);
    player.x=0;
    player.y=0;
  }

  for(var i=0;i<(wormGroup).length;i++)
  {
    var temp=wormGroup.get(i);
    if(player.isTouching(temp))
    {
      score++;
      temp.destroy();
      temp=null;
    }
  }
  drawSprites();
  textSize(25);
  text("Worms Destroyed: "+score,350,50);
}

function generateWorms()
{
  if(frameCount%30==0){
  console.log(frameCount);
  var worm=createSprite(100,350,40,5);
  worm.addImage(wormImage);
  worm.scale=0.3;
  worm.shapeColor="green";
  worm.velocityX=random(-4,4);
  worm.velocityY=random(-4,4);
  wormGroup.add(worm);
  }
}