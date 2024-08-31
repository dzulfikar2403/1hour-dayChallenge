const removeExclamationMarks = s => s.split('').filter(el => !el.includes('!')).join('');

console.log(removeExclamationMarks("Hello World!"));