// замыкание - это функция внутри функции
function createCalcFunction(n) {
  return function () {
    console.log(1000 * n);
  };
}

// вызов функции createCalcFunction возвратит ее внутреннюю анонимную функцию
console.log(createCalcFunction(42));

// что бы функция createCalcFunction сработала, ее нужно присвоить новой переменной;
// т.е. получится новая функция, которую можно вызвать;
// но вызывать ее нужно без аргумента;
// при присвоении createCalcFunction(n), функция отработала и вызвала свою внутреннюю функцию;
// так же createCalcFunction(n) передала значение свою внутреннюю функцию
// далее внутренняя функция была вызвана в контексте своей внешней функции createCalcFunction(n),
// и переменная n как бы была замкнута в функции, которая возвращается
// следовательно, в функции calc() уже хранится значение n - функция ее замкнула
// поэтому это и называется замыканием;
// таким образом получается доступ к внутреннему scope внешней функции createCalcFunction()
const calc = createCalcFunction(42);
console.log(calc());

function createIncrementor(n) {
  return function (num) {
    return n + num;
  };
}

//
const addOne = createIncrementor(1);
const addTen = createIncrementor(10);

console.log(addOne(10));
console.log(addOne(41));

// можно вызвать функция так, что бы не применять присвоение переменной врнешней функции
// можно применить каррирование функции
console.log(createIncrementor(1)(10));
console.log(createIncrementor(1)(41));

console.log(addTen(10));
console.log(addTen(41));

//
function urlGenerator(domain) {
  return function (url) {
    return `http://www.${url}.${domain}`;
  };
}

const comUrl = urlGenerator('com');
const ruUrl = urlGenerator('ru');

console.log(comUrl('google'));
console.log(comUrl('netflix'));

console.log(ruUrl('yandex'));
console.log(ruUrl('vkontakte'));

// ...args используется, если есть дополнительнее аргументы
// т.е. для универсальности
// в данном примере ...args не используется
function bind(context, fn) {
  return function (...args) {
    fn.apply(context, args);
  };
}

function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const personOne = {
  name: 'Berton',
  age: 33,
  job: 'Frontend',
};

const personTwo = {
  name: 'BertFrontEnd',
  age: 34,
  job: 'Frontend',
};

console.log(bind(personOne, logPerson)());
// или
const myBindOne = bind(personOne, logPerson);
console.log(myBindOne());

console.log(bind(personTwo, logPerson)());
// или
const myBindTwo = bind(personTwo, logPerson);
console.log(myBindTwo());
