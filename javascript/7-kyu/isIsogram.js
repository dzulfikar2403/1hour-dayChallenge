const isIsogram = (str) => {
  const strLow = str.toLowerCase().split("");
  return [...new Set(strLow)].length === strLow.length;
};

console.log(isIsogram("abi"));
