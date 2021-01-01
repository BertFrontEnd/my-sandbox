const marker = document.querySelector('#marker');
const item = document.querySelectorAll('a');

const indicator = (e) => {
  marker.style.top = `${e.target.offsetTop}px`;
  marker.style.width = `${e.target.offsetWidth}px`;
};

item.forEach((link) => {
  link.addEventListener('mousemove', (e) => {
    indicator(e);
  });
});
