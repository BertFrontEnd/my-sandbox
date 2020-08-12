let toggle = document.getElementById('toggle');
console.log(toggle);
let nav = document.getElementById('nav');
console.log(nav);

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  toggle.classList.toggle('active');
});
