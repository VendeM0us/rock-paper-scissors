const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min) + min);
};

const getComputerChoice = () => {
  const picks = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = getRandomInt(0, picks.length);
  
  return picks[randomIndex];
};

const playARound = (playerSelection, computerSelection) => {
  const winningPicks = {
    Rock: 'Scissors', // key win to value
    Paper: 'Rock',
    Scissors: 'Paper'
  };

  playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

  if (winningPicks[playerSelection] === computerSelection) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (winningPicks[computerSelection] === playerSelection) {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    return "It's a tie!";
  }
};

const game = () => {
  let userScore = 0, computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const userPick = prompt(`Score:\nYou: ${userScore} Computer: ${computerScore}\nType your choice`);
    const computerPick = getComputerChoice();

    const result = playARound(userPick, computerPick);

    if (result.startsWith("You Win!")) {
      userScore++;
    } else if (result.startsWith("You Lose!")) {
      computerScore++;
    }

    alert(result);
  }

  const winner = userScore > computerScore ? "You" : "Computer";
  alert(`${winner} wins!`);
};

game();