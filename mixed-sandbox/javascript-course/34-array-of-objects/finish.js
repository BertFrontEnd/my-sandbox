/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const carsArray = [
  {
    carBrand: 'Peugeot',
    price: 3000,
    isAvailableForSale: false,
  },
  {
    carBrand: 'Volkswagen',
    price: 7000,
    isAvailableForSale: true,
  },
  {
    carBrand: 'Ford',
    price: 10000,
    isAvailableForSale: true,
  },
];

const newCar = {
  carBrand: 'Citroen',
  price: 5000,
  isAvailableForSale: false,
};

carsArray.push(newCar);

console.log(carsArray);
34-array-of-objects/solution.js