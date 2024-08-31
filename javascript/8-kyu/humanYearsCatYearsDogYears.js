const humanYearsCatYearsDogYears = (humanYears) => {
  if (humanYears >= 1 && typeof humanYears === "number") {
      const res = [humanYears,15,15];
      for (let i = 1; i <= humanYears; i++) {
        if(i === 2){
          res[1] += 9
          res[2] += 9
        }else if(i > 2){
          res[1] += 4
          res[2] += 5
        }
      }

      return res;
  }else{
      return [0,0,0]
  }
};

console.log(humanYearsCatYearsDogYears(10));
