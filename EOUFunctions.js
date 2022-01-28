function distTwoPoints(_p1, _p2) {
  let xDif = _p1.x - _p2.x;
  let yDif = _p1.y - _p2.y;
  let dist = sqrt((xDif * xDif) + (yDif * yDif));
  return dist;
}
