const getAverage = marks => {
  const dataAvg = marks.reduce((acc,val) => acc + val ,0) / marks.length;
  return Math.floor(dataAvg);
}

console.log(getAverage([1,1,1,1,1,1,1,2]));