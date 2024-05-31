const removeSmallest = (number) => {
  const arrNew = number.slice(0);
  const numberRemove = number.findIndex(el => el === Math.min(...arrNew));
  arrNew.splice(numberRemove, 1);
  return arrNew;
}


console.log(removeSmallest([ 359, 93, 257, 175, 48, 248, 374, 327, 110, 165, 232, 321, 91, 251, 396, 387, 294, 198 ]));