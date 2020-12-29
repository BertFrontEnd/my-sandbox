const generateButton = document.querySelector('#generate');
const copyButton = document.querySelector('#copy');
const myPass = document.querySelector('input');
const doneMessage = document.querySelector('.done');

const numbers = ['0123456789'];
const lettersLowerCase = ['qwertyuiopasdfghjklzxcvbnm'];
const lettersUpperCase = ['QWERTYUIOPASDFGHJKLZXCVBNM'];
const symbols = ['@#$_'];

const getPassword = () => {
  const chars = [
    ...numbers,
    ...lettersLowerCase,
    ...lettersUpperCase,
    ...symbols,
  ].join('');

  const passwordLength = 16;
  let password = '';

  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }

  myPass.value = password;
};

const copyPassword = () => {
  myPass.select();
  document.execCommand('copy');
  document.getSelection().removeAllRanges();
  doneMessage.classList.add('done-message');

  setTimeout(() => {
    doneMessage.classList.remove('done-message');
  }, 1000);
};

generateButton.addEventListener('click', getPassword);

copyButton.addEventListener('click', copyPassword);
