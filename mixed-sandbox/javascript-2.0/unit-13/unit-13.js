// Task 1
// При нажатии b-1 выполняете функцию f1. Функция должна вывести в out-1 значение сохраненное под ключом two из массива a1. Возвратите это значение.
// Первая задача дана в качестве примера.

function f1() {
  let a1 = {
    one: 15,
    two: 16,
    five: 20,
  };
  document.querySelector('.out-1').innerHTML = a1.two;
  return a1.two;
}

document.querySelector('.b-1').onclick = f1;

// Task 2
// При нажатии b-2 выполняете функцию f2. Функция должна вывести в out-2 значение hi из массива a2. Возвратите это значение.
// Вывод, как и в предыдущем задании пишем "руками"

function f2() {
  let a2 = {
    one: 'hello',
    two: 'mahai',
    five: 'hi',
  };

  return a2.two;
}

document.querySelector('.b-2').onclick = () => {
  document.querySelector('.out-2').innerHTML = f2();
};

// Task 3
// При нажатии b-3 выполняете функцию f3. Функция должна вывести в out-3 значение hi из массива a3. Возвратите это значение. Вывод - через пробел.
// Вывод, как и в предыдущем задании пишем "руками"

function f3() {
  let a3 = {
    one: 'hello',
    two: 'mahai',
    five: 'hi',
    test: 21,
    odd: 'hi',
    mix: 'mix',
  };

  /* return `${a3.five} ${a3.odd}`; */
  return a3.five + ' ' + a3.odd;
}

document.querySelector('.b-3').onclick = () => {
  document.querySelector('.out-3').innerHTML = f3();
};

// Task 4
// Давайте напишем функцию f4, которая будет выводить массив a4 в out-4 при нажатии кнопки b-4. Формат вывода - ключ пробел значение перенос строки +' <br>'. Функция должна возвращать строку в указанном формате вывода.
// Обратите внимание на пробел перед br!!!!!!!!!

let a4 = {
  one: 'hello',
  two: 'mahai',
  five: 'hi',
  test: 21,
  odd: 'hi',
  mix: 'mix',
};

function f4() {
  return (
    a4.one +
    ' ' +
    '<br>' +
    a4.two +
    ' ' +
    '<br>' +
    a4.five +
    ' ' +
    '<br>' +
    a4.test +
    ' ' +
    '<br>' +
    a4.odd +
    ' ' +
    '<br>' +
    a4.mix +
    ' ' +
    '<br>'
  );
}

document.querySelector('.b-4').onclick = () => {
  document.querySelector('.out-4').innerHTML = f4();
};

// Task 5
// Функция f4 жестко привязана к массиву a4. Это не удобно. Давайте напишем функцию f5, которая принимает массив как параметр и выводит его в формате указанном в функции в указанный блок (как второй параметр).

function f5(arr, block) {
  let out = '';

  for (let key in arr) {
    out = document.querySelector(block);
    out.innerHTML += `${key}: ${arr[key]}, <br>`;
  }
}
document.querySelector('.b-5').onclick = () => {
  let a5 = {
    one: 1,
    two: 2,
  };

  f5(a5, '.out-5');
};

// Task 6
// Добавьте input .i-61 и i-62. При нажатии b-6 выполняете функцию f6. Функция должна получать из i-61 ключ, а из i-62 значение и добавлять его в массив a6. После этого, с помощью функции f5 выводите массив a6 в out-6.

let a6 = {
  b: 17,
  e: 22,
};

function f6() {
  let out6 = document.querySelector('.out-6');
  out6.innerHTML = '';

  let i61 = document.querySelector('.i-61').value;
  let i62 = document.querySelector('.i-62').value;

  a6.i61 = i61;
  a6.i62 = i62;

  for (let key in a6) {
    out6.innerHTML += `${key}: ${a6[key]}, <br> `;
  }
}

document.querySelector('.b-6').onclick = f6;

// Task 7
// Добавьте input .i-7. При нажатии b-7 выполняете функцию f7. Функция должна получать из i-7 ключ. Если такой ключ есть в a7 то выводить 1 в out-7, если нет - 0.

let a7 = {
  b: 17,
  e: 22,
};

function f7() {
  let i7 = document.querySelector('.i-7').value;
  let out7 = document.querySelector('.out-7');

  let arr = Object.keys(a7);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === i7) {
      out7.innerHTML = 1;
      return;
    } else {
      out7.innerHTML = 0;
    }
  }
}

