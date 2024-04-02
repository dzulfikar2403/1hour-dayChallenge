const positiveSum = (arr) => {
  return arr.filter((el) => el > 0)
  .reduce((acc, currentVal) => acc + currentVal, 0);
};

console.log(positiveSum([]));
