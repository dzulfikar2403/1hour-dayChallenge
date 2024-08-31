const findNeedle = (haystack) => `found the needle at position ${haystack.findIndex((el) => el === "needle")}`;
console.log(findNeedle(["3", "123124234", undefined, "needle", "world", "hay", 2, "3", true, false]));
