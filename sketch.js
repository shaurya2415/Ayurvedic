var form
var bg1, bg2, bg3, bg4, c = 0
function preload(){
  bg1 = loadImage("background.jpg")
  bg2 = loadImage("background1.jpg")
  bg3 = loadImage("background2.jpg")
  bg4 = loadImage("background3.jpg")
}
function setup() {
  createCanvas(displayWidth-20,displayHeight-20);
  form = new Form()
  form.display()
}

function draw() {
  if(c===0){
    background(bg2)
  }
  if(c===1){
    background(bg3)
  }
  if(c===2){
    background(bg4)
  }
}