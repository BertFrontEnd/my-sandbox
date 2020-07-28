const scroll = document.querySelector('.curve');

window.addEventListener('scroll', () => {
  let value = 1 + window.scrollY / -500;
  console.log(value);
  scroll.style.transform = `scaleY(${value})`;
});
