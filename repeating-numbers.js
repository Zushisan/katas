var repeatNumbers = function(data) {
  // Your code here
  var string = "";
  // Loop that goes through each array
  for (var j = 0; j < data.length; j++){

    if(j > 0){
      string = string.concat(", ");
    }

    var array = data[j];
    // Loop that create the string
    for (var i = 0; i < array[1]; i++){
      string = string.concat(String(array[0]));
    }

  }

  return string;

}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));