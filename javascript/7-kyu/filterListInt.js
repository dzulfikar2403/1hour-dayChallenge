const filter_list = (l) => l.filter((el) => typeof el === "number");

console.log(filter_list([1, 2, "a", "b"]));
