/** ЗАДАЧА 22 - Остаток от деления
 *
 * 1. Выведите в консоль остаток от деления "myNumber1" на "myNumber2".
 *
 * 2. Какой приоритет и ассоциативность
 * имеет оператор остаток от деления?
 *
 * 3. Проверьте ассоциативность самостоятельно
 */

const myNumber1 = 10; // 10 = 3 + 3 + 3 + 1
const myNumber2 = 3;

console.log(myNumber1 % myNumber2);

/**
 * Приоритетность оператора % - 13 (выше чем у операторов + и -)
 * Ассоциативность оператора % - left-to-right
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators
 */

console.log((3 + 3 + 3 + 1) % 3);
