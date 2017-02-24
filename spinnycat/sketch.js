var kitty;
var kittyImg;

function preload() {
  kittyImg = loadImage('assets/cat.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  kitty = createSprite(width/3, height/3);
  kitty.addImage(kittyImg);
  kitty.tint(0, 153, 204);
}

function draw() {
  kitty.position.x = mouseX;
  kitty.position.y = mouseY;
  if (mouseIsPressed) {
    kitty.rotation += 2;
  }
  drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}