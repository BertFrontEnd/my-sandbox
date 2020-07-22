document.addEventListener('mousemove', (e) => {
  let body = document.querySelector('body');
  let bubbles = document.createElement('span');
  let x = e.offsetX;
  let y = e.offsetY;
  bubbles.style.left = x + 'px';
  bubbles.style.top = y + 'px';
  let size = Math.random() * 100;
  bubbles.style.width = 20 + size + 'px';
  bubbles.style.height = 20 + size + 'px';

  setTimeout(() => {
    bubbles.remove();
  }, 4000);

  body.appendChild(bubbles);
});
