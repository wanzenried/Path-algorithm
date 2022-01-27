let pointList = [];
let connectedPoints = [];
let ms = 0;

let points = 10;
let pointConnections = 0;

function setup() {
  createCanvas(800, 800);
  background(150);

  for (var i = 0; i < points; i++) {
    pointList[i] = createVector(floor(random(width)), floor(random(height))); //places points at random
    connectedPoints[i] = [];

    //connects to random points
    /*for (var j = 0; j < pointConnections; j++) {
      connectedPoints[i][j] = floor(random(points));
    }*/

    //conects to closest points

  }

  textSize(12);
}

function draw() {
  ms = millis();
  fill(255);

  background(150);
  //draw points and their connections
  for (var i = 0; i < pointList.length; i++) {
    circle(pointList[i].x, pointList[i].y, 10);
    for (var j = 0; j < pointConnections; j++) {
      line(pointList[i].x, pointList[i].y, pointList[connectedPoints[i][j]].x, pointList[connectedPoints[i][j]].y);
    }
  }

  fill(255, 0, 0);
  text(floor((millis() - ms) * 1000), 10, 10);
}
