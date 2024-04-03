const findAverage = (array) => {
  return array.length > 0 ? array.reduce((total,val) => total + val ,0) / array.length : 0; 
};

console.log(findAverage([1,2,3]));