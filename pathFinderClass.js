class PathFinder {
  constructor() {

  }

  loadMap(_map){
    this.map = _map;
    this.points = _map.pointList.length;
  }

  setRoute(_start, _finish){
    if((_start > -1 && _start < this.points) && (_finish > -1 && _finish < this.points)){
      this.start = _start;
      this.finish = _finish;
      this.shortestDist = distTwoPointsRel(this.map.pointList[_start], this.map.pointList[_finish]);
    }
  }

  stepTowardFinish(_start){
    let shortestDist = -1;
    let nextPoint = -1;
    for (var i = 0; i < this.map.pointConnections[_start].length; i++) {
      let point = this.map.pointConnections[_start][i];
      // console.log("p"+point);
      let distToPoint = distTwoPointsAbs(this.map.pointList[_start], this.map.pointList[point]);
      let distToFinish = distTwoPointsAbs(this.map.pointList[point], this.map.pointList[this.finish]);
      let tot = distToPoint+distToFinish;
      // console.log(distToPoint);
      // console.log(distToFinish);
      // console.log("dist "+tot);
      // console.log(shortestDist);
      if (tot < shortestDist || shortestDist == -1) {
        shortestDist = tot;
        nextPoint = this.map.pointConnections[_start][i];
        // console.log("ping");
      }

    }
    return nextPoint;
  }

  autoStep(_start, _maxSteps){
    let steps = [];
    let lastStep = _start;
    for (var i = 0; i < _maxSteps; i++) {
      steps[i] = this.stepTowardFinish(lastStep);
      lastStep = steps[i];
      if (lastStep == this.finish) {
        break;
      }
    }
    return steps;
  }

}
