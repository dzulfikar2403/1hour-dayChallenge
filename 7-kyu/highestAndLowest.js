const highAndLow = (num) => {
  const sortArr = [...num.split(" ")];
  const minVal = Math.min(...sortArr);
  const maxVal = Math.max(...sortArr);
};

console.log(highAndLow("1 9 90 8 100 -50"));
