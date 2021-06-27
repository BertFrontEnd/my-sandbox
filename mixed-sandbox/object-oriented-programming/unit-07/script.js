// Task 1
// Изучите вывод в консоль this при запуске стрелочной функции и обычной.

function f1_1() {
  console.log(this);
}

const f1_2 = () => {
  console.log(this);
};

document.querySelector('.b-1').onclick = f1_1;
document.querySelector('.b-1-2').onclick = f1_2;

// ==================================================

// Task 2
// Изучите вывод в консоль this при запуске обычной функции, которая находится внутри анонимной.

function f2() {
  console.log(this);
}
const f2_2 = () => {
  console.log(this);
};

document.querySelector('.b-2').onclick = function () {
  f2();
};
document.querySelector('.b-2-2').onclick = () => {
  f2_2();
};

// ==================================================

// Task 3
// Изучите чему равен this в данном примере.

const a3 = {
  one: 4,
  two: function () {
    return this.one;
  },
  three: () => {
    return this.one;
  },
};

document.querySelector('.b-3').onclick = function () {
  console.log(a3);
  console.log('run method two(): ' + a3.two());
  console.log('run method three(): ' + a3.three());
};

// ==================================================

// Task 4
// По нажатию кнопки b-4 создайте экземпляр класса Test, передайте ему любое число в качестве параметра a. Выведет в консоль результат работы метода  someMethod() , someMethod2

document.querySelector('.b-4').onclick = () => {
  const test = new Test(42);
  console.log(test.someMethod());
  console.log(test.someMethod2());
};

// ==================================================

// Task 5
// По нажатию кнопки b-5 выведите в консоль статическое свойство b класса Test и результат работы статического метода staticMethod().

document.querySelector('.b-5').onclick = () => {
  console.log(Test.staticMethod());
};

// ==================================================
