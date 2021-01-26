// Task 1
// Создайте button.b-1 - при нажатии на него выводите alert с номером задачи. Номер задачи просто пропишите вручную.

function f1() {
  console.log('Task 01');
}

document.querySelector('.b-1').addEventListener('click', f1);

// Task 2
// Создайте input.b-2 type=button - при нажатии на него выводите alert с номером задачи. Номер задачи просто пропишите вручную.

function f2() {
  console.log('Task 02');
}

document.querySelector('.b-2').addEventListener('click', f2);

// Task 3
// Создайте p.p-3 - при нажатии на него выводите alert с номером задачи.

function f3() {
  console.log('Task 03');
}

document.querySelector('.p-3').addEventListener('click', f3);

// Task 4. Создайте input(checkbox).i-4 и button.b-4 - при нажатии на кнопку выводите true если checkbox выбран и false если не выбран. Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер задачи. В данном случае div.out-4

function f4() {
  const input04 = document.querySelector('.i-4');
  const output04 = document.querySelector('.out-4');

  if (input04.checked) {
    output04.textContent = true;
  } else {
    output04.textContent = false;
  }
}

document.querySelector('.b-4').addEventListener('click', f4);

// Task 5.
//Создайте input(checkbox).i-5 и button.b-5. Для checkbox добавьте value="task-5" - при нажатии на кнопку b-5 выводите value checkbox если checkbox выбран и false если не выбран. Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер задачи. В данном случае div.out-5

function f5() {
  const input05 = document.querySelector('.i-5');
  const output05 = document.querySelector('.out-5');

  if (input05.checked) {
    output05.textContent = `${true} ${input05.value}`;
  } else {
    output05.textContent = false;
  }
}

document.querySelector('.b-5').addEventListener('click', f5);

// Task 6.
//Создайте input(hidden).i-6 и button.b-6 - при нажатии на кнопку выводите value из input в div.out-6

function f6() {
  const input06 = document.querySelector('.i-6');
  const output06 = document.querySelector('.out-6');

  output06.textContent = input06.value;
}

document.querySelector('.b-6').addEventListener('click', f6);

// Task 7.
// Создайте input(password).i-7 и button.b-7 - при нажатии на кнопку выводите в div.out-71 value прописанное в input. В .out-72 выводите 1 если длина пароля больше или равна 6 или 0 если меньше. Для подсчета количества символов в строке используйте length.

function f7() {
  const input07 = document.querySelector('.i-7');
  const output071 = document.querySelector('.out-71');
  const output072 = document.querySelector('.out-72');

  output071.textContent = input07.value;

  if (output071.textContent.length >= 6) {
    output072.textContent = '>6';
  } else {
    output072.textContent = '<6';
  }
}

document.querySelector('.b-7').addEventListener('click', f7);

// Task 8.
// Создайте div.out-8 и кнопку .b-8. При нажатии кнопки создавайте внутри div.out-8 элемент input.i-81 и кнопку .b-81 (innerHTML). Добавьте на созданную кнопку событие клик и запуск функции f81. Функция должна в .out-81 выводить value созданного input.i-81.

function f8() {
  const output08 = document.querySelector('.out-8');

  output08.innerHTML = `
        <input type="text" class="i-81" value="Task-8.1" />
        <button class="button-primary button-secondary b-81">Task-8.1</button>
        <span class="out-81"></span>`;

  document.querySelector('.b-81').addEventListener('click', f81);
}

function f81() {
  const input081 = document.querySelector('.i-81');
  const output081 = document.querySelector('.out-81');

  output081.innerHTML = input081.value;
}

document.querySelector('.b-8').addEventListener('click', f8);

// Task 9
// Создайте один input(radio).r-9  и button.b-9 - при нажатии на button если radio.r-9 выбран (активен, checked) выводите в .out-9 - value прописанное в r-9, либо 0 если не активен.

function f9() {
  const input09 = document.querySelector('.r-9');
  const output09 = document.querySelector('.out-9');

  if (input09.checked) {
    output09.textContent = `${true} ${input09.value}`;
  } else {
    output09.textContent = false;
  }
}

document.querySelector('.b-9').addEventListener('click', f9);

// Task 10
// Создайте input(color).i-10 и button.b-10 - при нажатии на кнопку окрашивайте div.out-10 выбранным цветом (имеется ввиду .style.background = ).

function f10() {
  const input10 = document.querySelector('.i-10');
  const output10 = document.querySelector('.out-10');

  output10.style.background = input10.value;
}

