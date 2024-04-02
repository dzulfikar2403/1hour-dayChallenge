const maskify = (cc) => {
  const arr = [...cc].fill("#", 0, -4).join("");
  return arr;
};

console.log(maskify("Nananananananananananananananana Batman!"));
