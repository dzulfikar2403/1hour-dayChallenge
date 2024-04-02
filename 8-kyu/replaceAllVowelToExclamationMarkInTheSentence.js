const replace = (s) => {
  const vowel = ["a", "i", "u", "e", "o"];
  return s.split('').map((el,i) => vowel.includes(el.toLowerCase()) ? '!' : el).join('');
};

console.log(replace("!Hi! Hi!"));
