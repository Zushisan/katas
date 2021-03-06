var queenThreat = function(queen1, queen2){

  console.log("Queen 1: "+queen1);
  console.log("Queen 2: "+queen2+"\n");

  var col = [0, 1, 2, 3, 4, 5, 6, 7];
  var chessboard = "";
  //var row = col;
  //var row = [1, 2, 3, 4, 5, 6, 7, 8];

  // Chessboard display -----------------------------------------------------------------
  for(var i = 0; i < col.length; i++){
    for(var j = 0; j < col.length; j++){

      if((queen1[0] == col[j] && queen1[1] == col[i]) || (queen2[0] == col[j] && queen2[1] == col[i])){
        chessboard = chessboard.concat("1 ");
      }

      else{
        chessboard = chessboard.concat("O ");
      }

    }
    chessboard = chessboard.concat("\n");
  }

  console.log(chessboard);
  // ------------------------------------------------------------------------------------

  var result = new Boolean(false);

  // First we check if the Queens are on the same row or column
  if( queen1[0] == queen2[0] || queen1[1] == queen2[1]){
    result = true;
  }

  // For the diagonal we are only gonna compare queen1 diagonal to queen2 position
  // The possibilities are x+n,y+n or x-n,y-n or x+n,y-n or x-n,y+n
  for(k = 0; k < col.length; k++){

    if((queen1[0] + k == queen2[0] && queen1[1] + k == queen2[1]) ||
       (queen1[0] - k == queen2[0] && queen1[1] - k == queen2[1]) ||
       (queen1[0] + k == queen2[0] && queen1[1] - k == queen2[1]) ||
       (queen1[0] - k == queen2[0] && queen1[1] + k == queen2[1])){

      result = true;
    }
  }

    console.log(result+"\n");
}

queenThreat([0, 5], [5, 0]);
queenThreat([0, 0], [7, 5]);