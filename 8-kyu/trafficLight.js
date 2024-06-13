const updateLight = curr => {
  if (curr === "green") return "yellow"; 
  if (curr === "yellow") return "red"; 
  if (curr === "red") return "green";  
}

console.log(updateLight("green"));