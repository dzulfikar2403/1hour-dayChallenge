const abbrevName = (name) => name.split(' ').map(el => el[0].toUpperCase()).join('.');

console.log(abbrevName("dzulfikar omar"));
