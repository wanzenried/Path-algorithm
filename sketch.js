let pointList = [];
let connectedPoints = [];
let ms = 0;

let map;

let points = 10;
let pointConnections = 3; //can be at most points-1

function setup() {
  createCanvas(800, 800);
  background(150);

  map = new Map(points);

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
