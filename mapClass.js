class Map {
  constructor() {
    this.pointList = [];
    this.pointConnections = [];
    this.points = 0;
    //this.createRandomPoints(_points);

  }

  createRandomPoints(_points) {
    this.clearConnections();
    this.points = _points;
    for (var i = 0; i < this.points; i++) {
      this.pointList[i] = createVector(floor(random(width)), floor(random(height))); //places points at random
      this.pointConnections[i] = [];
    }
  }

  addPoint(_x, _y) {
    this.pointList.push(createVector(_x, _y));
    this.pointConnections.push([]);
    this.points += 1;
  }

  addConnection(_p1, _p2) {
    this.pointConnections[_p1].push(_p2);
  }

  deletePoint(_index) {
    if (_index > -1) {
      this.pointList.splice(_index, 1);
      this.points -= 1;
    }
  }

  clearConnections(){
    for (var i = 0; i < this.pointConnections.length; i++) {
      this.pointConnections[i] = [];
    }
  }

  displayPoints() {
    for (var i = 0; i < this.pointList.length; i++) {
      //circle(this.pointList[i].x, this.pointList[i].y, 10);
      text(i, this.pointList[i].x, this.pointList[i].y);

    }
  }

  displayLines() {
    for (var i = 0; i < this.pointList.length; i++) {
      let x1 = this.pointList[i].x;
      let y1 = this.pointList[i].y;
      for (var j = 0; j < this.pointConnections[i].length; j++) {
        let x2 = this.pointList[this.pointConnections[i][j]].x;
        let y2 = this.pointList[this.pointConnections[i][j]].y;
        line(x1, y1, x2, y2);
      }
    }
  }

  randomConnections(_amount) {
    this.clearConnections();
    for (var i = 0; i < this.pointList.length; i++) {
      for (var j = 0; j < _amount; j++) {
        this.pointConnections[i][j] = floor(random(this.pointList.length));
      }
    }
  }

  closestConnections(_amount) {
    this.clearConnections();
    if (_amount < this.pointList.length - 1) {

      for (var i = 0; i < this.pointList.length; i++) { //iterate through all points
        let x1 = this.pointList[i].x;
        let y1 = this.pointList[i].y;

        //get distance to all other points
        let distToPoints = [];
        for (var j = 0; j < this.pointList.length; j++) {
          let x2 = this.pointList[j].x;
          let y2 = this.pointList[j].y;
          distToPoints[j] = distTwoPoints(x1, y1, x2, y2);
          // distToPoints[j] = sqrt((pointList[i].x - pointList[j].x) * (pointList[i].x - pointList[j].x) + (pointList[i].y - pointList[j].y) * (pointList[i].y - pointList[j].y));
        }
        distToPoints.splice(i,1);
        let sortedDist = [];
        arrayCopy(distToPoints, sortedDist);
        sortedDist.sort(function(a, b) {
          return a - b;
        });
        //console.log(i);
        // console.log(distToPoints);
        // console.log(distToPointsCopy);

        for (var j = 0; j < _amount; j++) {

          this.pointConnections[i][j] = distToPoints.indexOf(sortedDist[j]);
          // console.log(distToPoints.indexOf(distToPointsCopy[j+1]));
        }
      }
    }
  }



}
