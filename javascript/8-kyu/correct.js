const correct = (str) => {
  const abjad = { 5: "S", 0: "O", 1: "I" };
  return str
    .split("")
    .map((el) => abjad[el] || el)
    .join("");
};

console.log(correct("DUBL1N"));
