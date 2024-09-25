export const trailingZeros = (n:number) => {
  const resBinary = n.toString(2);
  const arrBinaryReverse = resBinary.split('').reverse(); //reverse digunakan untuk ketika looping klo bukan '0'. langsung break/udahin loopnya 
  let res = 0;
  for (let i = 0; i < arrBinaryReverse.length; i++) {
    if(arrBinaryReverse[i] !== '0'){
      break
    }
    res += 1;
  }

  return res;
}

console.log(trailingZeros(20));
