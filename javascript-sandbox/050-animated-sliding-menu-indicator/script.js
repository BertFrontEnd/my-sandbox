const marker = document.querySelector('#marker');
const items = document.querySelectorAll('a');

items.forEach((link) => {
  link.addEventListener('mouseover', (e) => {
    indicator(e.target);
  });
  link.addEventListener('click', (e) => {
    indicator(e.target);
  });
});

const indicator = (e) => {
  marker.style.left = `${e.offsetLeft}px`;
  console.log('left: ', marker.style.left);
  marker.style.width = `${e.offsetWidth}px`;
  console.log('width: ', marker.style.width);
};
