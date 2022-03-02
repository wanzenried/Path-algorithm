let m;

function setup() {
  createCanvas(800,800);
  background(230);

  m = new Map(width, height);
  m.addRandomPoint(2);

  noLoop();

}

function draw() {
  background(230);

  for (var i = 0; i < m.points.length; i++) {
    circle(m.points[i].x  ,m.points[i].y,5);
  }

}
