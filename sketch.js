let w1;
let w2;
let w3;
let w4;

function setup() {
  createCanvas(windowWidth, windowHeight);
  w1 = new Walker(random(windowWidth), random(windowHeight));
  w2 = new Walker(random(windowWidth), random(windowHeight));
  w3 = new Walker(random(windowWidth), random(windowHeight));
  w4 = new Walker(random(windowWidth), random(windowHeight));
}

function draw() {
  w1.update();
  w1.display();
  w2.update();
  w2.display();
  w3.update();
  w3.display();
  w4.update();
  w4.display();
}

class Walker {
  constructor(_x, _y) {
    this.posx = _x;
    this.posy = _y;
    this.vel = random(2, 20);
    this.color = color(random(50), random(255), random(255));

    this.esCirculo = random() > 0.5 ? true : false;

    // this.esCirculo;
    // this.r = random();
    // if (this.r > 0.5) {
    // 	this.esCirculo = true;
    // } else {
    // 	this.esCirculo = false;
    // }
  }

  update() {
    this.posx = constrain(this.posx + random(-this.vel, this.vel), 0, width);
    this.posy = constrain(this.posy + random(-this.vel, this.vel), 0, height);
  }

  display() {
    fill(this.color);
    noStroke();
    if (this.esCirculo) {
      circle(this.posx, this.posy, random(20, 2));
    } else {
      rect(this.posx, this.posy, random(20, 2), random(20, 2));
    }
  }
}
