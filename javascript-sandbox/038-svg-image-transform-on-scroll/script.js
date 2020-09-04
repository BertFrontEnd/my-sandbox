let background = document.getElementById('background');

window.addEventListener('scroll', () => {
  let value = window.scrollY;
  background.style.backgroundSize = 100 + value * 2 + 'px';
});
