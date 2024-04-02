const descendingOrder = (num) => {
  const desc = `${num}`.split('').sort((a,b)=>b-a);
  return parseInt(desc.join(''))
};

console.log(descendingOrder());
