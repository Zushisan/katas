var multiplicationTable = function(maxValue) {
  // Your code here

  // We set the graphic length of each cell in function of max value
  highestValue = maxValue * maxValue;
  maxValueString = highestValue.toString().length;
  var cellSpace = "--";

  for (var l = 0; l < maxValueString; l++){
    cellSpace = cellSpace.concat("-");
  }

  for (var i = 1; i <= maxValue; i++){

    for (var j = 1; j <= maxValue; j++){

      var calcul = i * j;
      var resultString = calcul.toString()
     // var result = result.concat(resultString);



    }

   // result = result.concat("\n");



  }

  // return result;


}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));