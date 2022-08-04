/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */

const str = 'Berton';
const num = 42;
const booleanVariable = true;
const nullVariable = null;
const undefinedVariable = undefined;
const obj = { str: str, num: num, booleanVariable: booleanVariable };
const arr = [str, num, booleanVariable];

console.log(typeof str);
console.log(typeof num);
console.log(typeof booleanVariable);
console.log(typeof nullVariable);
console.log(typeof undefinedVariable);
console.log(typeof obj);
console.log(typeof arr);
