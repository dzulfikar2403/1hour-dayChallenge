const accum = (s) => {  
  return s.split('').map((el,i) => el.toUpperCase() + el.repeat(i).toLowerCase()).join('-');
}

console.log(accum("ZpglnRxqenU"));