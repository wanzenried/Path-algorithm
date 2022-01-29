class PathFinder {
  constructor() {
    this.routeSet = false;
    this.route = [];

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
      this.routeSet = true;
    }
  }

  displayRoute(){
    if (this.routeSet) {
      fill(0,255,0);
      circle(this.map.pointList[this.start].x, this.map.pointList[this.start].y, 10);
      // text(this.start, this.map.pointList[this.start].x, this.map.pointList[this.start].y);

      fill(255,0,0);
      circle(this.map.pointList[this.finish].x, this.map.pointList[this.finish].y, 10);
      // text(this.finish, this.map.pointList[this.finish].x, this.map.pointList[this.finish].y);
      stroke(0,255,0);
      for (var i = 0; i < this.route.length-1; i++) {
        let x1 = this.map.pointList[this.route[i]].x;
        let y1 = this.map.pointList[this.route[i]].y;
        let x2 = this.map.pointList[this.route[i+1]].x;
        let y2 = this.map.pointList[this.route[i+1]].y;
        line(x1, y1, x2, y2);
      }
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

  autoStep( _maxSteps){
    let steps = [];
    steps.push(this.start)
    // let lastStep = this.start;
    for (var i = 0; i < _maxSteps; i++) {
      steps.push(this.stepTowardFinish(steps[i]));
      // lastStep = steps[i];
      if (steps[i+1] == this.finish) {
        break;
      }
    }
    this.route = [];
    arrayCopy(steps,this.route);
    return steps;
  }

}