document.querySelector('.b-7').onclick = f7;

// Task 8
// Добавьте input .i-8. При нажатии b-8 выполняете функцию f8. Функция должна выводить значение в out-8, если ключ введенный в i-8 есть в массиве, если нет - 0.

let a8 = {
  b: 17,
  e: 22,
};

function f8() {
  let i8 = document.querySelector('.i-8').value;
  let out8 = document.querySelector('.out-8');

  let arr = Object.keys(a8);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === i8) {
      out8.innerHTML = i8;
      return;
    } else {
      out8.innerHTML = 0;
    }
  }
}

document.querySelector('.b-8').onclick = f8;

// Task 9
// Добавьте input .i-9. При нажатии b-9 выполняете функцию f9. Функция должна вывести в out-9 все ключи массива a9, которые содержат значение, равное значению в input.i-9. Вывод через пробел. Если значений - нет - то выводить пустую строку.

let a9 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 54,
};

function f9() {
  let i9 = document.querySelector('.i-9').value;
  let out9 = document.querySelector('.out-9');
  let arr = Object.keys(a9);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == i9) {
      out9.innerHTML += i9 + ' ';
    } else {
      out9.innerHTML += '';
    }
  }
}

document.querySelector('.b-9').onclick = f9;

// Task 10
// Давайте напишем полезную функцию f10, которая проверяет есть ли значение в ассоциативном массиве. Функция должна возвращать true если есть, и false если нет. Массив и значение передавать функции в качестве параметров.

function f10(arr, val) {
  let myArr = Object.keys(arr);
  console.log(myArr);

  for (let i = 0; i < myArr.length; i++) {
    if (arr[myArr[i]] === val) {
      return true;
    } else {
      return false;
    }
  }
}

document.querySelector('.b-10').onclick = () => {
  let a10 = {
    k: 22,
    d: 54,
    m: 22,
  };
  document.querySelector('.out-10').innerHTML = f10(a10, 22);
};

// Task 11
// При нажатии b-11 выполняете функцию f11. Функция должна получить ключ из i-11 и удалить запись из массива a11 с таким ключом. После этого вывести массив в out-11. Для вывода используйте функцию f5.

let a11 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 54,
};

function f11() {
  let out11 = document.querySelector('.out-11');
  out11.innerHTML = '';
  let i11 = document.querySelector('.i-11').value;

  for (let key in a11) {
    if (key === i11) {
      delete a11[key];
    } else {
      out11.innerHTML += `${key}: ${a11[key]}, <br>`;
    }
  }
}

document.querySelector('.b-11').onclick = f11;

// Task 12
//  При нажатии b-12 выполняете функцию f12. Функция должна получить значение из i-12 и удалить запись из массива a12 с таким значением. После этого вывести массив в out-12. Для вывода используйте функцию f5.

let a12 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 17,
};

function f12() {
  let out12 = document.querySelector('.out-12');
  out12.innerHTML = '';
  let i12 = +document.querySelector('.i-12').value;

  for (let key in a12) {
    if (a12[key] === i12) {
      delete a12[key];
    } else {
      out12.innerHTML += `${key}: ${a12[key]}, <br>`;
    }
  }
}

document.querySelector('.b-12').onclick = f12;

// Task 13
// При нажатии b-13 выполняете функцию f13. Функция должна в out-13 выводить сумму значений массива a13 (только числа).

let a13 = {
  prim: 'hello',
  one: 4,
  testt: 'vodoley',
  ivan: 6,
};

function f13() {
  let out13 = document.querySelector('.out-13');
  let sum = 0;

  for (let key in a13) {
    if (typeof a13[key] === 'number') {
      sum += a13[key];
    }
  }

  out13.innerHTML = sum;
}

document.querySelector('.b-13').onclick = f13;

// Task 14
// При нажатии b-14 выполняете функцию f14. Функция должна в out-14 выводить нулевые (по индексу)  элементы вложенных массивов в a14. Вывод через пробел.
// Ожидаемый вывод - 1 3 6 9

let a14 = {
  prim: [1, 2, 23],
  one: [3, 4, 5],
  testt: [6, 7, 8],
  ivan: [9, 10],
};

function f14() {
  let out14 = document.querySelector('.out-14');

  for (let key in a14) {
    out14.innerHTML += `${a14[key][0]} `;
  }
}

document.querySelector('.b-14').onclick = f14;

