var conditionalSum = function(values, condition) {
  // Your code here
  var result = 0;

  if( condition === "even"){

    for(var i = 0; i < values.length; i++){

      if(values[i] % 2 === 0){
        result = result + values[i];
      }

    }

  }

  if( condition === "odd"){

    for(var i = 0; i < values.length; i++){

      if(values[i] % 2 !== 0){
        result = result + values[i];
      }

    }

  }

  return result;

}

console.log(conditionalSum([1, 2, 3, 4, 5], 'even'));
console.log(conditionalSum([1, 2, 3, 4, 5], 'odd'));
console.log(conditionalSum([13, 88, 12, 44, 99], 'even'));
console.log(conditionalSum([], 'odd'));