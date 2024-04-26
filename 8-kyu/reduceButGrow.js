const grow = (x) => {
  let result = 1;
  x.map(el => result *= el);
  return result
}

console.log(grow([1, 2, 3]));