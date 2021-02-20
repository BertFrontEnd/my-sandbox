const body = document.documentElement;
const elements = document.querySelectorAll('.stats__item');

for (let elem of elements) {
  elem.addEventListener('mousemove', (e) => {
    let bounds = e.target.getBoundingClientRect();

    body.style.setProperty('--posX', e.clientX - bounds.left + 'px');
    body.style.setProperty('--posY', e.clientY - bounds.top + 'px');
  });
}
