const myPass = document.querySelector('input');
const copyButton = document.querySelector('#copy');
const generateButton = document.querySelector('#button');
const alertBox = document.querySelector('.alert-box');

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

  alertBox.innerHTML = `New Password Copied: <br> ${password}`;
};

const copyPassword = () => {
  let copyPassText = document.querySelector('#password');
  copyPassText.select();
  copyPassText.setSelectionRange(0, 999);
  document.execCommand('copy');
  alertBox.classList.toggle('active');
  setTimeout(() => {
    alertBox.classList.toggle('active');
  }, 2000);
};

generateButton.addEventListener('click', getPassword);

copyButton.addEventListener('click', copyPassword);
