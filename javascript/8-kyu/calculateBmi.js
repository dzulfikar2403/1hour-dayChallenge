const bmi = (w,h) => {
  const bmiResult = (w / Math.pow(h,2));
  if (bmiResult <= 18.5) return "Underweight";
  if (bmiResult <= 25.0) return "Normal";
  if (bmiResult <= 30.0) return "Overweight";
  if (bmiResult > 30 ) return "Obese"
};

console.log(bmi(80, 1.80));