const differenceInAges = (ages) => {
  const youth = Math.min(...ages);
  const oldest = Math.max(...ages);
  return [youth,oldest,(oldest - youth)];
};

console.log(differenceInAges([82, 15, 6, 38, 35]));