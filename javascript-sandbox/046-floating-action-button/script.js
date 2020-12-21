const button = document.querySelector('.action');

const actionToggle = () => {
  button.classList.toggle('active');
};

button.addEventListener('click', actionToggle);
