const divisors = int => {
  const arrByInt = [];
  for (let i = 1; i <= int; i++) {
    arrByInt.push(i);
  }

  const dataDivided = arrByInt.filter(el => int % el === 0);
  const resDivideSingle = dataDivided.slice(dataDivided.length -1);
  const resDivideList = dataDivided.slice(1, dataDivided.length -1);

  return dataDivided.length === 2 ? `${resDivideSingle.toString()} is prime` : resDivideList;
}

console.log(divisors(13));