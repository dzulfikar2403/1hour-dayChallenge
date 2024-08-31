var countSheep = (num) => {
  const res = [];
  for (let i = 1; i <= num; i++) {
    res.push(i + ' sheep...')
  };
  return res.join('');
};

console.log(countSheep(2));