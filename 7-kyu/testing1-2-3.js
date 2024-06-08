const number = arr => arr.map((el,i) => `${i+1}: ${el}`);

console.log(number(["a", "b", "c"]));