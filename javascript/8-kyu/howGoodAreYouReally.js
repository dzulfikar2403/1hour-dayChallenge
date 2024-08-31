const betterThanAverage = (classPoints, yourPoints) => {
  return (classPoints.reduce((total,val) => total + val ,0) / classPoints.length) < yourPoints;
};

console.log((betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21)));