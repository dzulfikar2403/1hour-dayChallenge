const countPositivesSumNegatives = (input) => {
  let countPos = 0;
  let sumNeg = 0;
  if (input === null || input.length === 0) {
    return [];
  } else {
    for (val of input) {
      if (val > 0) countPos += 1;
      if (val < 0) sumNeg += val;
    }
  }
  return [countPos, sumNeg];
};

console.log(countPositivesSumNegatives(null));
