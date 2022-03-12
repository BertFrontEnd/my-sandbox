// Task 1
// Изучите код первой задачи в шаблоне. Проанализируйте способы применения call и полученный результат.

function f1_1() {
  console.log(this);
}

const f1_2 = () => {
  console.log(this);
};

document.querySelector('.b-1').onclick = () => {
  f1_1(); // ожидаемо теряется this
};
document.querySelector('.b-1-2').onclick = () => {
  // теперь передаем this с помощью call
  // вызываем f1_1 и в качестве this передаем b-1
  f1_1.call(document.querySelector('.b-1'));
  // если корректно сделано - то увидите в консоли кнопку b-1
};
document.querySelector('.b-1-3').onclick = () => {
  // вызываем f1_2 с контекстом .b-1-2
  f1_2.call(document.querySelector('.b-1-2'));
  // если вы все сделали верно, то call не помогает
  //Это не влияет на стрелочные функции, потому что у них просто нет this
};

// ==================================================

// Task 2
// Дана функция f2, которая к элементу this применяет background. Запустите данную функцию с помощью call и в качестве контекста задайте блок div-2-1, div-2-2.

function f2() {
  this.style.background = 'orange';
}

f2.call(document.querySelector('.div-2-1'));
f2.call(document.querySelector('.div-2-2'));

// ==================================================

// Task 3
// Модифицируем предыдущую задачу и добавим аргументы функции. Напомню в call мы передаем их через запятую. При этом блок div-3-1 задаем цвет red, div-3-2 - orangered.

function f3(color) {
  this.style.background = color;
}

f3.call(document.querySelector('.div-3-1'), 'red');
f3.call(document.querySelector('.div-3-2'), 'orange');

// ==================================================

// Task 4
// Отличия call и apply только в том, что первый аргументы передает через запятую, а второй - массивом. Запустим функцию f4 с помощью apply, и передадим цвет в массиве, для блока div-4-1 это будет ['red'], для блока div-4-2 это будет ['orange'];

function f4(color) {
  this.style.background = color;
}

f4.apply(document.querySelector('.div-4-1'), ['red']);
f4.apply(document.querySelector('.div-4-2'), ['orange']);

// ==================================================

// Task 5
// В остальном, отличий call и apply нет. Запустите функцию f5 с помощью apply и в качестве контекста задайте блок div-5-1, div-5-2.

function f5() {
  this.style.background = 'orange';
}

f5.apply(document.querySelector('.div-5-1'));
f5.apply(document.querySelector('.div-5-2'));

// ==================================================

// Task 6
// Научимся применять bind. Создадим новые функции bindF61, bindF62 куда мы добавим функцию f6 с контекстом div-6-1, div-6-2. Запустим эти функции для проверки.

function f6() {
  this.style.background = 'orange';
}

let bindF61 = f6.bind(document.querySelector('.div-6-1'));
let bindF62 = f6.bind(document.querySelector('.div-6-2'));

bindF61();
bindF62();

// ==================================================

// Task 7
// Научимся применять bind. Создадим новые функции bindF71, bindF72 куда мы добавим функцию f7 с контекстом div-7-1, div-7-2. Запустим эти функции для проверки, в первую передадим параметр orange, а во вторую blue.

function f7(color) {
  this.style.background = color;
}

let bindF71 = f7.bind(document.querySelector('.div-7-1'), 'orange');
let bindF72 = f7.bind(document.querySelector('.div-7-2'), 'blue');

bindF71();
bindF72();

// ==================================================
