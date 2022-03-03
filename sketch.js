let m;
let border = 15;

function setup() {
  createCanvas(900,900);
  background(230);

  m = new Map(width-border*2, height-border*2);
  m.addRandomPoint(2);

  noLoop();

}

function draw() {
  translate(border, border);

  background(50);
  stroke(0);
  fill(110);
  rect(0,0, width - border*2, height - border*2);
  fill(255);

  for (var i = 0; i < m.points.length; i++) {
    circle(m.points[i].x  ,m.points[i].y,5);
  }
  for (var i = 0; i < m.points.length; i++) {
    for (var j = 0; j < m.points[i].connections.length; j++) {
      line(m.points[i].x,m.points[i].y, m.points[m.points[i].connections[j]].x, m.points[m.points[i].connections[j]].y);
    }
  }

}
