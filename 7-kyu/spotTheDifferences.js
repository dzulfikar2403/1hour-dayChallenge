const spot = (s1,s2) => {
  const dataRes = [];
  for (let i = 0; i < s1.length; i++) {
    if(s1[i] !== s2[i]) dataRes.push(i);
  }

  return dataRes;
}

console.log(spot('abcdefg', 'abcqetg'));