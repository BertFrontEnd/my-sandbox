// Task 1
// При нажатии кнопки b-1 срабатывает функция f1. Функция должна прочитать содержимое i-1 и сравнить его с числом 4 (сравнение ==). Результат сравнения - true или false выведите в out-1.

function f1() {
  const myInput1 = +document.querySelector('.i-1').value;
  const myOutput = document.querySelector('.out-1');

  if (myInput1 == 4) {
    myOutput.innerHTML = true;
  }
}

document.querySelector('.b-1').addEventListener('click', f1);

// Task 2
// Даны две переменные a21 и a22. При нажатии кнопки b-2, запускается функция f2. Функция должна сравнить переменные с помощью if else и вывести в out-2 число, которое больше. Вариант равенства переменных не рассматриваем.

let a21 = 45;
let a22 = 32;

function f2() {
  if (a21 > a22) {
    document.querySelector('.out-2').innerHTML = a21;
  } else {
    document.querySelector('.out-2').innerHTML = a22;
  }
}

document.querySelector('.b-2').addEventListener('click', f2);

// Task 3
// Даны 2 input - i-31 и i-32, оба - input[type=number]. При нажатии кнопки b-3 срабатывает функция f3. Функция должна вычитать содержимое i-31 и i-32 в переменные и сравнить их, вывести в  out-3 большее число.
//     Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111.

function f3() {
  const myInput31 = +document.querySelector('.i-31').value;
  const myInput32 = +document.querySelector('.i-32').value;
  const myOutput = document.querySelector('.out-3');

  if (myInput31 > myInput32) {
    myOutput.innerHTML = myInput31;
  } else {
    myOutput.innerHTML = myInput32;
  }
}

document.querySelector('.b-3').addEventListener('click', f3);

// Task 4. Создайте на странице input[type=number] с классом i-4, куда пользователь может ввести год своего рождения. Есть кнопка b-4 которая запускает функцию f4. Функция должна вывести в  .out-4 число 1 если пользователю больше или равно 18 лет, и 0 если меньше.

function f4() {
  const myInput4 = +document.querySelector('.i-4').value;
  const myOutput = document.querySelector('.out-4');

  if (myInput4 >= 18) {
    myOutput.innerHTML = '1';
  } else {
    myOutput.innerHTML = '0';
  }
}

document.querySelector('.b-4').addEventListener('click', f4);

// Task 5. Создайте на странице input[type=number] с классом i-5, куда пользователь может ввести число. Есть кнопка b-5 которая запускает функцию f5. Функция должна вывести в  .out-5 символ m если число меньше нуля, 0 если число равно нулю и 1 если больше.

function f5() {
  const myInput5 = +document.querySelector('.i-5').value;
  const myOutput = document.querySelector('.out-5');

  if (myInput5 < 0) {
    myOutput.innerHTML = 'M';
  } else if (myInput5 == 0) {
    myOutput.innerHTML = '0';
  } else {
    myOutput.innerHTML = '1';
  }
}

document.querySelector('.b-5').addEventListener('click', f5);

// Task 6. Создайте на странице input[type=number] с классом i-6, куда пользователь может ввести число. Есть кнопка b-6 которая запускает функцию f6. Функция должна вывести в  .out-6  слово even если число четное и odd если нечетное. Для проверки четности используется целочисленный остаток от деления на 2 (оператор %). Если остаток равен нулю  - четное, нет - нечетное.

function f6() {
  const myInput6 = +document.querySelector('.i-6').value;
  const myOutput = document.querySelector('.out-6');

  if (myInput6 % 2 === 0) {
    myOutput.innerHTML = 'even';
  } else {
    myOutput.innerHTML = 'odd';
  }
}

document.querySelector('.b-6').addEventListener('click', f6);

// Task 7.
// Даны 2 input - i-71 и i-72, оба - input[type=number]. При нажатии кнопки b-7 срабатывает функция f7. Функция должна число из i-71 возвести в степень i-72, вывести результат в  out-7. Для возведения в степень можно использовать **, или Math.pow.

function f7() {
  const myInput71 = +document.querySelector('.i-71').value;
  const myInput72 = +document.querySelector('.i-72').value;
  const myOutput = document.querySelector('.out-7');

  let pow = myInput71 ** myInput72;

  myOutput.innerHTML = pow;
}

document.querySelector('.b-7').addEventListener('click', f7);

// Task 8.
// Дан select s-8, который содержит 3 значения: 1, 2, 3. Дана кнопка b-8. При ее  нажатии срабатывает функция f8. Функция должна получить выбранное в select число, потом с помощью switch case сравнить его поочередно с ‘1’, ‘2’, ‘3’. И если число выбрано - 1, то вывести в out-8 строку one, если 2 - two, если 3 - three.

function f8() {
  const myInput8 = +document.querySelector('.s-8').value;
  const myOutput = document.querySelector('.out-8');

  switch (myInput8) {
    case 1:
      myOutput.innerHTML = 'One';
      break;
    case 2:
      myOutput.innerHTML = 'Two';
      break;
    case 3:
      myOutput.innerHTML = 'Three';
      break;
  }
}

