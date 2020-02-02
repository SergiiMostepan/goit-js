import storage from './storage'

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkBox = document.querySelector('#theme-switch-control');
const body = document.querySelector('body');


function currentTheme() {
  const currentTheme = storage.load('Theme');
  if (currentTheme) {
    body.classList.add(currentTheme);
    if (currentTheme === Theme.DARK) {
      (checkBox.checked = true)
    } else {
      (checkBox.checked = false);
    }
  }
}


function changeTheme() {
  if (body.classList.contains(Theme.DARK)) {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
    storage.save('Theme', Theme.LIGHT)
    return;
  }
  body.classList.remove(Theme.LIGHT);
  body.classList.add(Theme.DARK);
  storage.save('Theme', Theme.DARK);
}
currentTheme()
checkBox.addEventListener('change', () => changeTheme())
