var makeCase = function(input, type) {
  // Your code here
  // We put each word in an array
  var array = input.split(" ");

  var result = "";
  var style = [];

  // We put type in the style array weither it is already an array or not
  if(Array.isArray(type)){
    style = type;
  }
  else {
    style[0] = type;
  }

  // count style array to determine number of passages to make sure we treat multiple conditions
  // apply the style in order for each passages
  for (var j = 0; j < style.length; j++){

    if (style[j] === "camel"){
      result = array[0];
     // We start our loop at 1 to avoid the first word
      for( var i = 1; i < array.length; i++){
        var string = array[i].toString();
        string = string.charAt(0).toUpperCase() + string.slice(1);
        result = result.concat(string);
      }
     }

    if (style[j] === "pascal"){
      for( var i = 0; i < array.length; i++){
        var string = array[i].toString();
        string = string.charAt(0).toUpperCase() + string.slice(1);
        result = result.concat(string);
      }
    }

    if (style[j] === "snake"){
      for( var i = 0; i < array.length; i++){
        var string = array[i].toString();
        string = string.concat("_");
        result = result.concat(string);
      }
      result = result.slice(0, -1);
    }

    if (style[j] === "kebab"){
      for( var i = 0; i < array.length; i++){
        var string = array[i].toString();
        string = string.concat("-");
        result = result.concat(string);
      }
      result = result.slice(0, -1);
    }

    if (style[j] === "title"){
      for( var i = 0; i < array.length; i++){
        var string = array[i].toString();

        result = result.concat(string+" ");
      }

        result = result.replace(/\w\S*/g, function(txt){
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
        //console.log("Title case.");
    }
  }

  // We put our result in one string var for the other conditions
  // We need to verify if we applied a style already or if we apply it directly on input
  if (result === ""){
    result = input;
  }


  for (var k = 0; k < style.length; k++){

    if (style[k] === "vowel"){

        result = result.replace(/[aeiou]/g, function(m) {
          m = m.toUpperCase();
          return m;
        });

    }

    if (style[k] === "consonant"){


        result = result.replace(/[bcdfghjklmnpqrstvwxyz]/g, function(m) {
          m = m.toUpperCase();
          return m;
        });

    }

    if (style[k] === "upper"){

        result = result.toUpperCase();

    }

    if (style[k] === "lower"){

        result = result.toLowerCase();

    }
  }

  console.log(result);

}


makeCase('this is a string', 'camel');
makeCase('this is a string', 'pascal');
makeCase('this is a string', 'snake');
makeCase('this is a string', 'kebab');
makeCase('this is a string', 'title');
makeCase('this is a string', 'vowel');
makeCase('this is a string', 'consonant');
makeCase('this is a string', ['upper', 'snake']);
makeCase('this is a string', ['lower', 'kebab']);