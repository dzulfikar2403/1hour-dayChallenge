const toCamelCase = (str) => {
  const arr = str.split(/[-_]/);

  return (
    arr[0] +
    arr
      .slice(1)
      .map((el) => el[0].toUpperCase() + el.slice(1))
      .join("")
  );
};

console.log(toCamelCase("ABC"));
