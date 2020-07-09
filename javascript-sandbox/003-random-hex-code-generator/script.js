let body = document.querySelector('body');
let span = document.querySelector('span');
let button = document.querySelector('button');

button.addEventListener('click', () => {
  let randomColor = '';

  let characters = '0123456789abcdef';

  for (i = 0; i < 6; i++) {
    randomColor = randomColor + characters[Math.floor(Math.random() * 16)];
  }

  span.textContent = `#${randomColor}`;
  body.style.backgroundColor = `#${randomColor}`;
});
