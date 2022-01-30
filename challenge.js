// For Leap Year

function leapYear(year) {
  if (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0) {
    return true;
  }
  return false;
}
const year = 2021;
const isLeapYear = leapYear(year);
// console.log("Is LeapYear", isLeapYear);

if(isLeapYear==true){
    console.log('yah!! this year is leap year.');
}
else{
    console.log('sorry! this year is not leap year.');
}