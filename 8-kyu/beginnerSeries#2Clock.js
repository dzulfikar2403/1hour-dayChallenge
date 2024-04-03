const past = (h, m, s) => {
  h *= 3600 * 1000;
  m *= 60 * 1000;
  s *= 1000;
  return h+m+s;
};
console.log(past(1, 0, 1));
