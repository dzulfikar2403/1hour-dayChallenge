String.prototype.toJadenCase = function () {
  return this.split(' ').map(el => el.toUpperCase()[0] + el.slice(1)).join(' ');
};

var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());
