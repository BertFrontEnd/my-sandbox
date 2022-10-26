console.log('Working...');

const cols = document.querySelectorAll('.col');

document.addEventListener('keydown', (e) => {
  if (e.code.toLocaleLowerCase() === 'space') {
    setRandomColors();
  }
});

// Generate Random Color
const generateRandomColor = () => {
  const hexCodes = '0123456789ABCDEF';
  let color = '';

  for (let i = 0; i < 6; i++) {
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
  }
  console.log(color);

  return `#${color}`;
};

// Set Color with Chroma.js
const setTextColor = (text, color) => {
  const luminance = chroma(color).luminance();
  text.style.color = luminance > 0.5 ? 'black' : 'white';
};

// Set Random Color
const setRandomColors = () => {
  cols.forEach((col) => {
    const text = col.querySelector('h2');
    const button = col.querySelector('button');
    const color = chroma.random();
    /* const color = generateRandomColor(); */

    text.textContent = color;
    col.style.backgroundColor = color;

    setTextColor(text, color);
    setTextColor(button, color);
  });
};

setRandomColors();
