const sumMix = x => x.reduce((acc,val) => acc + Number(val) ,0);

console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));