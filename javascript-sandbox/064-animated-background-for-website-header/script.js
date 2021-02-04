const colors = ['#2196f3', '#e91e63', '#ffeb3b', '#74ff1d'];

const createSquare = () => {
  const section = document.querySelector('section');
  const square = document.createElement('span');

  let size = Math.random() * 50;

  square.style.width = 20 + size + 'px';
  square.style.height = 20 + size + 'px';

  square.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];

  square.style.top = Math.random() * innerHeight + 'px';
  square.style.left = Math.random() * innerWidth + 'px';

  section.appendChild(square);

  setTimeout(() => {
    square.remove();
  }, 5000);
};

setInterval(createSquare, 150);
