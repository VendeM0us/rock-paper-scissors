const choices = {
  rock: 'scissors', // key win to value
  paper: 'rock',
  scissors: 'paper'
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min) + min);
}

const getComputerChoice = () => {
  const picks = Object.keys(choices);
  const randomIndex = getRandomInt(0, picks.length);
  
  return picks[randomIndex];
};