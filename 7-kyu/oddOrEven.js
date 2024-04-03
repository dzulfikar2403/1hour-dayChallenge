const oddOrEven = (arr) => {
  arr = arr.reduce((total, val) => total + val ,0);
  return arr % 2 === 0 ? "even" : "odd";
};
console.log(oddOrEven([-1023, -1, 3]));
