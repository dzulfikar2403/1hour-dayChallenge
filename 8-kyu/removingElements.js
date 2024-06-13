const removeEveryOther = arr => {
  return arr.filter((el,i) => i % 2 === 0 && el );
}

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));