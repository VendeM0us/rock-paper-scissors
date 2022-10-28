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

const switchToLightTheme = r => {
  r.style.setProperty('--aero-blue', '#BDEED0');
  r.style.setProperty('--persian-pink', '#F991CC');
  r.style.setProperty('--middle-green', '#558564');
  r.style.setProperty('--french-sky-blue', '#71A9F7');
  r.style.setProperty('--eerie-black', '#252627');
  r.style.setProperty('--background', '#fcfcfc');
};

const switchToDarkTheme = r => {
  r.style.setProperty('--aero-blue', '#42112f');
  r.style.setProperty('--persian-pink', '#066e33');
  r.style.setProperty('--middle-green', '#aa7a9b');
  r.style.setProperty('--french-sky-blue', '#8e5608');
  r.style.setProperty('--eerie-black', '#dad9d8');
  r.style.setProperty('--background', '#252627');
};

const setTheme = e => {
  const root = document.querySelector(":root");

  switch(e.target.dataset.theme) {
    case 'light':
      e.target.dataset.theme = 'dark';
      switchToDarkTheme(root);
      e.target.innerText = "Switch to light mode";
      break;
    case 'dark':
      e.target.dataset.theme = 'light';
      switchToLightTheme(root);
      e.target.innerText = "Switch to dark mode";
      break;
  }
};

const setPickHtml = (player, pick) => {
  let innerHtml;

  switch (pick) {
    case 'rock':
      innerHtml = `<i class="fa-solid fa-hand-back-fist"></i>`;
      break;
    case 'paper':
      innerHtml = `<i class="fa-solid fa-hand"></i>`;
      break;
    case 'scissors':
      innerHtml = `<i class="fa-solid fa-hand-scissors"></i>`;
      break;
  }

  innerHtml = innerHtml.concat(`<h2 style="font-size: 2rem;">${player} pick ${pick}</h2>`);

  const div = document.createElement("div");
  div.setAttribute("class", "pick");
  div.innerHTML = innerHtml;

  return div;
}

const setTransitionEnd = e => {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove("pick-animation");
}

const setChoice = e => {
  const userPick = e.currentTarget.getAttribute("class");
  const computerPick = getComputerChoice();

  const userPickFrame = document.querySelector(".pick-frame.user-pick");
  userPickFrame.innerHTML = "";
  const userPickFrameInnerDiv = setPickHtml("You", userPick);
  userPickFrame.appendChild(userPickFrameInnerDiv);

  const computerPickFrame = document.querySelector(".pick-frame.computer-pick");
  computerPickFrame.innerHTML = "";
  const computerPickFrameInnerDiv = setPickHtml("Computer", computerPick);
  computerPickFrame.appendChild(computerPickFrameInnerDiv);

  [userPickFrameInnerDiv, computerPickFrameInnerDiv].forEach(div => {
    div.addEventListener("transitionend", setTransitionEnd);

    setTimeout(function() {
      div.classList.add("pick-animation");
    }, 0);
  });
};

window.addEventListener("DOMContentLoaded", e => {
  const changeThemeButton = document.querySelector("button.theme");
  changeThemeButton.addEventListener("click", setTheme);

  const choiceButtons = document.querySelectorAll(".choices__buttons button");
  choiceButtons.forEach(button => {
    button.addEventListener("click", setChoice);
  });
});