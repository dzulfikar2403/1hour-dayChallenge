const rgb = (r,g,b) => {
  const sample = [r,g,b];
  const sampleToHex = sample.map(el => {
    if(el > 255 ) {
      return "ff";
    }else if(el <= 0){
      return '00';
    }else{
      return el.toString(16).length === 1 ? '0' + el.toString(16) : el.toString(16);
    }
  }).join('');

  return sampleToHex.toUpperCase() ;
}

console.log(rgb(0, 0, 0));