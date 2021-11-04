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

const buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){ buttonClicked('rock'); });

const buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){ buttonClicked('paper'); });

const buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){ buttonClicked('scissors'); });

function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');

  // Wybór ruchu gracza

  function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
      return 'rock';
    } else if (argMoveId == 2) {
      return 'paper';
    } else if (argMoveId == 3) {
      return 'scissors';
    }  
  }

  // Wyświetlanie wyniku gry
  let	playerScore =  0;
  let computerScore = 0;
  function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'paper' && argComputerMove == 'rock') {
      printMessage('You won!');
      playerScore = playerScore + 1;
    } else if (argPlayerMove == 'rock' && argComputerMove == 'scissors') {
      printMessage('You won!');
      playerScore = playerScore + 1;
    } else if (argPlayerMove == 'scissors' && argComputerMove == 'paper') {
      printMessage('You won!');
      playerScore = playerScore + 1;
    } else if (argPlayerMove == argComputerMove) {
      printMessage('Draw!');
    } else {
      printMessage('You lose :(');
      computerScore = computerScore + 1;
    }
    printMessage('I have played ' + argComputerMove + ', to yours ' + argPlayerMove);
  }

  // TO DO: tablica wyników

  console.log('wybór ruchu gracza to: ' + argButtonName);

  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);

  const computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(argButtonName, computerMove);
  printResult('Player: ' + playerScore + '  vs   Computer ' + computerScore);
}