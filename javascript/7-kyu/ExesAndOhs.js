const XO = (str) => {
  const strLow = str.toLowerCase().split('');
  let countX = 0;
  let countO = 0;
  strLow.map(el => {
    if(el.includes('x')) countX++;
    if(el.includes('o')) countO++;
  })
  return countO === countX;
};

console.log(XO("xooxx"));
