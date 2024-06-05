const arrayPlusArray = (arr1,arr2) => {
  const arrRes = [...arr1,...arr2];
  return arrRes.reduce((acc,val) => acc + val ,0);
};

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));