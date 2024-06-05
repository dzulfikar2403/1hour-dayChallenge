const points = games => {
  let point = 0;
  const res = games.map(el => {
    if(el[0] > el[2]) point += 3;
    if(el[0] < el[2]) point += 0;
    if(el[0] === el[2]) point += 1;
  })
  return point < 0 ? 0 : point;
};

console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]));