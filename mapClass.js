class Map {
  constructor() {
    this.pointList = [];
    this.points =0;
    //this.createRandomPoints(_points);

  }

  createRandomPoints(_points){
    this.points = _points;
    for (var i = 0; i < this.points; i++) {
      this.pointList[i] = createVector(floor(random(width)), floor(random(height))); //places points at random
    }
  }

  addPoint(_x, _y){
    this.pointList.push(createVector(_x, _y));
    this.points +=1;
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

}
