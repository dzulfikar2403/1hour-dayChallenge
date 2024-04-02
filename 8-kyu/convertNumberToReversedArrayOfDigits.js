const digitize = (n)=> [...`${n}`].reverse().map(el=> Number(el));

console.log(digitize(74923));