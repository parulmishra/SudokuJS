function Sudoku(board)
{
  this.board = board;
}
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
	  if(board[x][i] == 0)
			continue;
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
  for (var x = 0; x < 9; x++)
  { // columns
    uniques = [];
    for (var i = 0; i < 9; i++)
    { // rows
	  if(board[i][x] == 0)
			continue;
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
  for(var row = 0; row < 9; row += 3)
  {
    for(var col = 0; col < 9; col += 3)
    {
	  uniques = [];
      for(var rowstart = row; rowstart < row+3; rowstart++)
      {
		for(var colstart = col; colstart < col+3; colstart++)
		{
			if(board[rowstart][colstart] == 0)
				continue;
			if(uniques.includes(board[rowstart][colstart]))
			{
			  return false;
			}
			else
			{
			  uniques.push(board[rowstart][colstart]);
			}
		}
      }
    }
  }
  return true;
};
CheckIsValid = function()
{
	return (CheckValidRow() && CheckValidColumn() && CheckValidBox());
};
GenerateBoard = function(x,y)
{
	var nextx = x; 
	var nexty = y;
	if(y < 9)
	  nexty++;
    else if (y == 9)
	{
	  nexty = 0;
	  if(x == 9)
		return false;
	  nextx++;
	}
  for(var i = 1; i <= 9; i++)
  {
	  board[x][y] = i;
	  if(CheckIsValid() == true && GenerateBoard(nextx, nexty) == true)
	  {
		  return true;
	  }
  }
  board[x][y] = 0;
  return false;
};
exports.sudokuModule = Sudoku;
