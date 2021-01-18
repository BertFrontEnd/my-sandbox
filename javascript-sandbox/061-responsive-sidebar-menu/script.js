const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
  let navigation = document.querySelector('.navigation');
  let toggle = document.querySelector('.toggle');
  navigation.classList.toggle('active');
  toggle.classList.toggle('active');
});
