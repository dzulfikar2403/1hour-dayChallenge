const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  return mpg * fuelLeft >= distanceToPump;
};

console.log(zeroFuel(100,50,1));