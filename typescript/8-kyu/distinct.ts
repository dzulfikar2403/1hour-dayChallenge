const distinct = (a: number[]) => {
  const res: number[] = []
  a.map((el:number) => !res.includes(el) && res.push(el))

  return res 
}

console.log(distinct([1,2,2,3,4]));
