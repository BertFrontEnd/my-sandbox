console.log('');
console.log('---S-P-R-E-A-D---A-R-R-A-Y---');
console.log('');

const citiesOfRussia = ['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск'];
const citiesOfEurope = ['Берлин', 'Прага', 'Казань', 'Париж'];

// Spread: для массива "разворачивает" элементы/ключи -> убирает массив
// Ключи добавляются в порядке вывода
console.log('Массив "citiesOfRussia": ', ...citiesOfRussia);
console.log('Массив "citiesOfEurope": ', ...citiesOfEurope);

// Клонирование массива со Spread
const newCities = [...citiesOfRussia];
console.log('Клонирование массива со Spread: ', newCities);

// Конкатенация массивов со Spread
const allCities = [...citiesOfRussia, ...citiesOfEurope];
console.log('Конкатенация массивов со Spread: ', allCities);

// Конкатенация массивов с concat()
const allCitiesWithConcat = citiesOfRussia.concat(citiesOfEurope);
console.log('Конкатенация массивов с concat(): ', allCitiesWithConcat);

// Конкатенация массивов со строкой со Spread
const allNewCities = [...citiesOfRussia, 'Вашингтон', ...citiesOfEurope];
console.log('Конкатенация массивов со строкой со Spread: ', allNewCities);

console.log('');
console.log('---S-P-R-E-A-D---O-B-J-E-C-T---');
console.log('');

const citiesOfRussiaWithPopulation = {
  Moscow: 20,
  SaintPetersburg: 8,
  Kazan: 3,
  Novosibirsk: 3,
  Nominal: 34,
};
const citiesOfEuropeWithPopulation = {
  Berlin: 10,
  Praha: 3,
  Paris: 2,
  Nominal: 15,
};

// Spread: для объекта "разворачивает" элементы только в фигурные скобки -> создается новый объект
// Ключи добавляются в порядке вывода
// Одинаковые ключи переписываются
console.log('Объект "citiesOfRussiaWithPopulation"', {
  ...citiesOfRussiaWithPopulation,
});
console.log('Объект "citiesOfEuropeWithPopulation"', {
  ...citiesOfEuropeWithPopulation,
});

// Клонирование объекта со Spread
const newPopulation = { ...citiesOfRussiaWithPopulation };
console.log('Клонирование объекта со Spread: ', newPopulation);

// Конкатенация объектов со Spread
const allPopulation = {
  ...citiesOfRussiaWithPopulation,
  ...citiesOfEuropeWithPopulation,
};
console.log('Конкатенация объектов со Spread: ', allPopulation);

console.log('');
console.log('---S-P-R-E-A-D---E-X-A-M-P-L-E---');
console.log('');

const numbers = [5, 37, 42, 17];
console.log('Максимальное число >ES6 со Spread: ', Math.max(...numbers));
console.log('Максимальное число <ES6 с Apply: ', Math.max.apply(null, numbers));
const allDiv = document.querySelectorAll('div');
console.log('DOM-элемент - не массив: ', allDiv);
const allDivArray = [...allDiv];
console.log('Массив из DOM-элемента: ', allDivArray);

console.log('');
console.log('---R-E-S-T---E-X-A-M-P-L-E---');
console.log('');

// Оператор Rest собирает в себя неиспользуемые параметры/значения
const sum = (a, b, ...rest) => {
  return a + b + rest.reduce((a, i) => a + i, 0);
};
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Оператор Spread используется для того, что бы "развернуть" массив в числа для функции
const sumOfArray = sum(...number);
console.log('Сумма элементов массива с REST: ', sumOfArray);

// Получение элементов из массива в указанные переменные, а оставшиеся - в массив
const [a, b, ...other] = number;
console.log('Работа массива и Rest: переменные + массив: ', a, b, other);

// Получение значения по ключу из объекта, а оставшиеся - в новый объект
const person = {
  name: 'Berton',
  age: 34,
  city: 'Minsk',
  country: 'Belarus',
};
const { name, age, ...address } = person;
console.log(
  'Работа объекта и Rest: значения по ключу + новый объект: ',
  name,
  age,
  address,
);

console.log('');
console.log(
  '---Spread служит для того, что бы "развернуть/разобрать", a Rest что бы "свернуть/собрать", и отличаются областью применения---',
);
console.log('');
