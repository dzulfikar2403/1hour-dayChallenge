const countSheeps = (count)=> count.filter(el => el === true).length;

console.log(countSheeps([true,true,true,false,true,true,true,true,true,false,true,false,true,false,false,true,true,true,true,true,false,false,true,true]));