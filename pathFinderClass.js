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
      this.shortestDist = distTwoPoints(this.map.pointList[_start].x, this.map.pointList[_start].y, this.map.pointList[_finish].x, this.map.pointList[_finish].y);
    }
  }
}
