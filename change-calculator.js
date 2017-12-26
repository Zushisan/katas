var calculateChange = function(total, cash) {
  // Your code here
  var rest = cash - total;
  rest = rest.toFixed(2);
  // Array with how much of each currency is given back.
  var result = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  var twentyDollars = 20;
  var tenDollars = 10;
  var fiveDollars = 5;
  var twoDollars = 2;
  var oneDollar = 1;
  var quarter = 0.25;
  var dime = 0.10;
  var nickel = 0.05;
  var penny = 0.01;

  let change = {};

  // Loop that count how much of each currency is given back.
  while(rest > 0){

    if (rest >= twentyDollars){
      rest = rest - twentyDollars;
      result[0] = result[0] + 1;
    }
    else if (rest >= tenDollars){
      rest = rest - tenDollars;
      result[1] = result[1] + 1;
    }
    else if (rest >= fiveDollars){
      rest = rest - fiveDollars;
      result[2] = result[2] + 1;
    }
    else if (rest >= twoDollars){
      rest = rest - twoDollars;
      result[3] = result[3] + 1;
    }
    else if (rest >= oneDollar){
      rest = rest - oneDollar;
      result[4] = result[4] + 1;
    }
    else if (rest >= quarter){
      rest = rest - quarter;
      result[5] = result[5] + 1;
    }
    else if (rest >= dime){
      rest = rest - dime;
      result[6] = result[6] + 1;
    }
    else if (rest >= nickel){
      rest = rest - nickel;
      result[7] = result[7] + 1;
    }
    else if (rest >= penny){
      rest = rest - penny;
      result[8] = result[8] + 1;
    }

    // fixe rest decimals before starting the loop again
    rest = rest.toFixed(2);
  }


  if (result[0] > 0){
    change.twentyDollars = result[0];
  }
  if (result[1] > 0){
    change.tenDollars = result[1];
  }
  if (result[2] > 0){
    change.fiveDollars = result[2];
  }
  if (result[3] > 0){
    change.twoDollars = result[3];
  }
  if (result[4] > 0){
    change.oneDollar = result[4];
  }
  if (result[5] > 0){
    change.quarter = result[5];
  }
  if (result[6] > 0){
    change.dime = result[6];
  }
  if (result[7] > 0){
    change.nickel = result[7];
  }
  if (result[8] > 0){
    change.penny = result[8];
  }

return change;

}

console.log(calculateChange(17.87, 20));
console.log(calculateChange(26.23, 40));
console.log(calculateChange(12, 40));