document.querySelector('.b-8').addEventListener('click', f8);

// Task 9
//     Создайте на странице input[type=number] с классом i-9, куда пользователь может ввести номер квартиры. Есть кнопка b-9 которая запускает функцию f9. Функция должна вывести в  .out-9 номер подъезда, в котором находится квартира.
//      если от 1 до 32 - то вывести цифру 1
//     если от 33 до 43 - то вывести 2
//     если от 44 до 64 - то 3.
//     В противном случае, вывести 0.

function f9() {
  const myInput9 = +document.querySelector('.i-9').value;
  const myOutput = document.querySelector('.out-9');

  switch (true) {
    case myInput9 >= 1 && myInput9 < 32:
      myOutput.innerHTML = 1;
      break;
    case myInput9 >= 33 && myInput9 < 43:
      myOutput.innerHTML = 2;
      break;
    case myInput9 >= 44 && myInput9 < 64:
      myOutput.innerHTML = 3;
      break;
    default:
      myOutput.innerHTML = 0;
  }
}

document.querySelector('.b-9').addEventListener('click', f9);

// Task 10
// Дан select s-100. По нажатию кнопки, выведите value выбранного option в out-10.

function f10() {
  const index = document.querySelector('.s-100').options.selectedIndex;
  const myInput10 = document.querySelector('.s-100').options[index].text;
  const myOutput = document.querySelector('.out-10');

  myOutput.innerHTML = myInput10;

  /*   switch (myInput8) {
    case 6:
      myOutput.innerHTML = 'Six';
      break;
    case 7:
      myOutput.innerHTML = 'Seven';
      break;
    case 11:
      myOutput.innerHTML = 'Eleven';
      break;
    case 9:
      myOutput.innerHTML = 'Nine';
      break;
  } */
}

document.querySelector('.b-10').addEventListener('click', f10);

// Task 11
// Дан select s-110. По изменению состояния select (событие onchange) выведите value выбранного option в out-11.

function f11() {
  let index = document.querySelector('.s-110').options.selectedIndex;
  const myInput11 = document.querySelector('.s-110').options[index].text;
  const myOutput = document.querySelector('.out-11');

  myOutput.innerHTML = myInput11;
}

document.querySelector('.s-110').addEventListener('change', f11);

// Task 12
// Дан input i-120. По нажатию кнопки получите значение из input  в переменную, а затем выведите в out-12 typeof полученной переменной. Typeof позволяет определить тип данных. Обратите внимание, данная задача уже решена, нужно убрать комментарии и изучить работу.

let i120 = document.querySelector('.i-120');

function f12() {
  let v = i120.value;
  document.querySelector('.out-12').innerHTML = typeof v;
}

document.querySelector('.b-12').addEventListener('click', f12);

// Task 13
// Дан input i-130. В отличие от предыдущего задания - input type number. По нажатию кнопки получите значение из input  в переменную, а затем выведите в out-13 typeof полученной переменной. Typeof позволяет определить тип данных. Если вы правильно все сделали - то удивительно, но тип данных будет string! Подумайте почему так?

function f13() {
  const myInput130 = document.querySelector('.i-130').value;
  const myOutput = document.querySelector('.out-13');

  myOutput.innerHTML = typeof myInput130;
}

document.querySelector('.b-13').addEventListener('click', f13);

// Task 14
// Дан input i-141 и input-142, type=number.  Дан select s-143, который содержит две операции - +, -, *, / . Дана кнопка b-14, при нажатии на которую срабатывает функция f14. Функция выводит в out-14 результат операций выбранной в 3-м select к числам введенным в первом и втором input. Например выбрано 1 13 +, нужно вывести результат операции 1+13 т.е.  14.

function f14() {
  const myInput141 = +document.querySelector('.i-141').value;
  const myInput142 = +document.querySelector('.i-142').value;
  const myInput143 = document.querySelector('.s-143').value;
  const myOutput = document.querySelector('.out-14');

  switch (myInput143) {
    case '+':
      myOutput.innerHTML = myInput141 + myInput142;
      break;
    case '-':
      myOutput.innerHTML = myInput141 - myInput142;
      break;
    case '*':
      myOutput.innerHTML = myInput141 * myInput142;
      break;
    case '/':
      myOutput.innerHTML = myInput141 / myInput142;
      break;
  }
}

document.querySelector('.b-14').addEventListener('click', f14);

// Task     15
// Дан select s-151 и s-152, каждый из которых содержит 1 и 0.  Дан select s-153, который содержит две операции - && и || . Дана кнопка b-15, при нажатии на которую срабатывает функция f15. Функция выводит в out-15 результат логических операций выбранных в 3 select к числам выбранным в первом и втором select. Например выбрано 1 1 &&, нужно вывести результат операции 1&&1 т.е. 1 или 0.

function f15() {
  const myInput151 = document.querySelector('.s-151').value;
  const myInput152 = document.querySelector('.s-152').value;
  const myInput153 = document.querySelector('.s-153').value;
  const myOutput = document.querySelector('.out-15');

  myOutput.innerHTML = `${myInput151}${myInput153}${myInput152}`;
}

document.querySelector('.b-15').addEventListener('click', f15);
