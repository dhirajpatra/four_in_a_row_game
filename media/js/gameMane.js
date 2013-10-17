/**
 * this class is for mane game logic
 */
/*
function gameMane() {
	
	return startGame();
};
*/

var lastMoveFromWhichPlayer = 1; // black will start and 1 means red
var totalMove = 0;
var gameOver = 0;

	/**
	 * this function will start the board
	 */
	function startGame(){
		
		var body = $('<tbody />'); 
		
		var rowSize = 6;
		var colSize = 7;
			
		for (var row = 0; row < rowSize; row++) {
		      
			var tr = $('<tr />').appendTo(body);
		      
			for (var col = 0; col < colSize; col++) {
		         
				var check = $('<input type="checkbox" />');
		        
				var td = $('<td />').appendTo(tr).append(check);
				
				var newId = createBox(row, col);
		        
				check.attr('id', newId);
		        
				check.data('row', row);
		        
				check.data('col', col);
		        
				check.click(function () {
					
					if(gameOver == 1){
						
						return false;
					}
		        
					var r = $(this).data('row');
		            
					var c = $(this).data('col');
		           				
					var validStep = checkMove(r, c);
					
					var currentId = $(this).attr('id');	
					
					if(validStep){
												
						if(lastMoveFromWhichPlayer == 1){
							
							$('#' + currentId).parent().addClass("blackBackground");
														
							lastMoveFromWhichPlayer = 0;
							//console.log(lastMoveFromWhichPlayer);
						}else{
													
							$('#' + currentId).parent().addClass("redBackground");
							
							lastMoveFromWhichPlayer = 1;
							//console.log(lastMoveFromWhichPlayer);
						}
						
						$('#' + currentId).attr('checked', $(this).attr('checked'));
						
						$('#' + currentId).attr('disabled', $(this).attr('disabled','disabled'));
						
						var who = (lastMoveFromWhichPlayer == 0)?'Black':'Red';
						
						$('#' + currentId).addClass(who); // means that box is taken by that specific player
						
						totalMove += 1;
						//console.log(totalMove);
						$('#errorMsg').text('Correct step.'); 
						
						// check whether it is a win step for the current player or not
						if(checkWin(r, c)){
														
							$('#errorMsg').text('Game over - ' + who + ' won the game.');
							//$('#errorMsg').animateHighlight("#dd0000", 1000);							
							
							
							return false;
							
						}
						
					}else{
						
						$('#errorMsg').text('Wrong step.'); 
						
						$('#' + currentId).attr('checked', false);
												
					}
					
		         });
		      }
		   }

		   $('#board').append($('<table id="boardTable" />').append(body));
		  
		   
		
	}
	
	/**
	 * this function will chech if last step of playe was win situation or not
	 */
	function checkWin(row, col){
		
		//var current = row + '-' + col;		
		//var below = (row + 1) + '-' + col;  
		//var left = row + '-' + (col - 1);
		//var right = row + '-' + (col + 1);
		console.log(row +'  '+col);
		// for vertical checking left to right
		if ($('#' + row + '-' + col).attr('class') != null &&
				$('#' + row + '-' + col).attr('class') == $('#' + (row + 1) + '-' + (col + 1)).attr('class') &&
				$('#' + row + '-' + col).attr('class') == $('#' + (row + 2) + '-' + (col + 2)).attr('class') &&
				$('#' + row + '-' + col).attr('class') == $('#' + (row + 3) + '-' + (col + 3)).attr('class')){
			
			gameOver = 1;
			
			return true;
		}
		
		// for vertical checking right to left
		if ($('#' + row + '-' + col).attr('class') != null &&
				$('#' + row + '-' + col).attr('class') == $('#' + (row + 1) + '-' + (col - 1)).attr('class') &&
				$('#' + row + '-' + col).attr('class') == $('#' + (row + 2) + '-' + (col - 2)).attr('class') &&
				$('#' + row + '-' + col).attr('class') == $('#' + (row + 3) + '-' + (col - 3)).attr('class')){ 
			
			gameOver = 1;
			
			return true;
		}
		
		// for vertical checking right to left
		if ($('#' + row + '-' + col).attr('class') != null &&
				$('#' + row + '-' + col).attr('class') == $('#' + (row - 1) + '-' + (col + 1)).attr('class') &&
				$('#' + row + '-' + col).attr('class') == $('#' + (row - 2) + '-' + (col + 2)).attr('class') &&
				$('#' + row + '-' + col).attr('class') == $('#' + (row - 3) + '-' + (col + 3)).attr('class')){
			
			gameOver = 1;
			
			return true;
		}
		
		// for vertical checking right to left
		if ($('#' + row + '-' + col).attr('class') != null &&
				$('#' + row + '-' + col).attr('class') == $('#' + (row - 1) + '-' + (col - 1)).attr('class') &&
				$('#' + row + '-' + col).attr('class') == $('#' + (row - 2) + '-' + (col - 2)).attr('class') &&
				$('#' + row + '-' + col).attr('class') == $('#' + (row - 3) + '-' + (col - 3)).attr('class')){
			
			gameOver = 1;
			
			return true;
		}
		
		// for same row
		if ($('#' + row + '-' + col).attr('class') != null &&
				$('#' + row + '-' + col).attr('class') == $('#' + (row) + '-' + (col - 1)).attr('class') &&
				$('#' + row + '-' + col).attr('class') == $('#' + (row) + '-' + (col - 2)).attr('class') &&
				$('#' + row + '-' + col).attr('class') == $('#' + (row) + '-' + (col - 3)).attr('class')){
			
			gameOver = 1;
			
			return true;
		}
		
		
		// for checking other horizontal and vertical wining situation
		if(row >= 0 && row <= 2 && col >= 0 && col <= 6){
			
			if ($('#' + row + '-' + col).attr('class') != null &&
					$('#' + row + '-' + col).attr('class') == $('#' + (row + 1) + '-' + col).attr('class') &&
					$('#' + row + '-' + col).attr('class') == $('#' + (row + 2) + '-' + col).attr('class') &&
					$('#' + row + '-' + col).attr('class') == $('#' + (row + 3) + '-' + col).attr('class')){
				
				gameOver = 1;
				
				return true;
			}
					
			
		}else if(row >= 0 && row <= 5 && col >= 0 && col <= 3){
			
			if ($('#' + row + '-' + col).attr('class') != null &&
					$('#' + row + '-' + col).attr('class') == $('#' + (row) + '-' + (col + 1)).attr('class') &&
					$('#' + row + '-' + col).attr('class') == $('#' + (row) + '-' + (col + 2)).attr('class') &&
					$('#' + row + '-' + col).attr('class') == $('#' + (row) + '-' + (col + 3)).attr('class')){
				
				gameOver = 1;
				
				return true;
			}
			
		}else if(row >= 0 && row <= 2 && col >= 0 && col <= 3){
			
			if ($('#' + row + '-' + col).attr('class') != null &&
					$('#' + row + '-' + col).attr('class') == $('#' + (row + 1) + '-' + (col + 1)).attr('class') &&
					$('#' + row + '-' + col).attr('class') == $('#' + (row + 2) + '-' + (col + 2)).attr('class') &&
					$('#' + row + '-' + col).attr('class') == $('#' + (row + 3) + '-' + (col + 3)).attr('class')){
				
				gameOver = 1;
				
				return true;
			}
			
		}else if(row >= 3 && row <= 5 && col >= 0 && col <= 3){
			
			if ($('#' + row + '-' + col).attr('class') != null &&
					$('#' + row + '-' + col).attr('class') == $('#' + (row - 1) + '-' + (col + 1)).attr('class') &&
					$('#' + row + '-' + col).attr('class') == $('#' + (row - 2) + '-' + (col + 2)).attr('class') &&
					$('#' + row + '-' + col).attr('class') == $('#' + (row - 3) + '-' + (col + 3)).attr('class')){
				
				gameOver = 1;
				
				return true;
			}
			
		}else if(row >= 0 && row <= 2 && col >= 0 && col <= 3){
			
			if ($('#' + row + '-' + col).attr('class') != null &&
					$('#' + row + '-' + col).attr('class') == $('#' + (row + 1) + '-' + (col + 1)).attr('class') &&
					$('#' + row + '-' + col).attr('class') == $('#' + (row + 2) + '-' + (col + 2)).attr('class') &&
					$('#' + row + '-' + col).attr('class') == $('#' + (row + 3) + '-' + (col + 3)).attr('class')){
				
				gameOver = 1;
				
				return true;
			}
			
		}else if(row >= 3 && row <= 5 && col >= 0 && col <= 3){
			
			if ($('#' + row + '-' + col).attr('class') != null &&
					$('#' + row + '-' + col).attr('class') == $('#' + (row - 1) + '-' + (col + 1)).attr('class') &&
					$('#' + row + '-' + col).attr('class') == $('#' + (row - 2) + '-' + (col + 2)).attr('class') &&
					$('#' + row + '-' + col).attr('class') == $('#' + (row - 3) + '-' + (col + 3)).attr('class')){
				
				gameOver = 1;
				
				return true;
			}
			
		}
		
		return false;
	}
	
	
	/**
	 * this function will check that is that move was correct or not
	 */
	function checkMove(row, col){
		var current = row + '-' + col;
		
		if(totalMove == 0 && row == 5){ // all box completed or current box already disabled
			
			return true;
		}
		
		if(totalMove == 42 || ($('#' + current).is('[disabled=disabled]'))){ // all box completed or current box already disabled
			
			return false;
		}

		//main logic to check whether player giving correct move
		var below = (row + 1) + '-' + col;  
		var belowLeft = (row + 1) + '-' + (col - 1);  
		var left = row + '-' + (col - 1);
		var right = row + '-' + (col + 1);
		//console.log(current);
		if(row == 5){
			
			return true;
			
		}else if(!($('#' + below).is('[disabled=disabled]')) && (row < 5) && (!($('#' + belowLeft).is('[disabled=disabled]')))){
			
			return false;
			
		}else if($('#' + below).is('[disabled=disabled]') && (row < 5)){
			
			return true;
			
		}else if($('#' + left).is('[disabled=disabled]') && (col > 0)){
			
			return true;
			
		}else if($('#' + right).is('[disabled=disabled]') && (col < 6)){
			
			return true;
			
		}else if(row == 6 && col >= 0 && col <= 6){
			
			return true;
		}else if(current == '5-6'){
			
			return true;
			
		}
		
		return false;
		
	}
	
	/**
	 * this function will create matrix box
	 */
	function createBox(row, col){
		
		return row + '-' + col;
		
	}
	

