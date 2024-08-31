const pigIt = str => {
  const moveToEnd = str.split(' ').map(el => el.slice(1,el.length) + el.slice(0,1));
  const pattern = /[^a-z]/i;
  const ayPlusStr = moveToEnd.map(el => el.match(pattern) ? el : el + 'ay').join(' ');
  return ayPlusStr
}

console.log(pigIt('This is my string ?'));