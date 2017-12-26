var talkingCalendar = function(date) {
  // Your code here
  // String date separation
  var yearString = date.slice(0, 4);
  var monthString = date.slice(5, 7);
  var dayString = date.slice(8, 10);

  // String to int
  var year = parseInt(yearString);
  var month = parseInt(monthString);
  var day = parseInt(dayString);

  var result = "";

  if( month == 1){
    result = "Januray ";
  }
  else if( month == 2){
    result = "February ";
  }
  else if( month == 3){
    result = "March ";
  }
  else if( month == 4){
    result = "April ";
  }
  else if( month == 5){
    result = "May ";
  }
  else if( month == 6){
    result = "June ";
  }
  else if( month == 7){
    result = "July ";
  }
  else if( month == 8){
    result = "August ";
  }
  else if( month == 9){
    result = "September ";
  }
  else if( month == 10){
    result = "October ";
  }
  else if( month == 11){
    result = "November ";
  }
  else if( month == 12){
    result = "December ";
  }

  result = result.concat(day);

  if(day == 1 || day == 21 || day == 31){
    result = result.concat("st, ");
  }
  else if(day == 2 || day == 22 ){
    result = result.concat("nd, ");
  }
  else if(day == 3 || day == 23){
    result = result.concat("rd, ");
  }
  else {
    result = result.concat("th, ");
  }

  result = result.concat(yearString);

  return result;

}

console.log(talkingCalendar('2017/12/02'));
console.log(talkingCalendar('2007/11/11'));
console.log(talkingCalendar('1987/08/24'));