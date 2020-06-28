// Создается объект через new Object; созданный person - инстанс класса Object
const person = new Object({
  name: 'Berton',
  age: 33,
  greet: function () {
    console.log("It's easy if you try!");
  },
});

console.log(person.name);
console.log(person.age);
console.log(person.greet());
console.log(person);

// В прототип глобального объекта Object добавляется новый метод; person имеет к нему доступ, как и любой созданный объект в последующем
Object.prototype.sayThat = function () {
  console.log('I will do this!');
};

console.log(person.sayThat());
console.log(person);

// Создается объект lena на основе объекта person; lena - пустой объект, но имеет доступ к полям и методам объекта parson
const lena = Object.create(person);

console.log(lena);
lena.name = 'Lena';
console.log(lena);

// Строка - это тоже объект; она имеет поля и методы как и любой объект
const str = new String("It's easy if you try!");

console.log(str);
console.log(str.length);
console.dir(str);
