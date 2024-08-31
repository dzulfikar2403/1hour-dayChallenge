const dnaStrand = (dna) => {
  return dna.split("").map((el) => {
    if (el === "A") return el.replace(el, "T");
    if (el === "T") return el.replace(el, "A");
    if (el === "C") return el.replace(el, "G");
    return el.replace(el, "C");
  }).join('');
};

console.log(dnaStrand("ATTGC"));
