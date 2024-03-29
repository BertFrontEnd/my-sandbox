// Task 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:
// 1 2 3 4 5 6 7 8 9 ... 49 50
// от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла.

function t1() {
  let numbers = '';

  for (let i = 1; i <= 50; i++) {
    numbers = numbers + i + ' ';
  }

  document.querySelector('.out-1').textContent = numbers;
}

document.querySelector('.b-1').addEventListener('click', t1);

// Task 2
// Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:
// 2 4 6 ... 122
// от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла.

function t2() {
  let numbers = '';

  for (let i = 2; i <= 122; i = i + 2) {
    numbers = numbers + i + ' ';
  }

  document.querySelector('.out-2').textContent = numbers;
}

document.querySelector('.b-2').addEventListener('click', t2);

// Task 3
// Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида:
// 25 24 23 22 . . 7
// от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла.

function t3() {
  let numbers = '';

  for (let i = 25; i >= 7; i--) {
    numbers = numbers + i + ' ';
  }

  document.querySelector('.out-3').textContent = numbers;
}

document.querySelector('.b-3').addEventListener('click', t3);

// Task 4
// Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида:
// 77_74_71_68_65_62_ ... _38_35_
// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла.

function t4() {
  let numbers = '';

  for (let i = 77; i >= 35; i--) {
    numbers = numbers + i + '_';
  }

  document.querySelector('.out-4').textContent = numbers;
}

document.querySelector('.b-4').addEventListener('click', t4);

// Task 5
// Кнопка b-5 запускает функцию t5. Функция должна выводить в out-5 строку вида:
// 1_*2_**3_*4_** ... 17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла.

function t5() {
  let numbers = '';

  for (let i = 1; i <= 17; i++) {
    if (i % 2 === 0) {
      numbers = numbers + i + '_**';
    } else {
      numbers = numbers + i + '_*';
    }
  }

  document.querySelector('.out-5').textContent = numbers;
}

document.querySelector('.b-5').addEventListener('click', t5);

// Task 6
// Кнопка b-6 запускает функцию t6. Функция должна выводить в out-6 строку вида:
//
// ******<br>
// ******<br>
// ******<br>
//
// Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов. Перенос строки - br. Количество строк (итераций, повторений) цикла вводит пользователь в i-6.
//

function t6() {
  const num6 = document.querySelector('.i-6').value;
  let numbers = '';

  for (let i = 1; i <= num6; i++) {
    numbers += `******</br>`;
  }

  document.querySelector('.out-6').innerHTML = numbers;
}

document.querySelector('.b-6').addEventListener('click', t6);

// Task 7
// Есть input i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт).
// По нажатию кнопки b-7 должна запускаться функция t7, которая выводит в out-7 числа от введенного пользователем до нуля включительно.
// Разделитель пробел. Если пользователь ввел 4 и нажал кнопку, мы получим:
// 4 3 2 1 0
// Задача решается с помощью цикла.

function t7() {
  const num7 = document.querySelector('.i-7').value;
  let numbers = '';

  for (let i = num7; i >= 0; i--) {
    numbers += i + ' ';
  }

  document.querySelector('.out-7').textContent = numbers;
}

document.querySelector('.b-7').addEventListener('click', t7);

// Task 8
// Есть input i-81 и i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт).
// Считаем, что второе число всегда больше первого.
// По нажатию кнопки b-8  должна запускаться функция t8, которая выводит в out-8 числа от первого введенного до второго включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
// 4 5 6 7 8
// Задача решается с помощью цикла.

function t8() {
  const num81 = document.querySelector('.i-81').value;
  const num82 = document.querySelector('.i-82').value;
  let numbers = '';

  for (let i = num81; i <= num82; i++) {
    numbers += i + ' ';
  }

  document.querySelector('.out-8').textContent = numbers;
}

document.querySelector('.b-8').addEventListener('click', t8);

