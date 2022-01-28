function distTwoPoints(x1, y1, x2, y2) {
  let xDif = x1-x2;
  let yDif = y1-y2;
  let dist = sqrt((xDif*xDif)+(yDif*yDif));
  return dist;
}
