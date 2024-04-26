const fakeBin = (str) => {
  return str.split('').map(el => el <= 4 ? '0' : '1').join('')
};

console.log(fakeBin('366058562030849490134388085'));