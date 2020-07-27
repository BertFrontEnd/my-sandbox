let scene = document.querySelector('.scene');

function stars() {
  let count = 50;
  let i = 0;
  while (i < count) {
    let star = document.createElement('i');
    let x = Math.floor(Math.random() * window.innerWidth);
    console.log(x);

    let duration = Math.random() * 1;
    let h = Math.random() * 100;

    star.style.left = x + 'px';
    star.style.width = 1 + 'px';
    star.style.height = 50 + h + 'px';
    star.style.animationDuration = duration + 's';

    scene.appendChild(star);
    i++;
  }
}

stars();

document.addEventListener('mousemove', (e) => {
  let rocket = document.querySelector('.rocket');
  rocket.style.left = e.offsetX + 'px';
  rocket.style.top = e.offsetY + 'px';
});

scene.addEventListener('mousedown', () => {
  let star = scene.querySelectorAll('i');
  console.log(star);
  return star.forEach(
    (el) => (el.style.animationDuration = Math.random() * 0.5 + 's'),
  );
});

scene.addEventListener('mouseup', () => {
  let star = scene.querySelectorAll('i');
  console.log(star);
  return star.forEach(
    (el) => (el.style.animationDuration = Math.random() * 1 + 's'),
  );
});
