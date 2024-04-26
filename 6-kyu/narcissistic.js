const narcissistic = (val) => {
  const arrVal = val.toString().split('');
  const digiit = arrVal.length;
  const result = [];

  arrVal.map(el => result.push(Math.pow(parseInt(el), digiit)));
  return result.reduce((total,nVal) => total + nVal ,0) === val;
}

console.log(narcissistic(153));