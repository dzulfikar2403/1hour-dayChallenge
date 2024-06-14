const differenceInAges = (ages) => {
  const youth = Math.min.apply(null,ages);
  const oldest = Math.max.apply(null,ages);
  return [youth,oldest,(oldest - youth)];
};

console.log(differenceInAges([82, 15, 6, 38, 35]));