const findShort = (str) => str.split(' ').map(el=> el.length).sort((a,b) => a - b)[0];


console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
