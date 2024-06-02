const isSquare = (n) => {
  const square = Math.sqrt(n);

  // case ini lebih baik gunakan Number.isInteger(), karna baru tau.
  if(square.toString().includes('.') || n < 0){ 
    return false;
  }else{
    return true;
  }
};

console.log(isSquare(676));