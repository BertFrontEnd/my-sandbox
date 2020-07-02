function hello() {
  console.log('Hello, world', this);
}

// this - глобальный объект window
console.log(hello());
console.log(this);

// другой способ вызова функции hello
console.log(window.hello());

const person = {
  name: 'Berton',
  age: 33,
  sayHello: hello,
  sayHelloWindow: hello.bind(window),
  sayHelloThis: hello.bind(this),
  sayHelloDocument: hello.bind(document),
  logInfo: function (job, phone) {
    console.group(`${this.name} info:`);
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);
    console.groupEnd();
  },
};

// вывод объекта person
console.log(person);

// выводится значение функции hello и значение this,
// но this уже как контекст объекта person - это сам объект person;
// ключевое слово this всегда динамично
// и указывает на тот объект в контексте которого оно вызвано;
// контекстом является объект указанный слева от метода и точки,
// где вызывается функция
console.log('Контекст this -> person:');
console.log(person.sayHello());

// встроенный метод bind привязывает контекст к объекту,
// указанному в качестве аргумента
console.log('Контекст this -> window:');
console.log(person.sayHelloWindow());

// this - это window
console.log('this === window:');
console.log(this === window);
console.log(person.sayHelloThis());

// в качестве this можно указать любой объект
console.log('this -> document:');
console.log(person.sayHelloDocument());

// в качестве this выступает сам объект persona
console.log('this -> person:');
console.log(person.logInfo());

const lena = {
  name: 'Lena',
  age: 27,
};

// метод bind не вызывает функцию, в возвращает новую функцию с новым контекстом, которую можно вызвать когда угодно
console.log(person.logInfo.bind(lena));

// вызов функции с привязкой контекста через метод bind
console.log(person.logInfo.bind(lena)());

// другой способ вызова функции c использование метода bind -
// присвоить изменение контекста переменной и затем вызвать ее через эту переменную;
// вызываемой функции через переменную можно передать аргументы,
// но эти аргументы можно передавать и в качестве аргумента метода bind после привязываемого контекста;
// аргументов может быть сколько угодно
const fnLenaInfoLog = person.logInfo.bind(lena, 'Frontend', '+375-29-1359887');
console.log(fnLenaInfoLog());

const kate = {
  name: 'Kate',
  age: 28,
};

// метод call возвращает новую функцию с новым контекстом и сразу же ее вызывает;
// аргументы функции можно передавать в качестве аргумента метода call после привязываемого контекста;
// аргументов может быть сколько угодно
console.log(person.logInfo.call(kate, 'Frontend', '+375-29-5976578'));

const sasha = {
  name: 'Sasha',
  age: 26,
};

// метод apply возвращает новую функцию с новым контекстом и сразу же ее вызывает;
// аргументы функции можно передавать в качестве аргумента метода apply после привязываемого контекста;
// аргументов может быть только один, но это массив;
// следовательно, в массиве может быть сколько угодно элементов (один элемент = один аргумент)
console.log(person.logInfo.apply(sasha, ['Frontend', '+375-29-7535589']));

// Example with prototype & this

// создаем массив
const array = [1, 2, 3, 4, 5];

// создаем функцию умножения каждого элемента массива на число
// массив и число передаются как параметры функции
function multiplyBy(arr, n) {
  return arr.map(function (i) {
    return i * n;
  });
}

// вызываем созданную функцию с нужными аргументами
console.log(multiplyBy(array, 5));
console.log(multiplyBy(array, 7));

// обращаемся к прототипу Массива и записываем в него нужный метод
Array.prototype.multiplyBy = function (n) {
  console.log('multiplyBy', this);
};

// при вызове созданного метода у созданного массива получаем сам массив
// это происходит потому что this указываем на контекст, который слева от метода и точки
console.log(array.multiplyBy(3));

// совмещаем приведенные выше подходы
// вместо явного указания массива, указываем ключевое слово this
// this будет указывать на используемы контекст
// следовательно, его (массив) не нужно указывать как аргумент
Array.prototype.multiplyBy = function (n) {
  return this.map(function (i) {
    return i * n;
  });
};

// вызываем метод записанный в прототип Массива
console.log(array.multiplyBy(4));

// созданный метод работает с любым массивом
// его не нужно передавать как аргумент в какую-либо вызываемую функцию
console.log([1, 5, 9, 3].multiplyBy(4));
