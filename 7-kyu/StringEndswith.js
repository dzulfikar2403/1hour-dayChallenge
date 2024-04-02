const solution = (str, ending) => {
  if(ending === '') return true;
  return str.slice(-ending.length) === ending
};

console.log(solution("abcde", ""));
