function Sudoku(board)
{
  this.board = board;
}
var arr = [1,2,3,4,5,6,7,8,9];
var board = [];
for(var i=0; i<9; i++)
{
  board.push([]);
  for(var j=0; j<9; j++)
  {
    board[i][j] = 0;
  }
}
CheckValidRow = function()
{
  for (var x = 0; x < 9; x++)
  {
    var uniques = [];
    for (var i = 0; i < 9; i++)
    {
      if (uniques.includes(board[x][i]))
      {
        return false;
      }
      else
      {
        uniques.push(board[x][i]);
      }
    }
    return true;
  }
};
CheckValidColumn = function()
{
  for (let x = 0; x < 9; x++)
  { // columns
    uniques = [];
    for (let i = 0; i < 9; i++)
    { // rows
      if (uniques.includes(board[i][x]))
      {
        return false;
      }
      else
      {
        uniques.push(board[i][x]);
      }
    }
  }
  return true;
};
CheckValidBox = function()
{
  for(var box = 0; box < 9; box++)
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
};
GenerateBoard = function()
{
  for(var i=0; i<9; i++)
  {
    for(var j=0; j<9;)
    {
      for(var k=0; k<arr.length;)
      {
        if(board[i][j] != arr[k])
        {
          // if(CheckValidRow() == true && CheckValidColumn() == true && CheckValidBox() == true)
          // {
            board[i][j] = arr[k];
            k++;
            j++;
          //}
       }
     }
   }
 }
};
//   this.checkWin = function() {
//     //ROW CHECKER
//     for (var x = 0; x < board.length; x++)
//     {
//       var uniques = [];
//       for (var i = 0; i < board[x].length; i++)
//       {
//         if (uniques.includes(board[x][i]))
//         {
//           return false;
//         }
//         else {
//           uniques.push(board[x][i]);
//         }
//       }
//     }
//     //COLUMN CHECKER
//     for (let x = 0; x < board.length; x++) { // columns
//       uniques = [];
//       for (let i = 0; i < board.length; i++) { // rows
//         if (uniques.includes(board[i][x])) {
//           return false;
//         }
//         else {
//           uniques.push(board[i][x]);
//         }
//       }
//     }
//   //BOX CHECKER
//     for(var box = 0; box < board.length; box++)
//     {
//       uniques = [];
//       debugger;
//       for(var row = Math.floor((box / 3)) * 3, stopAtRow = row + 3; row < stopAtRow; row++)
//       {
//         for(var col = (box % 3) * 3, stopAt = col + 3; col < stopAt; col++)
//         {
//           if(uniques.includes(board[row][col]))
//           {
//             return false;
//           }
//           else
//           {
//             uniques.push(board[row][col]);
//           }
//         }
//       }
//     }
//     return true;
//   }
// };

// Sudoku.prototype.CheckEmptyPositions = function()
// {
//
// }
exports.sudokuModule = Sudoku;
