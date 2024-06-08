const doubleChar = str => {
  const arr = str.split('');
  return arr.map(el => el.repeat(2)).join('');
}

console.log(doubleChar("abcd"));