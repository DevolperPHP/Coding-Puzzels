function points(games) {
  var points = 0;
  games.forEach(data => {
    var [x, y] = data.split(":")
    if(x > y) points+=3;
    if(x<y) points+=0;
    if(x == y) points++;
  })
  return points
}
