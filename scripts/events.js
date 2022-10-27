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

window.addEventListener("DOMContentLoaded", e => {
  const changeThemeButton = document.querySelector("button.theme");
  changeThemeButton.addEventListener("click", setTheme);
});