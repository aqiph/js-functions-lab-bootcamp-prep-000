// happyHolidays
function happyHolidays(){
  return 'Happy holidays!'
}

//happyHolidaysTo(name)
function happyHolidaysTo(name){
  return `Happy holidays, ${name}!`
}

//happyHolidayTo(holiday, name)
function happyHolidayTo(holiday, name){
  return `Happy ${holiday}, ${name}!`
}

//holidayCountdown(holiday, days)
function holidayCountdown(holiday, days){
  return `It's ${days} days until ${holiday}!`
}


var funcs = [];
// let's create 3 functions
for (let i = 0; i < 3; i++) {
  // and store them in funcs
  //console.log(i)
  funcs[i] = function() {
    // each should log its value.
//    console.log(i)
    console.log("My value: " + i);
  };
}
//console.log(i)
for (var j = 0; j < 3; j++) {
  // and now let's run each one to see
  funcs[j]();
}
