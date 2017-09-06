function Sudoku(board) {
  this.board = board;

  this.checkWin = function() {
    //ROW CHECKER
    for (var x = 0; x < board.length; x++) {
      var uniques = [];
      for (var i = 0; i < board[x].length; i++) {
        if (uniques.includes(board[x][i])) {
          return false;
        }
        else {
          uniques.push(board[x][i]);
        }
      }
    }

    //COLUMN CHECKER
    for (x = 0; x < board.length; x++) { // columns
      uniques = [];
      for (i = 0; i < board.length; i++) { // rows
        if (uniques.includes(board[i][x])) {
          return false;
        }
        else {
          uniques.push(board[i][x]);
        }
      }
    }



  //BOX CHECKER
    for(var box = 0; box < board.length; box++)
    {
      uniques = [];
      debugger;
      for(var row = Math.floor((box / 3)) * 3, stopAtRow = row + 3; row < stopAtRow; row++)
      {
        for(var col = (box % 3) * 3, stopAt = col + 3; col < stopAt; col++)
        {
          if(uniques.includes(board[row][col]))
          {
            return false;
          }
          else
          {
            uniques.push(board[row][col]);
          }
        }
      }
    }
    return true;
  }
};

 var myTestArray = [[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],
                   [1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],
                   [1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]];


exports.sudokuModule = Sudoku;



  //   for (var i = 0; i < board.length; i++)
  //   {
  //     for(var j = 0; j<board.length;)
  //     {
  //       if(i == j)
  //       {
  //         j++;
  //         continue;
  //       }
  //       if(board[i] == board[j])
  //       return false;
  //       else
  //         {
  //           j++;
  //         }
  //       }
  //     }
  //
  //   for (var j = 0, i=0; j < board.length; j++) {
  //     if(i == j)
  //     {
  //       j++;
  //       continue;
  //     }
  //     if (board[i][j] == board[i][j])
  //     {
  //       return false;
  //     }
  //   }
  //     return true;
  // }
