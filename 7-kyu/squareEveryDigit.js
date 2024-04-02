const squareDigits = (num) => {
  return parseInt(
    [...`${num}`]
    .map((el) => Math.pow(el, 2))
    .reduce((acc, currentVal) => acc + currentVal, [])
    );
};

console.log(squareDigits(2112));
