document.addEventListener('mousemove', (e) => {
  const body = document.querySelector('body');
  const bubbles = document.createElement('span');
  bubbles.style.left = e.offsetX - 75 + 'px';
  bubbles.style.top = e.offsetY - 75 + 'px';
  body.appendChild(bubbles);
});
