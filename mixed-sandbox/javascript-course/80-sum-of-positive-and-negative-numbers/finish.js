/** ЗАДАЧА 80 - Сумма положительных и отрицательных чисел
 *
 * 1. Создайте функцию "sumPositiveNegative", которая принимает массив
 * и суммирует отдельно положительные и отрицательные числа.
 *
 * 2. Функция должна вернуть такой объект:
 *  {
 *    positive: 74, // сумма всех положительных чисел
 *    negative: -54 // сумма всех отрицательных чисел
 *  }
 */

const nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];

const sumPositiveNegative = (numbers) => {
  const obj = { positive: 0, negative: 0 };

  numbers.forEach((el) => {
    return el > 0
      ? (obj.positive = obj.positive + el)
      : (obj.negative = obj.negative + el);
  });

  return obj;
};

const result = sumPositiveNegative(nums);

console.log(result);
// { positive: 74, negative: -54 }
