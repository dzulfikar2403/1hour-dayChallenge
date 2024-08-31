const getSum = (a, b) => {
  const arr = [a,b].sort((a,b)=> a-b)
  const arrResult = [];
  if (a === b) return a;
  for (i = arr[0]; i <= arr[1]; i++) {
    arrResult.push(i);
  };

  return arrResult.reduce((acc,currentVal)=> acc + currentVal)
};

console.log(getSum(-2, -2));
