# rock-paper-scissors

A web-based classic rock paper scissors game 

## Features
* You can change the theme from light to dark and vice versa
* You will play with the computer ai
* The first one to get 5 points win

The computer only picks a random index from array of choices (rock, paper, scissors):

```javascript
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min) + min);
};

const getComputerChoice = () => {
  const picks = ['rock', 'paper', 'scissors'];
  const randomIndex = getRandomInt(0, picks.length);
  
  return picks[randomIndex];
};
```

## Screenshots
![main game (light mode)](screenshots/main-game_light-mode.png "main game light mode")

![main game (dark mode)](screenshots/main-game_dark-mode.png "main game dark mode")

![winner banner (light mode)](screenshots/winner-banner_light-mode.png "winner banner light mode")

![winner banner (dark mode)](screenshots/winner-banner_dark-mode.png "winner banner dark mode")