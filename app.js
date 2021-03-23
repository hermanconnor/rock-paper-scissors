'use strict';
let playerScore = 0;
let computerScore = 0;

function game(numRounds) {
  for (let i = 0; i < numRounds; i++) {
    const playerPick = prompt('Enter your choice: Rock, Paper, or Scissors');
    console.log(playRound(playerPick, computerPlay()));
  }

  if (playerScore === computerScore) {
    console.log(
      `IT'S A DRAW! Player Score: ${playerScore} Computer Score: ${computerScore}`
    );
  } else if (playerScore > computerScore) {
    console.log(
      `YOU WIN! Score: ${playerScore} Computer Score: ${computerScore}`
    );
  } else {
    console.log(
      `YOU LOSE! Computer Score: ${computerScore} Score: ${playerScore}`
    );
  }
}
game(5);

// PLAY GAME FUNCTIONALITY
function playRound(playerSelection, computerSelection) {
  const playerInput = playerSelection.toLowerCase();
  const computerInput = computerSelection.toLowerCase();
  const winMessage = `You win! ${playerInput} beats ${computerInput}!`;
  const loseMessage = `You lose! ${computerInput} beats ${playerInput}!`;

  if (playerInput === computerInput) {
    return `It's a draw! You chose ${playerInput} and the computer chose ${computerInput}`;
  } else if (playerInput === 'rock' && computerInput === 'scissors') {
    playerScore += 1;
    return winMessage;
  } else if (playerInput === 'paper' && computerInput === 'rock') {
    playerScore += 1;
    return winMessage;
  } else if (playerInput === 'scissors' && computerInput === 'paper') {
    playerScore += 1;
    return winMessage;
  } else {
    computerScore += 1;
    return loseMessage;
  }
}

// COMPUTER PLAY
function computerPlay() {
  const options = ['Rock', 'Paper', 'Scissors'];
  const randomNumber = Math.floor(Math.random() * 3);

  const computerPick = options[randomNumber];

  return computerPick;
}
