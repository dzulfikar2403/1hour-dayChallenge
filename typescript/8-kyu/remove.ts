export const remove = (s: string) => {
  const arr: string = s.split('').filter(el => el !== '!').join('');
  return `${arr}!`
}

console.log(remove("Hai!!"));
