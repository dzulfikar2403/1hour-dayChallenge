const stray = (num) => {
  const arr1 = [];
  const arr2 = [];
  num.map(el => num[0] === el ? arr1.push(el) : arr2.push(el));

  return arr1.length === 1 ? arr1[0] : arr2[0]
}

console.log(stray([2, 1, 1]));
