const bonusTime = (salary,bonus) => {
  return bonus !== true ? `£${salary}` : `£${salary * 10}`; 
}

console.log(bonusTime(10000,false));