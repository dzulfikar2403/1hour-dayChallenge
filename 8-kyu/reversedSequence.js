const reverseSeq = (n) => {
  let res = [];
  for (let index = n; index >= 1; index--) {
    res.push(index) 
  }
  return res;
}

console.log(reverseSeq(5));