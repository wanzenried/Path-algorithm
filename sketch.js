let ms = 0;

let map;

function setup() {
  createCanvas(800, 800);
  background(150);

  map = new Map();
  map.addPoint(200, 200);
  map.addPoint(300, 300);
  map.addPoint(400, 100);
  map.addPoint(500, 200);
  map.addPoint(100, 300);
  map.addPoint(200, 400);
  map.addPoint(400, 500);
  map.addPoint(700, 700);

  textSize(12);
}

function draw() {
  ms = millis();
  fill(255);

  background(150);
  map.displayPoints();
  map.displayLines();

  fill(255, 0, 0);
  text(floor((millis() - ms) * 1000), 10, 10);
}
