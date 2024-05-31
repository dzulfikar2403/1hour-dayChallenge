const printerError = (s) => {
  const aToM = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];
  const sArr = s.split('');
  const errorInput = sArr.filter(el => !aToM.includes(el.toLowerCase()));
  return `${errorInput.length}/${s.length}`
}

console.log(printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'));
