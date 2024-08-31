const longest = (s1, s2) => {
  const arr = [...s1.split(''), ...s2.split('')];
  return [...new Set(arr)].sort().join('')
};

console.log(longest("xyaabbbccccdefww","xxxxyyyyabklmopq"));
