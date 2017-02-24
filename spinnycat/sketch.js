var kitty;
var kittyImg;

function preload() {
  kittyImg = loadImage('assets/cat.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  kitty = createSprite(width/3, height/3);
  kitty.addImage(kittyImg);
}

function draw() {
  kitty.position.x = mouseX;
  kitty.position.y = mouseY;
  if (mouseIsPressed) {
    kitty.rotation += 2;
   // tint(0, 153, random(200), 126);
  }
  drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}