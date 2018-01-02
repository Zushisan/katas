var squareCode = function(){

  var prompt = require('prompt-sync')();
  var counter = 0;
  while(counter == 0){

    var message = prompt("Enter your message without space, 81 characters max: ");

    if(message.length > 81){
      console.log("Message too long, it is "+message.length+" characters. Try again.");
    }
    else{
      counter = 1;
      console.log("Message is "+message.length+" characters.");
    }
  }

  var messageRoot = Math.sqrt(message.length);
  var column = Math.ceil(messageRoot);
  var row = Math.floor(messageRoot);
  var messageArray = [];
  //console.log(messageRoot, row, column);

  // Array creation
  for(var i = 0; i <= row; i++){
    messageArray[i] = message.slice(0, column);
    message = message.substr(column);
  }

  var result = "";
  var arrayString = "";

  // Double loop that create our final result
  for(var j = 0; j < messageArray.length; j++){
    for(var k = 0; k < messageArray.length; k++){

      arrayString = messageArray[k].toString();
      result = result.concat(arrayString.slice(j, j+1));
      //console.log(result);

    }

    result = result.concat(" ");
  }

  //console.log(messageArray);
  console.log(result);
}

squareCode();