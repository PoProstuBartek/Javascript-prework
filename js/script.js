function printMessage(msg){
	const div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function printResult(msg){
	const div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('result').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}


let argButtonName, buttonPaper, buttonRock, buttonScissors

buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){ buttonClicked('rock'); });

buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){ buttonClicked('paper'); });

buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){ buttonClicked('scissors'); });


function buttonClicked(argButtonName) {
	clearMessages();
	console.log(argButtonName + ' został kliknięty');

	/**
	 * Wybór ruchu gracza
	 */
	
	let argMoveId;

	function getMoveName(argMoveId) {
	console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
		if (argMoveId == 1) {
			return 'rock';
		} else if (argMoveId == 2) {
			return 'paper';
		} else if (argMoveId == 3) {
			return 'scissors';
		}   /** else {
			printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "rock".');
			return 'rock';
		} */
	}

	/**
	 * Wyświetlanie wyniku gry
	 */
	
	let  argComputerMove,  argPlayerMove;

	function displayResult(argPlayerMove, argComputerMove) {
	console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
	if (argPlayerMove == 'paper' && argComputerMove == 'rock') {
		printMessage('You won!');
	} else if (argPlayerMove == 'rock' && argComputerMove == 'scissors') {
		printMessage('You won!');
	} else if (argPlayerMove == 'scissors' && argComputerMove == 'paper') {
		printMessage('You won!');
	} else if (argPlayerMove == argComputerMove) {
		printMessage('Draw!');
	} else {
		printMessage('You lose :(');
	}
	printMessage('I have played ' + argComputerMove + ', to yours ' + argPlayerMove);
	}

	const playerMove = argButtonName;
	console.log('wybór ruchu gracza to: ' + playerMove);

	let randomNumber = Math.floor(Math.random() * 3 + 1);
	console.log('wylosowana liczba to: ' + randomNumber);

	let computerMove = getMoveName(randomNumber);
	console.log('ruch komputera to: ' + computerMove);
	displayResult(playerMove, computerMove);

}