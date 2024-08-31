const cockroachSpeed = (s) => {
  const cmToKm = 0.036;
  return Math.floor(s / cmToKm);
};

console.log(cockroachSpeed(1.09));