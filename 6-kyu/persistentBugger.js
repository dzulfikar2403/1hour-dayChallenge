const persistence = (num) => {
  let i = 0;
  while (num > 9) {
    num = num
      .toString()
      .split("")
      .reduce((total, val) => total * parseInt(val), 1);
    i++;
  }

  return i;
};

console.log(persistence(999));
