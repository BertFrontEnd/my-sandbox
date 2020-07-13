const btn1 = document.querySelector('input[name=btn-1]');
const btn2 = document.querySelector('input[name=btn-2]');
const btn3 = document.querySelector('input[name=btn-3]');
const btn4 = document.querySelector('input[name=btn-4]');
const btn5 = document.querySelector('input[name=btn-5]');
const btn6 = document.querySelector('input[name=btn-6]');
const btn7 = document.querySelector('input[name=btn-7]');
const btn8 = document.querySelector('input[name=btn-8]');
const btn9 = document.querySelector('input[name=btn-9]');
const btn0 = document.querySelector('input[name=btn-0]');
const addBtn = document.querySelector('input[name=add-btn]');
const subBtn = document.querySelector('input[name=sub-btn]');
const mulBtn = document.querySelector('input[name=mul-btn]');
const divBtn = document.querySelector('input[name=div-btn]');
const eqlBtn = document.querySelector('input[name=eql-btn]');

const main = document.querySelector('.main');
const screen = document.querySelector('.screen');
const refresh = document.querySelector('.refresh');
const numbs = document.querySelectorAll('.num');
const equal = document.querySelector('.eql');

/* let a = numbs.forEach((num) => console.log(num.value)); */

function addToScreen(e) {
  if (
    e.target.classList.contains('num') &&
    !e.target.classList.contains('eql')
  ) {
    screen.value = screen.value + e.target.value;
    return;
  }
}

function eraseData(e) {
  if (e.target.classList.contains('refresh')) {
    screen.value = '';
    return;
  }
}

function resultFunc() {
  screen.value = eval(screen.value);
  return;
}

main.addEventListener('click', addToScreen);

refresh.addEventListener('click', eraseData);

equal.addEventListener('click', resultFunc);
