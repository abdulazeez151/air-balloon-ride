var database,balloon,background,balloonPosition = {x : 250, y : 650}

function preload(){
backgroundImg = loadImage("pro-C35 images/Hot Air Balloon-01.png"); 
 balloonImage = loadImage("pro-C35 images/Hot Air Balloon-02.png","pro-C35 images/Hot Air Balloon-03.png","pro-C35 images/Hot Air Balloon-04.png");
}

function setup() {
  database = firebase.database();
  var balloonPosition =database.ref('balloon/height');
  balloonPosition.on("value",readposition, showError);
  console.log(database);
  createCanvas(500,500);
  balloon = createSprite(100, 400, 30, 30);
  balloon.addAnimation("balloon", balloonImage);
  balloon.scale = 0.4;

}

function draw() {
  background(backgroundImg);  
  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x - 10;
}
else if(keyDown(RIGHT_ARROW)){
  balloon.x = balloon.x + 10;
}
else if(keyDown(UP_ARROW)){
  balloon.y = balloon.y - 10;
  
}
else if(keyDown(DOWN_ARROW)){
  balloon.y = balloon.y + 10;
}

  drawSprites();
}

function updateHeight(){
  database.ref('balloon/height').set({
    'x' : height.x + x,
    'y' : height.y + y
  })
}

function readposition(){
  height = data.val();
  balloon.x = height.x;
  balloon.y = height.y;     

}

function showError(){
  console.log("error in writing to the database");
}