// Task 9
// Есть input i-91 и i-92 куда пользователь может ввести числа.
// По нажатию кнопки b-9 должна запускаться функция t9, которая выводит в out-9 числа от меньшего введенного до большего включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
// 4 5 6 7 8
// если ввел 8 и 6, то получим
// 6 7 8
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку, а потом запускаем цикл.
// цикл - один

function t9() {
  const num91 = document.querySelector('.i-91').value;
  const num92 = document.querySelector('.i-92').value;
  let numbers = '';

  if (num91 > num92) {
    for (let i = num92; i <= num91; i++) {
      numbers += i + ' ';
    }

    document.querySelector('.out-9').textContent = numbers;
  } else {
    for (let i = num91; i <= num92; i++) {
      numbers += i + ' ';
    }

    document.querySelector('.out-9').textContent = numbers;
  }
}

document.querySelector('.b-9').addEventListener('click', t9);

// Task 10
// Кнопка b-10 запускает функцию t10. Функция должна выводить в out-10 четные годы от 1950 до 2000 включительно.
// Разделитель - пробел. Задача решается через цикл, а четность - через шаг (равный 2).

function t10() {
  let numbers = '';

  for (i = 1950; i <= 2000; i = i + 2) {
    numbers += i + ' ';
  }

  document.querySelector('.out-10').textContent = numbers;
}

document.querySelector('.b-10').addEventListener('click', t10);

// Task 11
// Кнопка b-11 запускает функцию t11.  Функция должна:
// получить все div.div-11
// перебрать их с помощью цикла. Обращение к div выглядит так elem[i]
// вывести в out-11 содержимое каждого блока. Разделитель - пробел.
// В результате должно получиться так:
// one 3 4 two

function t11() {
  const elem = document.querySelectorAll('.div-11');
  elementsContent = '';

  for (i = 0; i <= elem.length - 1; i++) {
    elementsContent = elementsContent + elem[i].innerText + ' ';
  }

  document.querySelector('.out-11').textContent = elementsContent;
}

document.querySelector('.b-11').addEventListener('click', t11);

// Task 12
// Кнопка b-12 запускает функцию t12.  Функция должна:
// получить все div.div-12
// перебрать их с помощью цикла. Обращение к div выглядит так elem[i]
// применить к каждому elem[i].style.background = ‘orange’

function t12() {
  const elem = document.querySelectorAll('.div-12');

  for (i = 0; i <= elem.length - 1; i++) {
    elem[i].style.background = 'orange';
  }
}

document.querySelector('.b-12').addEventListener('click', t12);

// Task 13
// Кнопка b-13 запускает функцию t13.  Функция должна:
// получить все input.i-13
// перебрать их с помощью цикла. Обращение к элементу выглядит так elem[i]
// применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3...

function t13() {
  const elem = document.querySelectorAll('.i-13');

  for (i = 0; i <= elem.length - 1; i++) {
    console.log(elem[i]);
    elem[i].value = `${i + 1}`;
  }
}

document.querySelector('.b-13').addEventListener('click', t13);

// Task 14
// Кнопка b-14 запускает функцию t14  Функция должна:
// получить все input.i-14
// перебрать их с помощью цикла. Обращение к элементу выглядит так elem[i]
// вывести в out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.

function t14() {
  const elem = document.querySelectorAll('.i-14');
  console.log(elem);

  for (i = 0; i <= elem.length - 1; i++) {
    if (elem[i].checked) {
      document.querySelector('.out-14').textContent = elem[i].value;
    }
  }
}

document.querySelector('.b-14').addEventListener('click', t14);

// Task 15
// Кнопка b-15 запускает функцию t15  Функция должна выводить следующую последовательность в out-15:
// 10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10
// Для вывода использовать цикл. Разделитель пробел.
// Подсказка (10 - i) + ' ' + i

function t15() {
  let numbers = '';

  for (let i = 0; i <= 10; i++) {
    numbers += 10 - i + ' ' + i + ' ';
  }

  document.querySelector('.out-15').textContent = numbers;
}

document.querySelector('.b-15').addEventListener('click', t15);
