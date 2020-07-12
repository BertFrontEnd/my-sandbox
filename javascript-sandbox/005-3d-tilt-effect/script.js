const main = document.querySelector('.main');

main.addEventListener('mousemove', startRotate);
main.addEventListener('mouseout', stopRotate);

function startRotate(e) {
  const box = main.querySelector('.box');
  const halfWidth = box.offsetWidth / 2;
  const halfHeight = box.offsetHeight / 2;
  box.style.transform = `rotateX(${-(e.offsetY - halfHeight) / 10}deg) rotateY(${(e.offsetX - halfWidth) / 10}deg)`;
}

function stopRotate() {
  const box = main.querySelector('.box');
  box.style.transform = 'rotate(0)';

  const p = main.querySelector('p');
  p.style.transform = 'translateZ(80px)';
}
