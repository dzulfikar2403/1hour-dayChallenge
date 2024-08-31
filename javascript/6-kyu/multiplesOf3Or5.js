const solution = (number) => {
  const arr = [];
  for(i=1; i < number; i++){
    arr.push(i);
  }

  return arr.filter(el => el % 3 === 0 || el % 5 === 0).reduce((total,val) => total+val ,0);
}

console.log(solution(10));