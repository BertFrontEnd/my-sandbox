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

// выводится значение функции hello и значение this, но this уже как контекст объекта person - это сам объект person; ключевое слово this всегда динамично, и указывает на тот объект в контексте которого оно вызвано; контекстом является объект указанный слева от точки, где вызывается функция
console.log('Контекст this -> person:');
console.log(person.sayHello());

// встроенный метод bind привязывает контекст к объекту, указанному в качестве аргумента
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

// другой способ вызова функции c использование метода bind - присвоить изменение контекста переменной и затем вызвать ее через эту переменную; вызываемой функции через переменную можно передать параметры, но эти параметры можно передавать и в качестве аргумента метода bind после привязываемого контекста; параметров может быть сколько угодно
const fnLenaInfoLog = person.logInfo.bind(lena, 'Frontend', '+375-29-1359887');
console.log(fnLenaInfoLog());

const kate = {
  name: 'Kate',
  age: 28,
};

// метод call возвращает новую функцию с новым контекстом и сразу же ее вызывает; параметры функции можно передавать в качестве аргумента метода call после привязываемого контекста; параметров может быть сколько угодно
console.log(person.logInfo.call(kate, 'Frontend', '+375-29-5976578'));

const sasha = {
  name: 'Sasha',
  age: 26,
};

// метод apply возвращает новую функцию с новым контекстом и сразу же ее вызывает; параметры функции можно передавать в качестве аргумента метода apply после привязываемого контекста; параметр может быть только один, и это массив; в массиве может быть сколько угодно элементов
console.log(person.logInfo.apply(sasha, ['Frontend', '+375-29-7535589']));
