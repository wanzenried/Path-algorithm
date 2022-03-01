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
  }
}
