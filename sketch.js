var pathImg, boyImg;
var path, boy;
var leftBoundary, rightBoundary;

function preload() {
  //pre-load images
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup() {
  createCanvas(400, 500);
  //create sprites here
  path = createSprite(180, 200);
  path.addImage(pathImg);
  path.scale = 1.03;

  boy = createSprite(200, 400);
  boy.addAnimation("running", boyImg);
  boy.scale = 0.12;

  leftBoundary = createSprite(30, 250, 20, 600);
  leftBoundary.visible = false;

  rightBoundary = createSprite(380, 250, 20, 600);
  rightBoundary.visible = false;
}

function draw() {
  background(0);

  if (World.mouseX > 40 && World.mouseX < 390) {
    boy.x = World.mouseX;
  }

  path.velocityY = -3;

  console.log(path.y);

  if (path.y < 400) {
    path.y = path.height / 2;
  }

  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  drawSprites();
}
