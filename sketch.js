let walkers = [4];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 4; i++) {
    // Crear un objeto Walker con una posición aleatoria dentro del canvas
    walkers[i] = new walker(200, 200);
  }
}

// Recorrer el arreglo y actualizar y mostrar cada objeto Walker en la función draw
function draw() {
  for (let w of walkers) {
    w.update();
    w.display();
  }
}

class walker {
  constructor(_posX, _posY) {
    this.posX = _posX;
    this.posY = _posY;
    // Asignar la velocidad a un rango entre -10 y 10
    this.vel = map(random(1, 10), 1, 10, -10, 10);
    this.color = color(random(0, 200), random(0, 200), random(0, 200));
    this.esCirculo = random();
  }

  update() {
    // Variar la posición en X y Y según un valor aleatorio
    this.posX += random(-this.vel, this.vel);
    this.posY += random(-this.vel, this.vel);
    // Restringir la posición en X y Y dentro del canvas
    this.posX = constrain(this.posX, 0, width);
    this.posY = constrain(this.posY, 0, height);
  }

  display() {
    fill(this.color);
    //noStroke();
    // stroke(10);
    //strokeWeight(1, 10);
    if (this.esCirculo) {
      circle(this.posX, this.posY, 10);
    } else {
      rect(this.posX, this.posY, 10, 10);
    }
  }
}
