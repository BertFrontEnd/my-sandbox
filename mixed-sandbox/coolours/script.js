console.log('Working...');

const cols = document.querySelectorAll('.col');

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

// Set Random Color
const setRandomColors = () => {
  cols.forEach((col) => (col.style.backgroundColor = generateRandomColor()));
};

setRandomColors();
