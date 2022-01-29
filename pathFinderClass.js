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
      this.shortestDist = distTwoPoints(this.map.pointList[_start], this.map.pointList[_finish]);
    }
  }

  stepTowardFinish(_start){
    for (var i = 0; i < this.map.pointConnections[_start].length; i++) {
      let point = this.map.pointConnections[_start][i];
      console.log(point);
      let distToPoint = distTwoPoints(this.map.pointList[_start], this.map.pointList[point]);
      let distToFinish = distTwoPoints(this.map.pointList[point], this.map.pointList[this.finish]);
      let tot = distToPoint+distToFinish;
      console.log(distToPoint);
      console.log(distToFinish);
      console.log(tot);

    }
  }
}
