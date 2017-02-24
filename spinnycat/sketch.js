var kitty;
var kittyImg;

function preload() {
  kittyImg = loadImage('assets/cat.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  kitty = createSprite(width/3, height/3);
  kitty.addImage(kittyImg);

  a = EDrums('x*o*x*o-');
  b = FM({ attack: ms(1) })
    .note.seq(['c2','c2','c2','c3','c4'].random(), [1/4,1/8,1/16].random(1/16,2));
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

a.pitch = mouseY / windowHeight;
b.index = a.out;
b.cmRatio = mouseX / windowWidth;
b.fx.add(Delay({time:mouseX / windowWidth, feedback: mouseY / windowHeight});
)


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
