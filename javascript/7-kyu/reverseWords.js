const reverseWords = (str) => {
  return str.split(" ").map(el => el.split('').reverse().join('')).join(' ');
};

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
