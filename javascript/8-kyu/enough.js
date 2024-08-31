const enough = (cap,on,wait) => {
  return (on + wait) <= cap ? 0 : (on + wait) - cap; 
}

console.log(enough(100,50,50));