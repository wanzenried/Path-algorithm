//connects to random points
function randomConnections() {

}


//conects to closest points
function closestConnections() {
  for (var i = 0; i < points; i++) { //iterate through all points

    //get distance to all other points
    let distToPoints = [];
    for (var j = 0; j < points; j++) {
      distToPoints[j] = sqrt((pointList[i].x - pointList[j].x) * (pointList[i].x - pointList[j].x) + (pointList[i].y - pointList[j].y) * (pointList[i].y - pointList[j].y));

    }
    distToPointsCopy = [];
    arrayCopy(distToPoints, distToPointsCopy);
    distToPointsCopy.sort(function(a, b) {
      return a - b;
    });
    //console.log(i);
    // console.log(distToPoints);
    // console.log(distToPointsCopy);

    for (var j = 0; j < pointConnections; j++) {

      connectedPoints[i][j] = distToPoints.indexOf(distToPointsCopy[j + 1]);
      // console.log(distToPoints.indexOf(distToPointsCopy[j+1]));
    }

  }
}
