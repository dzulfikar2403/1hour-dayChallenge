const solution = (a,b) => {
  return a.length > b.length ? [b,a,b].join('') : [a,b,a].join('')
}

console.log(solution('13', '200'));