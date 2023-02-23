/** ЗАДАЧА 79 - Перебор свойств объекта
 *
 * 1. Создайте функцию "sumObjectValues", которая будет суммировать
 * все значения свойств, которые являются числами.
 *
 * 2. Сумму чисел необходимо вернуть из функции
 *
 * 3. Убедитесь, что итерация выполняется только
 * по собственным свойствам объекта
 */

const objectWithNumbers = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
};

const sumObjectValues = (obj) => {
  const arr = [];

  for (let el in obj) {
    if (typeof obj[el] === 'number') {
      arr.push(obj[el]);
    }
  }

  return arr.reduce((acc, el) => acc + el);
};

const result = sumObjectValues(objectWithNumbers);
console.log(result);
//42
