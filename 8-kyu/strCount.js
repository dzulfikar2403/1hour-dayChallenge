const strCount = (str,letter) => {
  const res = str.split('').filter(el => el.includes(letter));
  return res.length;
}

console.log(strCount('test','e'));
