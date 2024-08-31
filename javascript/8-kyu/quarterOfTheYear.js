const quarterOf = month => {
  const quarterData = Math.ceil(month / 3);
  return quarterData
};

console.log(quarterOf(9));