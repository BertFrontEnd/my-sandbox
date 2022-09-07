/** ЗАДАЧА 15 - Замена части строки
 *
 * 1. Создайте переменную и присвойте ей строку "Good Morning"
 *
 * 2. Замените "Morning" на "Evening" и присвойте результат новой переменной
 *
 * 3. Выведите значение второй переменной в консоль
 */

const message01 = 'Good Morning';
console.log(message01);
const newMessage01 = message01.split(' ').slice(0, 1).join('') + ' Evening';
console.log(newMessage01);

const message02 = 'Good Morning';
console.log(message02);
const newMessage02 = message02.replace('Morning', 'Evening');
console.log(newMessage02);
