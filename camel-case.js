var camelCase = function(input) {
  // Your code here
  // We put each word in an array
  var array = input.split(" ");
  var result = array[0];

  // We start our loop at 1 to avoid the first word
  for( var i = 1; i < array.length; i++){
    var string = array[i].toString();
    string = string.charAt(0).toUpperCase() + string.slice(1);
    result = result.concat(string);
  }

  return result;

}

console.log(camelCase('this is a string'));
console.log(camelCase('loopy lighthouse'));
console.log(camelCase('supercalifragalisticexpialidocious'));
