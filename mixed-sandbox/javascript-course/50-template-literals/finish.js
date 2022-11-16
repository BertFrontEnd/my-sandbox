/** ЗАДАЧА 50 - Шаблонные строки
 *
 * 1. Создайте функцию "templateLiteral" с одним параметром "num"
 *
 * 2. Функция должна возвращать многострочную строку.
 *
 * 3. Ниже приведены примеры вызовов функции.
 */

// I

const templateLiteral = (num) => {
  const firstLine = `Число ${num}.`;
  let secondLine = '';

  switch (true) {
    case num < 10:
      secondLine = `Это число меньше 10.`;
      break;
    case num >= 10:
      secondLine = `Это число больше или равно 10.`;
      break;
  }

  const thirdLine = `Квадратный корень этого числа - ${Math.sqrt(num)}.`;

  return `
  ${firstLine}
  ${secondLine}
  ${thirdLine}`;
};

// II

/* const templateLiteral = (num) => {
  return `Число ${num}.
Это число ${num < 10 ? 'меньше' : 'больше или равно'} 10.
Квадратный корень этого числа - ${Math.sqrt(num)}.`;
};
 */
// ТЕСТ 1
const myNumber = 9;
console.log(templateLiteral(myNumber));
/* 
Число 9.
Это число меньше 10.
Квадратный корень этого числа - 3.
*/

// ТЕСТ 2
const myAnotherNumber = 25;
console.log(templateLiteral(myAnotherNumber));
/* 
Число 25.
Это число больше или равно 10.
Квадратный корень этого числа - 5.
*/
