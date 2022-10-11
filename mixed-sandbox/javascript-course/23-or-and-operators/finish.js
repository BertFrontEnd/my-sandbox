/** ЗАДАЧА 23 - ИЛИ и И операторы
 *
 * Что будет выведено в консоль?
 */

console.log(3 || (true && null) || false); // 3

// true && null -> null
// 3 || null -> 3
// 3 || false -> 3
