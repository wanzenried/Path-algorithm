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

  getClosestPoint(pX, pY, _i){
    fill(255,0,0);
    // need to make a func for deciding amount of iterations
    let steps = _i;
    let closestPoints = [];
    for(let i = 3; i < (steps*2)+3; i+=2){
      //console.log(i);
      let points = this.spiralPerimeter(pX, pY, i);

      for (let j = 0; j < points.length; j++) {
        circle(points[j].x,points[j].y,1);
        let point = this.map[points[j].x][points[j].y];
        if (point >= 0){
          closestPoints.push(point);
        }
      }

      if (closestPoints.length > 0){
        break;
      }
    }

    return closestPoints;

  }

  spiralPerimeter(middleX, middleY, s){

    if(s%2 != 1){
      throw "sidelength must be an odd number";
    }

    let perimeterPoints = [];

    if(s == 1){
      perimeterPoints.push({x: middleX, y: middleY});
      return perimeterPoints;
    }

    let cornerDist = (s-1)/2;
    let xMax = middleX + cornerDist;
    let xMin = middleX - cornerDist;
    let yMax = middleY + cornerDist;
    let yMin = middleY - cornerDist;

    let currentX = xMin;
    let currentY = yMin;

    for(currentX; currentX < xMax; currentX++){
      if((currentX >= 0 && currentX < this.mapWidth) && (currentY >= 0 && currentY < this.mapHeight)){
        perimeterPoints.push({x: currentX, y: currentY});
      }
    }
    for(currentY; currentY < yMax; currentY++){
      if((currentX >= 0 && currentX < this.mapWidth) && (currentY >= 0 && currentY < this.mapHeight)){
        perimeterPoints.push({x: currentX, y: currentY});
      }
    }
    for(currentX; currentX > xMin; currentX--){
      if((currentX >= 0 && currentX < this.mapWidth) && (currentY >= 0 && currentY < this.mapHeight)){
        perimeterPoints.push({x: currentX, y: currentY});
      }
    }
    for(currentY; currentY > yMin; currentY--){
      if((currentX >= 0 && currentX < this.mapWidth) && (currentY >= 0 && currentY < this.mapHeight)){
        perimeterPoints.push({x: currentX, y: currentY});
      }
    }

    return perimeterPoints;

  }
}
