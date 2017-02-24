var kitty;
var kittyImg;

function preload() {
  kittyImg = loadImage('avantsonida.github.io/spinnycat/assets/cat.png');
}

function setup() {
  createCanvas(windowHeight, windowWidth);
  kitty = createSprite(width/2, height/2);
  kitty.addImage(kittyImg);
}

function draw() {
  kitty.position.x = mouseX;
  kitty.position.y = mouseY;
  if (mouseIsPressed) {
    kitty.rotation += 2;
  }
  drawSprites();
}

