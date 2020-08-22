let bg = document.getElementById('bg');

window.addEventListener('mousemove', (e) => {
  bg.style.width = e.clientX + 'px';
});
