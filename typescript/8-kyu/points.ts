export const points = (games: string[]) => {
  const resultPoint = games.map((gm:string) => gm[0] > gm[2] ? 3 : gm[0] === gm[2] ? 1 : 0)
  return resultPoint.reduce((acc:number,val:number) => acc + val ,0);
}

console.log(points(['1:0','2:0','3:0','4:0','2:1','1:3','1:4','2:3','2:4','3:4']));
