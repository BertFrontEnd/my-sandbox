let sideOne = document.getElementById('side-1');
window.addEventListener('scroll', () => {
  sideOne.style.left = -window.pageYOffset + 'px';
});

let sideTwo = document.getElementById('side-2');
window.addEventListener('scroll', () => {
  sideTwo.style.left = window.pageYOffset + 'px';
});
