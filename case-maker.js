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



  // count style array to determine number of passages
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
    }

    if (style[j] === "kebab"){
      for( var i = 0; i < array.length; i++){
        var string = array[i].toString();
        string = string.concat("-");
        result = result.concat(string);
      }
    }

    if (style[j] === "title"){
      //for( var i = 0; i < array.length; i++){
        //var string = array[i].toString();
       // string = string.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        //result = result.concat(string);
        console.log("Title case.");
      }


    if (style[j] === "vowel"){


        var string = array.toString();
        ['a', 'e', 'i', 'o', 'u'].indexOf(string.toUpperCase());
        result = result.concat(string);

    }

    if (style[j] === "consonant"){

        var string = array.toString();
        string = string.charAt(0).toUpperCase() + string.slice(1);
        result = result.concat(string);

    }

    if (style[j] === "upper"){

        var string = array.toString();
        string = string.charAt(0).toUpperCase() + string.slice(1);
        result = result.concat(string);

    }

    if (style[j] === "lower"){

        var string = array.toString();
        string = string.charAt(0).toUpperCase() + string.slice(1);
        result = result.concat(string);

    }


  }
  console.log(result);
  //return result;
}




makeCase('this is a string', 'camel');
makeCase('this is a string', 'pascal');
makeCase('this is a string', 'snake');
makeCase('this is a string', 'kebab');
makeCase('this is a string', 'title');
makeCase('this is a string', 'vowel');
makeCase('this is a string', 'consonant');
makeCase('this is a string', ['upper', 'snake']);