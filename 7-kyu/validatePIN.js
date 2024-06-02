const validatePIN = (pin) => {
  if(pin.length === 4 || pin.length === 6){
    const res = pin.split('').map(el => el < '0' || el > '9' ? false : true); 
    return res.every(el => el);
  }else{
    return false;
  }
}

console.log(validatePIN('12.8'));