const number = busStops => {
  let stay = 0,
      leave = 0;
  const process = busStops.map(el => {
    stay += el[0];
    leave += el[1];
  });

  return stay - leave;
};

console.log(number([[10,0],[3,5],[5,8]]));