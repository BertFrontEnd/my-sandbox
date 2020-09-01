let position = document.documentElement;
console.log(position);
position.addEventListener('mousemove', (e) => {
  position.style.setProperty('--x', e.clientX + 'px');
});
