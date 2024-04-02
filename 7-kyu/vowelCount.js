const getCount = (str)=>{
  const strConv = [...str.toLowerCase()];
  const vowel = ['a','i','u','e','o']; 
  return strConv.reduce((acc,currentVal,) => (vowel.includes(currentVal)) ? acc += currentVal : acc ,[]).length;
}

console.log(getCount('doraemon'));