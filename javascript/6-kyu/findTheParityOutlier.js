const findOutlier = (int) => {
  const even = [];
  const odd = [];
  int.map(el => {
    if(el % 2 === 0) even.push(el);
    if(el % 2 !== 0) odd.push(el);
  })
  return even.length > 1 ? odd[0] : even[0];
}

console.log(findOutlier([1, 2, 3]));