const setAlarm = (emp,vac) => {
  return (emp === true && vac === false) ? true : false; 
}

console.log(setAlarm(true,true));