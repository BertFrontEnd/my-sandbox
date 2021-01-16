console.log('');
console.log('---A-R-R-A-Y---');
console.log('');

function calcValues(a, b) {
  return [a + b, undefined, a * b, a / b];
}

// Получение значения по индексу в массиве
const resultES5 = calcValues(45, 10);
const sumES5 = resultES5[0];
const subES5 = resultES5[1];

console.log('sumES5:', sumES5);
console.log('subES5:', subES5);

// Получение значение через деструктуризацию
const [sumES6, subES6] = calcValues(45, 10);

console.log('sumES6:', sumES6);
console.log('subES6:', subES6);

// Варианты получения значение через деструктуризацию
// Использование значения по умолчанию, если элемент undefined
// Объединение значений с помощью оператора Rest
const [sum, sub = 'Значение по умолчанию', multiply, ...other] = calcValues(
  45,
  10,
);
console.log('sum:', sum, 'sub:', sub, 'multiply:', multiply, 'other:', other);

console.log('');
console.log('---O-B-J-E-C-T---');
console.log('');

const person = {
  name: 'Berton',
  age: 34,
  address: {
    city: 'Minsk',
    country: 'Belarus',
  },
};

// Получение значения по ключу в объекте
const nameES5 = person.name;

console.log('nameES5: ', nameES5);

// Получение значения по ключу в объекте через деструктуризацию
// Использование значения по умолчанию, если элемент undefined
// Переименование существующего ключа и доступ по ней к значению
const {
  name: nickName,
  age,
  car = 'Значение по умолчанию',
  address: { city, country },
} = person;

console.log(
  'nickNameES: ',
  nickName,
  'ageES6',
  age,
  'carES6: ',
  car,
  'cityES6: ',
  city,
  'country: ',
  country,
);

// Объединение значений по ключам с помощью оператора Rest
const { name, ...info } = person;

console.log(name, info);

console.log('');
console.log('---E-X-A-M-P-L-E---');
console.log('');

// ES5
function logPersonEs5(per) {
  console.log('ES5: ', per.name + ' ' + per.age);
}

logPersonEs5(person);

// ES6
function logPersonEs6({ name, age }) {
  console.log('ES6: ', name + ' ' + age);
}

logPersonEs6(person);