// Task 15
// При нажатии b-15 выполняете функцию f15. Функция должна в out-15 выводить элементы вложенных массивов в a15. Вывод через пробел.

// т.е ожидаем 1 2 23 3 5 6 7 8 9 10

let a15 = {
  prim: [1, 2, 23],
  one: [3, 5],
  testt: [6, 7, 8],
  ivan: [9, 10],
};

function f15() {
  let out15 = document.querySelector('.out-15');
  let out = '';

  for (let key in a15) {
    for (let i = 0; i < a15[key].length; i++) {
      out += `${a15[key][i]} `;
    }
  }

  out15.innerHTML = out;
}

document.querySelector('.b-15').onclick = f15;

// Task 16
// При нажатии b-16 выполняете функцию f16. Функция должна в out-16 выводить элементы name вложенных массивов в a16. Вывод через пробел.

let a16 = {
  iis8sj: {
    name: 'Ivan',
    age: 27,
  },
  iiss7j: {
    name: 'Petr',
    age: 26,
  },
  s3s8sj: {
    name: 'Serg',
    age: 47,
  },
};

function f16() {
  let out16 = document.querySelector('.out-16');

  for (let key in a16) {
    out16.innerHTML += `${a16[key].name} `;
  }
}

document.querySelector('.b-16').onclick = f16;

// Task 17
// При нажатии b-17 выполняете функцию f17. Функция должна в out-17 выводить элементы name вложенных массивов в a17 для который age > 30. Вывод через пробел.

let a17 = {
  iis8sj: {
    name: 'Ivan',
    age: 27,
  },
  iiss7j: {
    name: 'Petr',
    age: 26,
  },
  s3s8sj: {
    name: 'Serg',
    age: 47,
  },
};

function f17() {
  let out17 = document.querySelector('.out-17');

  for (let key in a16) {
    if (a17[key].age > 30) out17.innerHTML += `${a17[key].name} `;
  }
}

document.querySelector('.b-17').onclick = f17;

// Task 18
// При нажатии b-18 выполняете функцию f18. Функция должна в out-18 вывести станции метро из массива a18 той ветки, которую пользователь ввел в i-18. Вывод станций - через пробел. Если ветка не найдена выводите пустую строку.

let a18 = {
  red: ['Akademmistechko', 'Nyvky', 'Universytet', 'Lisova'],
  blue: ['Minska', 'Obolon', 'Pochaina', 'Holosiivska'],
  green: ['Syrets', 'Zoloti Vorota', 'Klovska', 'Vidubichi'],
};

function f18() {
  let out18 = document.querySelector('.out-18');
  let i18 = document.querySelector('.i-18').value;
  let out = '';

  for (let key in a18) {
    console.log(a18[key], '&', i18);
    for (let i = 0; i < a18[key].length; i++) {
      if (key == i18) out += `${a18[key][i]} `;
      if (key != i18) out += `Not found`;
    }
  }

  out18.innerHTML = out;
}

document.querySelector('.b-18').onclick = f18;

// Task 19
// При нажатии b-19 выполняете функцию f19. Функция должна в out-19 вывести цвет ветки станции которую пользователь ввел в i-19. Пользователь может вводить текст как с большой, так и с маленькой буквы. Если ветка не найдена - выводите пустую строку.
// Пользователь ввел Lisova - вывод red, ввел Obolon - вывод blue.

let a19 = {
  red: ['Akademmistechko', 'Nyvky', 'Universytet', 'Lisova'],
  blue: ['Minska', 'Obolon', 'Pochaina', 'Holosiivska'],
  green: ['Syrets', 'Zoloti Vorota', 'Klovska', 'Vidubichi'],
};

function f19() {}

document.querySelector('.b-19').onclick = f19;

// Task 20
// При нажатии b-20 выполняете функцию f20. Функция должна в out-20 вывести название станции которые содержат переход на другую ветку. Такие станции маркируются 2. Вывод через пробел

let a20 = {
  red: [
    ['Akademmistechko', 1],
    ['Nyvky', 0],
    ['Universytet', 3],
    ['Lisova', 1],
  ],
  blue: [
    ['Minska', 1],
    ['Obolon', 0],
    ['Pochaina', 2],
    ['Holosiivska', 0],
  ],
  green: [
    ['Syrets', 1],
    ['Zoloti Vorota', 2],
    ['Klovska', 0],
    ['Vidubichi', 1],
  ],
};

function f20() {}

document.querySelector('.b-20').onclick = f20;
