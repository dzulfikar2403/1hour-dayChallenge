const createPhoneNumber = (num) => {
  const [a,b,c,d,e,f,g,h,i,j] = num;
  return `(${a}${b}${c}) ${d}${e}${f}-${g}${h}${i}${j}`
};

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));