document.querySelector('.b-10').addEventListener('click', f10);

// Task 11
// Создайте input(color).i-111 и input(color).i-112 - два элемента и button.b-11 - при нажатии на кнопку присвойте цвет из первого input в value второго.

function f11() {
  const input111 = document.querySelector('.i-111');
  const input112 = document.querySelector('.i-112');

  input112.value = input111.value;
}

document.querySelector('.b-11').addEventListener('click', f11);

// Task 12
// Создайте input(date).i-12 и button.b-12 - при нажатии на кнопку выводите в  out-12 выбранную в input дату.

function f12() {
  const input12 = document.querySelector('.i-12');
  const output12 = document.querySelector('.out-12');

  output12.textContent = input12.value;
}

document.querySelector('.b-12').addEventListener('click', f12);

// Task 13
//  Создайте input (range) .i-13. При изменении положения ползунка i-13 выводите значение в out-13. Для события используйте oninput.

function f13() {
  const input13 = document.querySelector('.i-13');
  const output13 = document.querySelector('.out-13');

  output13.textContent = input13.value;
}

document.querySelector('.i-13').addEventListener('input', f13);

// Task 14
// Создайте text-area.t-14 и button.b-14 - при нажатии на кнопку выводите на в out-14 текст введенный в t-14.

function f14() {
  const text14 = document.querySelector('.t-14');
  const output14 = document.querySelector('.out-14');

  output14.textContent = text14.value;
}

document.querySelector('.b-14').addEventListener('click', f14);

// Task 15
// Создайте text-area.t-15, input.i-15 и button.b-15 - при нажатии на кнопку выводите текст из input.i-15 в textarea.t-15 и на страницу в out-15.

function f15() {
  const input15 = document.querySelector('.i-15');
  const text15 = document.querySelector('.t-15');
  const output15 = document.querySelector('.out-15');

  text15.value = input15.value;
  output15.textContent = input15.value;
}

document.querySelector('.b-15').addEventListener('click', f15);

// Task 16
// Создайте select.s-16 и button.b-16 - при нажатии на кнопку выводите в out-16 value выбранного option из s-16.

function f16() {
  const select16 = document.querySelector('.s-16');
  const output16 = document.querySelector('.out-16');

  output16.textContent = select16.value;
}

document.querySelector('.b-16').addEventListener('click', f16);

// Task 17
// Создайте select.s-17. Добавьте ему событие onchange, при наступлении которого запускается функция f17. Функция должна выводить в out-17 value выбранного в select option.

function f17() {
  const select17 = document.querySelector('.s-17');
  const output17 = document.querySelector('.out-17');

  output17.textContent = select17.value;
}

document.querySelector('.s-17').addEventListener('change', f17);

// Task 18
// Создайте select.s-18 и input.i-18. Добавьте на select событие onchange, при наступлении которого запускается функция f18. Функция должна выводить в input i-18 value выбранного в select option.

function f18() {
  const select18 = document.querySelector('.s-18');
  const input18 = document.querySelector('.i-18');

  input18.value = select18.value;
}

document.querySelector('.s-18').addEventListener('change', f18);

// Task 19
// Создайте форму. В ней input(text).i-191 и input(password).i-192 - и кнопку button.b-19. По нажатию кнопки выводите значение text и password в out-19 через пробел. Обратите внимание на хитрость. Мы, кнопку сейчас повесили за пределами формы. Чуть позже мы рассмотрим почему это делали.

function f19() {
  const input191 = document.querySelector('.i-191');
  const input192 = document.querySelector('.i-192');
  const output19 = document.querySelector('.out-19');

  output19.textContent = `${input191.value} ${input192.value}`;
}

document.querySelector('.b-19').addEventListener('click', f19);

// Task 20
// Создайте форму .f-20. В ней input(text) и input(password) - и кнопку button.b-20. По нажатию кнопки выводите значение из input text и password в out-20 через пробел. Используйте form.elements (читать)

// очень внимательно изучите верстку!!!
// обратите внимание, что мы не используем class, а присвоили name!!!

function f20(e) {
  e.preventDefault(); // чтобы форма не перезагружала страницу!!!!
  let form = document.querySelector('.f-20');
  console.log(form.elements);
  console.log(form.elements['username'].value); // так можно обратиться к элементу внутри формы

  const output20 = document.querySelector('.out-20');
  output20.textContent = `${form.elements['username'].value} ${form.elements['password'].value}`;
}

document.querySelector('.b-20').addEventListener('click', f20);
