// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1(e) {
  document.querySelector('.out-1').textContent = e.key;
}

document.querySelector('.i-1').addEventListener('keypress', (e) => {
  t1(e);
});

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2(e) {
  document.querySelector('.out-2').textContent = e.code;
}

document.querySelector('.i-2').addEventListener('keypress', (e) => {
  t2(e);
});

// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

function t3(e) {
  let charCodeOfKeyboard = e.charCode;
  let out3 = document.querySelector('.out-3');

  if (charCodeOfKeyboard >= 48 && charCodeOfKeyboard <= 57) {
    out3.textContent = false;
  } else {
    out3.textContent = true;
  }
}

document.querySelector('.i-3').addEventListener('keypress', (e) => {
  t3(e);
});

// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

function t4() {
  let i4 = document.querySelector('.i-4');
  let out4 = document.querySelector('.out-4');

  out4.textContent = i4.value.toLowerCase();
}

document.querySelector('.i-4').addEventListener('keypress', t4);

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5() {
  let i5 = document.querySelector('.i-5');
  let out5 = document.querySelector('.out-5');

  out5.textContent = i5.value.toUpperCase();
}

document.querySelector('.i-5').addEventListener('keypress', t5);

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */

function t6(e) {
  let out6 = document.querySelector('.out-6');

  if (e.key === e.key.toUpperCase()) {
    out6.textContent = e.key;
  }
}

document.querySelector('.i-6').addEventListener('keypress', (e) => {
  t6(e);
});

// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случайный символ из массива a7 при каждом вводе символа. */

function t7() {
  const a7 = [];
}

// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

function t8() {}

// ваше событие здесь!!!

// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */

function t9() {}

// ваше событие здесь!!!

// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */

function t10() {}

// ваше событие здесь!!!

// Task 11 ============================================
/*  Проект. 
1. Выполните в html верстку клавиш клавиатуры. Сверстайте – блок цифровых клавиш от 1 до 0. И ряд клавиш q – p. Добавьте клавишу левый shift, левый  alt, левый ctrl,  пробел, enter.
2. Добавьте на input .i-11 событие onkeypress или onkeyup или onkeydown ( по вашему выбору). Когда событие происходит ( ввод символа в input) необходимо подсветить ( добавить класс active) клавише с таким символом. Со всех остальных клавиш – удалить класс active.
3. Если вводится следующий символ – повторить удаление active и подсветить клавишу с введенным символом.
4. Ограничения проекта – тестируются только указанные клавиши в латинской раскладке. Комбинации клавиш не тестируются. Т.е. нажиматься shift+A, ctrl+shift – не будут. Все символы вводятся в нижнем регистре.
*/

function t11() {}

// ваше событие здесь!!!
