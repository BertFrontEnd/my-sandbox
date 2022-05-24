// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

function t1() {
  const out1 = (document.querySelector('.out-1').textContent = 'touch');
}

document.querySelector('.div-1').addEventListener('touchstart', t1);

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */

let counter = 0;

function t2() {
  counter++;
  const out2 = (document.querySelector('.out-2').textContent = counter);
}

document.querySelector('.div-2').addEventListener('touchstart', t2);

// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */

function t3(e) {
  const out3 = document.querySelector('.out-3');
  const div31 = document.querySelector('.div-3_1');
  const div32 = document.querySelector('.div-3_2');

  if (e.target === div31) {
    out3.textContent = '1';
  }
  if (e.target === div32) {
    out3.textContent = '2';
  }
}

document.addEventListener('touchstart', (e) => {
  t3(e);
});

// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */

let countNumber = 0;

const addTouchStart = () => {
  countNumber++;
  document.querySelector(
    '.out-4',
  ).textContent = `touch: ${countNumber}. Working`;
};

function t4() {
  const out4 = document.querySelector('.out-4');
  out4.textContent = `touch: ${countNumber}. Working`;

  document
    .querySelector('.div-4')
    .addEventListener('touchstart', addTouchStart);
}

document.querySelector('.b-4').addEventListener('touchstart', t4);

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

function t5() {
  const div4 = document.querySelector('.div-4');
  const out4 = document.querySelector('.out-4');
  div4.removeEventListener('touchstart', addTouchStart);
  out4.textContent = `touch: ${countNumber}. Stopped`;
}

document.querySelector('.b-5').addEventListener('touchstart', t5);

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

let countNumberButton = 0;

function t6() {
  countNumberButton++;
  document.querySelector(
    '.out-6',
  ).textContent = `touchend: ${countNumberButton}`;
}

document.querySelector('.b-4').addEventListener('touchend', t6);

// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

function t7() {
  document.querySelector('.div-7').style.backgroundColor = 'red';
}

document.querySelector('.div-7').addEventListener('touchstart', t7);

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случайным цветом из массива a8=[red, green, blue, orange, pink, yellow] */

function t8() {
  a8 = ['red', 'green', 'blue', 'orange', 'pink', 'yellow'];

  function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  document.querySelector('.div-8').style.backgroundColor =
    a8[randomInteger(0, a8.length - 1)];
}

document.querySelector('.div-8').addEventListener('touchstart', t8);

// Task 9 ============================================
/* Дан блок div-9. Добавьте событие touch. Выводите количество одновременных касаний в out-9. */

function t9(e) {
  document.querySelector('.out-9').textContent = e.touches.length;
}

document.querySelector('.div-9').addEventListener('touchstart', (e) => {
  t9(e);
});

// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */

let thisWidth = document.querySelector('.div-10').getBoundingClientRect().width;
function t10() {
  console.log(thisWidth);
  this.style.width = thisWidth + 'px';
  thisWidth++;
}

document.querySelector('.div-10').addEventListener('touchstart', t10);

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */

function t11(e) {
  const radX = e.changedTouches[0].radiusX;
  const radY = e.changedTouches[0].radiusY;

  document.querySelector(
    '.out-11',
  ).textContent = `radX: ${radX}, radY: ${radY}`;
}

document.querySelector('.div-11').addEventListener('touchstart', (e) => {
  t11(e);
});

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/

const images = document.querySelectorAll('.img-12-min');
const maxImage = document.querySelector('.img-12-max');
let count = 0; // переменная, которая указывает на номер активного изображения в images

const next = document.querySelector('.next');
next.addEventListener('click', nextFunction);
next.addEventListener('touchstart', nextFunction);

const prev = document.querySelector('.prev');
prev.addEventListener('click', prevFunction);
prev.addEventListener('touchstart', prevFunction);

const reset = document.querySelector('.reset');
reset.addEventListener('click', resetFunction);
reset.addEventListener('touchstart', resetFunction);

function nextFunction() {
  for (let image of images) image.classList.remove('active-img');
  count++;
  if (count === images.length) count = 0;
  images[count].classList.add('active-img');
  const currentSrc = images[count].getAttribute('src');
  maxImage.setAttribute('src', currentSrc);
}

function prevFunction() {
  for (let image of images) image.classList.remove('active-img');
  count--;
  if (count < 0) count = images.length - 1;
  images[count].classList.add('active-img');
  const currentSrc = images[count].getAttribute('src');
  maxImage.setAttribute('src', currentSrc);
}

function resetFunction() {
  for (let image of images) image.classList.remove('active-img');
  count = 0;
  images[0].classList.add('active-img');
  maxImage.setAttribute('src', images[0].getAttribute('src'));
}

for (let image of images) {
  image.addEventListener('click', (e) => {
    setActiveImage(e);
  });
  image.addEventListener('touchstart', (e) => {
    setActiveImage(e);
  });
}

function setActiveImage(e) {
  const currentSrc = e.target.getAttribute('src');
  maxImage.setAttribute('src', currentSrc);
  for (let image of images) {
    image.classList.remove('active-img');
    count = Array.from(images).indexOf(e.target);
  }

  e.target.classList.add('active-img');
}
