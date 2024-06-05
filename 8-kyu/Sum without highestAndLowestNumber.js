  const sumArray = arr =>{
    if(arr === null ||  arr === undefined || arr.length <= 2) return 0;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return arr.reduce((acc,val) => acc+val ,0) - (min + max);
  };

console.log(sumArray());