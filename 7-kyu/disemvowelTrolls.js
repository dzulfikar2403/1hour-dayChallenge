const disemvowel = (str) => {
  return str.split('').map(el => ['a','i','u','e','o'].includes(el.toLowerCase()) ? '' : el).join('')
}

console.log(disemvowel("This website is for losers LOL!"));