let pointList = [];
let connectedPoints = [];
let ms = 0;

let points = 100;
let pointConnections = 3; //can be at most points-1

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
  }

  //conects to closest points
  for (var i = 0; i < points; i++) { //iterate through all points

    //get distance to all other points
    let distToPoints = [];
    for (var j = 0; j < points; j++) {
      distToPoints[j] = sqrt((pointList[i].x - pointList[j].x)*(pointList[i].x - pointList[j].x) + (pointList[i].y - pointList[j].y)*(pointList[i].y - pointList[j].y));

    }
    distToPointsCopy = [];
    arrayCopy(distToPoints,distToPointsCopy);
    distToPointsCopy.sort(function(a,b){
      return a-b;
    });
    //console.log(i);
    // console.log(distToPoints);
    // console.log(distToPointsCopy);

    for (var j = 0; j < pointConnections; j++) {

      connectedPoints[i][j] = distToPoints.indexOf(distToPointsCopy[j+1]);
      // console.log(distToPoints.indexOf(distToPointsCopy[j+1]));
    }

  }

  textSize(12);
}

function draw() {
  ms = millis();
  fill(255);

  background(150);
  //draw points and their connections
  for (var i = 0; i < pointList.length; i++) {
    //circle(pointList[i].x, pointList[i].y, 10);
    text(i,pointList[i].x, pointList[i].y);
    for (var j = 0; j < pointConnections; j++) {
      line(pointList[i].x, pointList[i].y, pointList[connectedPoints[i][j]].x, pointList[connectedPoints[i][j]].y);
    }
  }

  fill(255, 0, 0);
  text(floor((millis() - ms) * 1000), 10, 10);
}
