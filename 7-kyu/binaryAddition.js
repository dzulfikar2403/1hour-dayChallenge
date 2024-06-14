const addBinary = (a,b) => {
  const sumDecimal = a+b;
  return sumDecimal.toString(2);
}

console.log(addBinary(5,9));