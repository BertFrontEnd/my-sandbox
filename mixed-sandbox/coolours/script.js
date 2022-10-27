console.log('Working...');

const cols = document.querySelectorAll('.col');

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  if (e.code.toLocaleLowerCase() === 'space') {
    setRandomColors();
  }
});

// Copy Color
const copyToClickBoard = (text) => {
  return navigator.clipboard.writeText(text);
};

// Set Color to Hash
const updateColorsHash = (colors = []) => {
  document.location.hash = colors
    .map((col) => col.toString().substring(1))
    .join('-');
};

// Get Color from Hash
const getColorFromHash = () => {
  if (document.location.hash.length > 1) {
    return document.location.hash
      .substring(1)
      .split('-')
      .map((color) => `#${color}`);
  }

  return [];
};

document.addEventListener('click', (e) => {
  const type = e.target.dataset.type;

  if (type === 'lock') {
    const node =
      e.target.tagName.toLocaleLowerCase() === 'i'
        ? e.target
        : e.target.children[0];

    node.classList.toggle('fa-lock-open');
    node.classList.toggle('fa-lock');
  } else if (type === 'copy') {
    copyToClickBoard(e.target.textContent);
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
const setRandomColors = (isInitial) => {
  const colors = isInitial ? getColorFromHash() : [];

  cols.forEach((col, idx) => {
    const isLocked = col.querySelector('i').classList.contains('fa-lock');
    const text = col.querySelector('h2');
    const button = col.querySelector('button');
    /* const color = generateRandomColor(); */

    if (isLocked) {
      colors.push(text.textContent);
      console.log(colors);
      return;
    }

    const color = isInitial
      ? colors[idx]
        ? colors[idx]
        : chroma.random()
      : chroma.random();

    if (!isInitial) {
      colors.push(color);
    }

    text.textContent = color;
    col.style.backgroundColor = color;

    setTextColor(text, color);
    setTextColor(button, color);
  });

  updateColorsHash(colors);
};

setRandomColors(true);
