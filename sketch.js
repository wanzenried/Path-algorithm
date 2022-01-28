let ms = 0;

let map;
let p;

function setup() {
  createCanvas(800, 800);
  background(150);

  map = new Map();
  map.addPoint(200, 200);
  map.addPoint(250, 300);
  map.addPoint(400, 100);
  map.addPoint(500, 200);
  map.addPoint(100, 250);
  map.addPoint(570, 400);
  map.addPoint(400, 370);
  map.addPoint(700, 700);
  map.addPoint(500, 530);
  map.addPoint(300, 510);

  map.addConnection(4,0);
  map.addConnection(0,1);
  map.addConnection(1,2);
  map.addConnection(2,3);
  map.addConnection(1,6);
  map.addConnection(3,5);
  map.addConnection(6,3);
  map.addConnection(6,5);
  map.addConnection(5,8);
  map.addConnection(8,7);
  map.addConnection(7,5);
  map.addConnection(8,9);
  map.addConnection(9,1);
  map.addConnection(9,6);
  map.addConnection(4,9);

  p = new PathFinder();
  p.loadMap(map);

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
