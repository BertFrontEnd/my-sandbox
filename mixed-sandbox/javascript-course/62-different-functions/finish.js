/** ЗАДАЧА 62 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */

// Function Declaration

// Function can be called before declaration
// console.log('before:', firstFunction(1, 2));

function firstFunction(a, b) {
  return a + b;
}

// We can assign new value
// firstFunction = '123';
// console.log(firstFunction);

// Function Expression

// Function can't be called before declaration
// console.log('before:', secondFunction(3, 4));

const secondFunction = function (a, b) {
  return a + b;
};

// New value can't be assigned
// secondFunction = '123';
// console.log(secondFunction);
