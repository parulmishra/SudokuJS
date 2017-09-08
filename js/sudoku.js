function Sudoku()
{
  
}

Sudoku.prototype.checkValidRow = function(board)
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
  }
  return true;
};
Sudoku.prototype.checkValidColumn = function(board)
{
  for (var x = 0; x < 9; x++)
  { // columns
    var uniques = [];
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
Sudoku.prototype.checkValidBox = function(board)
{
  for(var row = 0; row < 9; row += 3)
  {
    for(var col = 0; col < 9; col += 3)
    {
	  var uniques = [];
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
Sudoku.prototype.checkIsValid = function(board)
{
	return (this.checkValidRow(board) && this.checkValidColumn(board) && this.checkValidBox(board));
};
Sudoku.prototype.GenerateBoard = function(x,y, board)
{
	if(x == 9)
	{
		return true;
	}
	var nextx = x; 
	var nexty = y;
	if(y < 8)
	  nexty++;
    else if (y >= 8)
	{
	  nexty = 0;
	  nextx++;
	}
	
  for(var i = 1; i <= 9; i++)
  {
	  board[x][y] = i;
	  if(this.checkIsValid(board) && this.GenerateBoard(nextx, nexty, board))
	  {
		  console.log(x + ", " + y + ", " + i);
		  return true;
	  }
  }
  //console.log(x + ", " + y );
  board[x][y] = 0;
  return false;
};
Sudoku.prototype.GenerateRandom = function(min,max,numbers)
{
	var randomNumbers = [];
	while(randomNumbers.length != numbers)
	{
		var rand = Math.floor(Math.random() * max) + min;
		if(!randomNumbers.includes(rand))
			randomNumbers.push(rand);
	}
	return randomNumbers;
};
exports.sudokuModule = Sudoku;
