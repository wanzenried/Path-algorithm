class Map {
  constructor(mapWidth, mapHeight) {
    this.mapWidth = mapWidth;
    this.mapHeight = mapHeight;
    //create list to contain points
    this.points = [];
    //create the map, with no points
    this.map = [];
    for (var i = 0; i < mapWidth; i++) {
      this.map[i] = [];
      for (var j = 0; j < mapHeight; j++) {
        this.map[i][j] = -1;
      }
    }
  }

  addPoint(pointX, pointY){
    //first check if the point is inside the map
    if(!((pointX >= 0 && pointX < this.mapWidth) && (pointY >= 0 && pointY < this.mapHeight))){
      throw "point is outside map";
    }
    // define new point object
    let newPoint = {
      x: pointX,
      y: pointY
    };
    //add new point to point list
    let nl = this.points.push(newPoint);
    //add to reverse searh
    this.map[pointX][pointY] = nl-1;

  }
  //add x amount of randomly placed points to the map
  addRandomPoint(amount){
    for (var i = 0; i < amount; i++){
      let x = Math.floor(Math.random()*this.mapWidth);
      let y = Math.floor(Math.random()*this.mapHeight);
      this.addPoint(x,y);
    }
  }
}
