const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');

submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    const username = usernameInput.value;
    const title = titleInput.value;
    const content = contentInput.value;

    if (username === '') {
        displayMessage('error', 'Username cannot be blank');
      } else if (title === '') {
        displayMessage('error', 'Title cannot be vacant');
    } else if (content === '') {
        displayMessage('error', 'Content cannot be empty');
      } else {
        displayMessage('success', 'Registered successfully');
      }


})

const modeSwitch = document.querySelector('#modeSwitch');
const container = document.querySelector('.light');

let mode = 'dark';

modeSwitch.addEventListener('click', function () {
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
  }
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }
});