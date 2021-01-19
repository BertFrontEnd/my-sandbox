let box = document.querySelector('.box');

window.addEventListener('mousemove', (e) => {
  let x = e.clientX / 3;
  box.style.transform = `perspective(1000px) rotateY(${x}deg)`;
});
