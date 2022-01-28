class Map {
  constructor() {
    this.pointList = [];
    this.pointConnections = [];
    this.points =0;
    //this.createRandomPoints(_points);

  }

  createRandomPoints(_points){
    this.points = _points;
    for (var i = 0; i < this.points; i++) {
      this.pointList[i] = createVector(floor(random(width)), floor(random(height))); //places points at random
      this.pointConnections[i] = [];
    }
  }

  addPoint(_x, _y){
    this.pointList.push(createVector(_x, _y));
    this.pointConnections.push([]);
    this.points +=1;
  }

  addConnection(_p1, _p2){
    this.pointConnections[_p1].push(_p2);
  }

  deletePoint(_index){
    if(_index >-1){
      this.pointList.splice(_index,1);
      this.points -=1;
    }
  }

  displayPoints(){
    for (var i = 0; i < this.points; i++) {
      //circle(this.pointList[i].x, this.pointList[i].y, 10);
      text(i,this.pointList[i].x, this.pointList[i].y);

    }
  }

  displayLines(){
    for (var i = 0; i < this.points; i++) {
      let x1 = this.pointList[i].x;
      let y1 = this.pointList[i].y;
      for (var j = 0; j < this.pointConnections[i].length; j++) {
        let x2 = this.pointList[this.pointConnections[i][j]].x;
        let y2 = this.pointList[this.pointConnections[i][j]].y;
        line(x1, y1, x2, y2);
      }
    }
  }

}
