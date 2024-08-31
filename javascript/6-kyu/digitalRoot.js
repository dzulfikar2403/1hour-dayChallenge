const digitalRoot = (n) => {
  while (true) { 
    if(n > 9){ 
      n = `${n}`.split('').map(el => parseInt(el)).reduce((total,val) => total+val ,0);
    }else{
      return n
    }
  }
};

console.log(digitalRoot(456));
