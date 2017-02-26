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
  
  var t = 0; //argument of sin
  x = map(sin(t), -1.0, 1.0, 0, 255);
  t += 0.05;

  kitty.position.x = mouseX;
  kitty.position.y = mouseY;
  if (mouseIsPressed) {
    kitty.rotation += 4;
    tint(200, 153, x, 126);
  }
  drawSprites();

drums = EDrums('x*o*x*o-')
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
