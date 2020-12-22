const signIn = document.querySelector('.sign-in');
const signUp = document.querySelector('.sign-up');
const container = document.querySelector('.container');

const toggleForm = () => {
  container.classList.toggle('active');
};

signIn.addEventListener('click', toggleForm);

signUp.addEventListener('click', toggleForm);
