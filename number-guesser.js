var prompt = require('prompt-sync')();

// code below (replace this example)
//var answer = prompt('What is your name? ');
//console.log('You answered: ' + answer);

var numberResult = Math.floor((Math.random() * 100) + 1);
var numberGuess = 0;
var counter = 0;
var given = [];
var i = 0;
var continueLoop = 1;

console.log("Welcome to the NUMMMMMBER GUESSER !!!");


while(numberGuess != numberResult || counter === 0){
  continueLoop = 1;
  numberGuess = prompt("Guess a number: ");

  for(i = 0; i < given.length; i++){
    if(numberGuess == given[i]){
      console.log("Already Guessed !!");
      continueLoop = 0;
    }
  }

  given[counter] = numberGuess;

  if(continueLoop == 1){
    if(numberGuess == numberResult){

      counter++;
      console.log("You got it! You took "+counter+" attempts!");

    }

    else if(numberGuess > numberResult){
      console.log("Too High !");
      counter++;
    }

    else if(numberGuess < numberResult){
      console.log("Too Low !");
      counter++;
    }

    else{
      console.log("ERROR, enter a number.");
    }
  }


}

