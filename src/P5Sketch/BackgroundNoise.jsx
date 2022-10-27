
export default class BackgroundNoise {
    constructor(p5, yoff, xoff, w, h, c1, c2) {
        this.p5 = p5;
        this.c1 = "#1C1827";
        this.c2 = "#fff";
        this.yoff = yoff;
        this.xoff = xoff;
        this.w = w;
        this.h = h;

    }

    drawNoise() {

        this.p5.fill(this.p5.color(this.c1));
        this.p5.beginShape();
        for (let x = 0; x <= this.w; x += 20) {
            // Calculate a y value according to noise, map to

            // Option #1: 2D Noise
            // let y = this.p5.map(this.p5.noise(this.xoff, this.yoff), 0, 1, 200, 300);

            // Option #2: 1D Noise
            let y = this.p5.map(this.p5.noise(this.xoff), 0, 1, 300, 400);

            // Set the vertex
            this.p5.vertex(x, y);
            // Increment x dimension for noise
            this.xoff += 0.05;
        }
        this.yoff += 0.001;
        this.p5.vertex(this.w, this.h);
        this.p5.vertex(0, this.h);
        this.p5.endShape(this.p5.CLOSE);
    }
}

/***
 * let yoff = 0.0; // 2nd dimension of perlin noise

function setup() {
  createCanvas(710, 400);
}

function draw() {
  background(51);

  fill(255);
  // We are going to draw a polygon out of the wave points
  beginShape();

  let xoff = 0; // Option #1: 2D Noise
  // let xoff = yoff; // Option #2: 1D Noise

  // Iterate over horizontal pixels
  for (let x = 0; x <= width; x += 10) {
    // Calculate a y value according to noise, map to

    // Option #1: 2D Noise
    let y = map(noise(xoff, yoff), 0, 1, 200, 300);

    // Option #2: 1D Noise
    // let y = map(noise(xoff), 0, 1, 200,300);

    // Set the vertex
    vertex(x, y);
    // Increment x dimension for noise
    xoff += 0.05;
  }
  // increment y dimension for noise
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}

 */