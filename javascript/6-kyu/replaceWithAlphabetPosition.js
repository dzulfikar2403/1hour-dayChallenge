const alphabetPosition = (text) => {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  text = text.split("").map(el => alphabet.includes(el.toLowerCase()) ? alphabet.indexOf(el.toLowerCase()) + 1  : null);
  return text.filter(el => el !== null).join(' ');
};

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
