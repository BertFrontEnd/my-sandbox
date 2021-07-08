const board = document.querySelector('#board');

const SQUARES_NUMBERS = 400;

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const color = `rgb(${r},${g},${b})`;
  return color;
};

const setColor = (element) => {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

const removeColor = (element) => {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = `0 0 2px #000000`;
};

for (let i = 0; i < SQUARES_NUMBERS; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  board.append(square);

  square.addEventListener('mouseover', () => {
    setColor(square);
  });

  square.addEventListener('mouseleave', () => {
    removeColor(square);
  });
}
