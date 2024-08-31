const getGrade = (s1,s2,s3) => {
  const avg = (s1+s2+s3) / 3;
  if(avg <= 100 && avg >= 90) return 'A';
  if(avg < 90 && avg >= 80) return 'B';
  if(avg < 80 && avg >= 70) return 'C';
  if(avg < 70 && avg >= 60) return 'D';
  if(avg < 60 && avg >= 0) return 'F';
}

console.log(getGrade(95,90,93));