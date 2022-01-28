let pointList = [];
let connectedPoints = [];
let ms = 0;

let map;

let points = 10;
let pointConnections = 3; //can be at most points-1

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

  /*for (var i = 0; i < points; i++) {
    pointList[i] = createVector(floor(random(width)), floor(random(height))); //places points at random
    connectedPoints[i] = [];
  }
  //randomConnections();
  closestConnections();
*/
  textSize(12);
}

function draw() {
  ms = millis();
  fill(255);

  background(150);
  map.displayPoints();
  map.displayLines();
  //draw points and their connections
  /*for (var i = 0; i < pointList.length; i++) {
    //circle(pointList[i].x, pointList[i].y, 10);
    text(i,pointList[i].x, pointList[i].y);
    for (var j = 0; j < pointConnections; j++) {
      line(pointList[i].x, pointList[i].y, pointList[connectedPoints[i][j]].x, pointList[connectedPoints[i][j]].y);
    }
  }*/

  fill(255, 0, 0);
  text(floor((millis() - ms) * 1000), 10, 10);
}
