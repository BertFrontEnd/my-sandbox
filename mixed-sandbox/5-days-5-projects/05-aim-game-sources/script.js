const startButton = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');

let time = 0;
let score = 0;

const setTime = (value) => {
  timeEl.innerHTML = `00:${value}`;
};

const finishGame = () => {
  timeEl.parentNode.classList.add('hide');
  board.innerHTML = `<h1 id="message">Score: <span class="primary">${score}<span></h1>`;

  const message = document.querySelector('#message');
  message.style.cursor = 'pointer';

  message.addEventListener('click', () => {
    document.location.reload();
  });
};

const decreaseTime = () => {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    current = current < 10 ? `0${current}` : current;
    setTime(current);
  }
};

const getRandomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const color = `rgb(${r},${g},${b})`;
  return color;
};

const setColor = (element) => {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

const createRandomCircle = () => {
  const circle = document.createElement('div');
  const size = getRandomNumber(10, 60);
  const { width, height } = board.getBoundingClientRect();
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);

  circle.classList.add('circle');
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;

  setColor(circle);

  board.append(circle);
};

const startGame = () => {
  setInterval(decreaseTime, 1000);
  createRandomCircle();
  setTime(time);
};

startButton.addEventListener('click', (e) => {
  e.preventDefault();
  screens[0].classList.add('up');
});

timeList.addEventListener('click', (e) => {
  if (e.target.classList.contains('time-btn')) {
    time = parseInt(e.target.getAttribute('data-time'));
    screens[1].classList.add('up');
    startGame();
  }
});

board.addEventListener('click', (e) => {
  if (e.target.classList.contains('circle')) {
    score++;
    e.target.remove();
    createRandomCircle();
  }
});
