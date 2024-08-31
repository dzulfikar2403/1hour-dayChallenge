const squareSum = (numbArr) => numbArr.reduce((acc, currentVal) => acc + Math.pow(currentVal, 2), 0);

console.log(squareSum([1,2,2]));
