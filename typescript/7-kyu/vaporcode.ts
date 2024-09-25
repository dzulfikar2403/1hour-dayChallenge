export const vaporcode = (str:string) => {
  const arrStr = str.split(' ');
  const mapUpperCase = arrStr.map((s:string) => s.toUpperCase()).join('');
  return mapUpperCase.split('').join('  ')
}

console.log(vaporcode('hallo sd'));
