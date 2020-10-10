/* Массив объектов */

const people = [
  { name: 'Владилен', age: 25, budget: 40000 },
  { name: 'Елена', age: 17, budget: 3400 },
  { name: 'Игорь', age: 49, budget: 50000 },
  { name: 'Михаил', age: 15, budget: 1800 },
  { name: 'Василиса', age: 24, budget: 25000 },
  { name: 'Виктория', age: 38, budget: 2300 },
];

/* For -> ES5 */

/* for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}
 */

/* ---------------- */

/* While -> ES5 */

/* let i = 0;
while (i < people.length) {
  console.log(people[i]);
  i++;
} */

/* ---------------- */

/* For in -> ES6 */

/* for (let i in people) {
  console.log(i);
} */

/* ---------------- */

// For of -> ES6

/* for (let i of people) {
  console.log(i);
} */

/* ---------------- */

// ForEach -> ES6

// Исходный массив не мутирует
// Принимает параметры и возвращает значения:
// person - элемент массива
// index - индекс массива
// arr - исходны массив
// Все параметры, кроме перового, элемента массива - не обязательные

// Синтаксис ES5

/* people.forEach(function (person, index, arr) {
  console.log(person);
  console.log(index);
  console.log(arr);
});  */

// Синтаксис ES6

/* people.forEach((person, index, arr) => {
  console.log(person);
  console.log(index);
  console.log(arr);
}); */

/* ---------------- */

// Map

// Исходный массив не мутирует
// Можно задать изменения и получить новый массив
// Принимает параметры и возвращает значения:
// person - элемент массива
// index - индекс массива
// arr - исходны массив
// Все параметры, кроме перового, элемента массива - не обязательные

/* const peopleNew = people.map((person) => {
  return `${person.name}, возраст умноженный на 3: ${person.age * 3}`;
});
console.log(peopleNew); */

/* ---------------- */

// Filter

// Фильтрация массива циклом For
// Если условие удовлетворяется - информация добавляется в новый массив
/* const adults = [];
for (let i = 0; i < people.length; i++) {
  if (people[i].age >= 18) {
    adults.push(people[i]);
  }
}
console.log(adults); */

// Исходный массив не мутирует
// Можно задать условия и, если условие удовлетворяется
// Информация добавляется в новый массив
// Принимает параметры и возвращает значения:
// person - элемент массива
// index - индекс массива
// arr - исходны массив
// Все параметры, кроме перового, элемента массива - не обязательные

/* const adults = people.filter((person) => {
  if (person.age >= 18) {
    return true;
  }
});
console.log(adults); */

// Reduce

// Find
