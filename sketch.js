var canvas;
var music;

var topEdge, rightEdge, leftEdge;

var movingBox;
var redBox, blueBox, greenBox, yellowBox;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

topEdge = createSprite(400,0,900,5);

rightEdge = createSprite(800,300,5,800);
leftEdge = createSprite(0,300,5,800);

movingBox = createSprite(400,300,30,30);
movingBox.velocityY = 4;
movingBox.velocityX = -4;


redBox = createSprite(100,550,200,50);
redBox.shapeColor = "red";

blueBox = createSprite(300,550,200,50);
blueBox.shapeColor = "blue";

greenBox = createSprite(500,550,200,50);
greenBox.shapeColor = "green";

yellowBox = createSprite(700,550,200,50);
yellowBox.shapeColor = "yellow";

    //create box sprite and give velocity

}

function draw() {
    background(rgb(0,0,0));
    //create edgeSprite

    if(hasCollided(movingBox,leftEdge)){

        movingBox.velocityX = 4;

    }

    if(hasCollided(movingBox,topEdge)){

        movingBox.velocityY = 4;

    }

    if(hasCollided(movingBox,rightEdge)){

        movingBox.velocityX = -4;

    }

    if(hasCollided(movingBox,redBox)||
    hasCollided(movingBox,blueBox)||
    hasCollided(movingBox,greenBox)||
    hasCollided(movingBox,yellowBox)){

        movingBox.velocityY = -4;

    }

if(hasCollided(movingBox,redBox)){

movingBox.shapeColor = "red";

}

if(hasCollided(movingBox,blueBox)){

    movingBox.shapeColor = "blue";
    
}

 if(hasCollided(movingBox,greenBox)){

    movingBox.shapeColor = "green";
    
}
if(hasCollided(movingBox,yellowBox)){

    movingBox.shapeColor = "yellow";
    
}
    
drawSprites();

}

function hasCollided(p1,p2){
if (p1.x - p2.x < p2.width/2 + p1.width/2
    && p2.x - p1.x < p2.width/2 + p1.width/2
    && p1.y - p2.y < p2.height/2 + p1.height/2
    && p2.y - p1.y < p2.height/2 + p1.height/2) {
  return true;

}
else {
 return false;

}
}
