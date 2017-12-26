var multiplicationTable = function(maxValue) {
  // Your code here

  // We set the graphic length of each cell in function of max value
  var highestValue = maxValue * maxValue;
  var maxValueString = highestValue.toString().length;
  var cellSpace = "--";
  var numberSpace ="";

  for (var l = 0; l < maxValueString; l++){
    cellSpace = cellSpace.concat("-");
    numberSpace = numberSpace.concat(" ");
  }
  // ----------------------------------------------------------------

  // Premiere ligne du tableau
  var result = "+";

  for (var i = 1; i <= maxValue; i++){

    for (var k = 0; k < maxValue; k++){

    result = result.concat(cellSpace+"+");

    }
  // ----------------------------------------------------------------
  // Creation du tableau de multiplication
    result = result.concat("\n");

    for (var j = 1; j <= maxValue; j++){

      var calcul = i * j;
      var resultString = calcul.toString();
      //Utilisation de tempSpace to keep numberSpace initial value for the loop
      var tempSpace = numberSpace;
      // We remove space if the number start to be to big eg: 10 100 1000
        for (var m = 1; m < resultString.length; m++){
          tempSpace = tempSpace.substring(0, tempSpace.length - 1);
        }

      result = result.concat("| "+resultString+tempSpace);

    }

    result = result.concat("|\n+");

  }

  // Last line of the table
  for (var n = 0; n < maxValue; n++){

    result = result.concat(cellSpace+"+");

    }

  return result;

}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(15));