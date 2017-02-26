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

a = Drums('x*o*x*o-')
a.pitch = Mouse.y

b = FM({ attack: ms(1) })
b.index = a.out
b.cmRatio = Mouse.x

b.fx.add(
  Delay({
    time:     Mouse.x,
    feedback: Mouse.y
  })
)

b.note.seq( 
  ['c2','c2','c2','c3','c4'].random(),
  [1/4,1/8,1/16].random(1/16,2) 
)

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
