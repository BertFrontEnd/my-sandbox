// Task 01
const a = 7;
const b = 9;
console.log(a * b);

// Task 02
const c = 7;
const d = 9;
console.log(a / b);

// Task 03
const e = 7;
const f = 9;
console.log(e + f);

// Task 04
const e1 = '3';
const f1 = 5;
console.log(e1 + f1);

// Task 05
const e2 = 3;
const f2 = 0;
console.log(e2 / f2);

// Task 06
const e3 = 3;
const f3 = 'Hello';
console.log(e3 + f3);

// Task 07
const e4 = 3;
const f4 = 'Hello';
console.log(e3 * f3);

// Task 08
const myInput08 = document.querySelector('.input-08');
const myButton08 = document.querySelector('.button-08');

myButton08.addEventListener('click', () => {
  let myValue = +myInput08.value;
  console.log(myValue);
});

// Task 09
const myOutput09 = document.querySelector('.input-09');

myButton08.addEventListener('click', () => {
  let myValue = myInput08.value;
  myOutput09.value = myValue;
  myInput08.value = '';
});

// Task 10
const myOutput10 = document.querySelector('.input-10');

myButton08.addEventListener('click', () => {
  let myValue = +myOutput09.value * 10;
  myOutput10.value = myValue;
});

// Task 11
const myOutput11 = document.querySelector('.input-11');

myButton08.addEventListener('click', () => {
  let myValue = +myOutput09.value + 10;
  myOutput11.value = myValue;
});

// Task 12
const myInput12_1 = document.querySelector('.input-12-1');
const myInput12_2 = document.querySelector('.input-12-2');

myButton08.addEventListener('click', () => {
  let str = `${myInput12_1.value} ${myInput12_2.value}`;
  console.log(str);
});

// Task 13
const myInput13_1 = document.querySelector('.input-13-1');
const myInput13_2 = document.querySelector('.input-13-2');
const myOutput13_3 = document.querySelector('.input-13-3');

myButton08.addEventListener('click', () => {
  let sum = Number(myInput13_1.value) + Number(myInput13_2.value);
  myOutput13_3.value = sum;
});

// Task 13
const myInput14 = document.querySelector('.input-14');

myButton08.addEventListener('click', () => {
  myInput14.value = 'Hello';
});

// Task 15
const myInput15 = document.querySelector('.input-15');

myButton08.addEventListener('click', () => {
  myInput15.style.border = '2px solid blue';
  myInput15.style.borderRadius = '2px';
});

// Task 16
const myInput16_1 = document.querySelector('.input-16-1');
const myInput16_2 = document.querySelector('.input-16-2');
const myOutput16_3 = document.querySelector('.input-16-3');

myButton08.addEventListener('click', () => {
  let sum = Number(myInput16_1.value) + Number(myInput16_2.value);
  myOutput16_3.value = sum;
});

// Task 17
const myInput17 = document.querySelector('.input-17');

myButton08.addEventListener('click', () => {
  let str = myInput17.value;
  str = parseInt(str);
  console.log(str);
});

// Task 18
const myInput18 = document.querySelector('.input-18');

myButton08.addEventListener('click', () => {
  let str = myInput17.value;
  str = parseFloat(str);
  console.log(str);
});

// Task 19
const myInput19_1 = document.querySelector('.input-19-1');
const myInput19_2 = document.querySelector('.input-19-2');
const myOutput19_3 = document.querySelector('.input-19-3');

myButton08.addEventListener('click', () => {
  let sum = parseInt(myInput19_1.value) + parseInt(myInput19_2.value);
  myOutput19_3.value = sum;
});

// Task20
const myInput20_1 = document.querySelector('.input-20-1');
const myInput20_2 = document.querySelector('.input-20-2');
const myInput20_3 = document.querySelector('.input-20-3');
const myInput20_4 = document.querySelector('.input-20-4');
const myOutput20_5 = document.querySelector('.input-20-5');

myButton08.addEventListener('click', () => {
  let str = `Уважаемый ${myInput20_1.value} ${myInput20_2.value}, Ваш возраст ${myInput20_3.value} года, по профессии Вы ${myInput20_4.value}`;
  myOutput20_5.value = str;
});
