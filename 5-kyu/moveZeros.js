const moveZeros = (arr) => {
  const zerosArr = arr.filter(el => el === 0);
  const filteringArr = arr.filter(el => el !== 0);
  
  return [...filteringArr,...zerosArr];
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));