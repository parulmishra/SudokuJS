var Sudoku = require('./../js/sudoku.js').sudokuModule;

$(document).ready(function() {
	var newSudoku = new Sudoku();
	
	$("#generate").submit(function(event) {
		event.preventDefault();
		var fillBoard = [];
		for(var p = 0; p < 9; p++)
		{
			fillBoard.push([]);
			for(var q = 0; q < 9; q++)
			{
				console.log("value entered : " + val + "for #cell-" + ((p+1)*10 + (q+1)));
				var val = $("#cell-" + ((p+1)*10 + (q+1))).val();
				if(val <= 9 && val >= 1)
				{
					fillBoard[p][q] = val;
				}
				else
				{
					alert("invalid value entered : " + val + "for #cell-" + ((p+1)*10 + (q+1)));
					return; 
				}
			}
		}
		if(newSudoku.checkIsValid(fillBoard) == true)
		{
			$("#result").append("<h3>" + "Congratulations You win the game!" + "</h3>")
		}
		else
		{
			$("#result").append("<h3>" + "Sorry you lost! Play Again.." + "</h3>")
		}
	});
	var board = [];
	for(var i=0; i<9; i++)
	{
	  board.push([]);
	  for(var j=0; j<9; j++)
	  {
		board[i][j] = 0;
	  }
	}
	
	$("#play").click(function()
	{
		var uniques = newSudoku.GenerateRandom(1,9,4); 
	
		board[0][0] = uniques[0];
		board[0][1] = uniques[1];
		board[0][2] = uniques[2];
		board[0][3] = uniques[3];
	
		var randomPositions = newSudoku.GenerateRandom(0,80,10);
	
		newSudoku.GenerateBoard(0,4,board);		
		$("#grid").html('<table>');
		for(var k=0; k< 9; k++)
		{
			$("#grid").append('<tr>');
			for(var l=0; l< 9; l++)
			{
				var val = board[k][l];
				console.log(val);
				if(randomPositions.includes((k+1)*(l+1)))
				{
					val = 0;
				}
				var str = '<td><input id="cell-'+((k+1)*10 + (l+1)) + '" type="number" value="' + val;
				if(val != 0)
					str += '" readonly/></td>';
				else
					str+= '" style="color: #FFFFFF; background-color: #FF0000;"/></td>';
				$("#grid").append(str);
				console.log(str);
			}
			$("#grid").append('</tr>');
		}
		$("#grid").append('</table>');
	});
});