/** ЗАДАЧА 59 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */

class ExtendedArray extends Array {
  sum() {
    return this.reduce((acc, el) => acc + el, 0);
  }
  onlyNumbers() {
    return this.filter((el) => typeof el === 'number');
  }
}

const arr1 = [1, 2, 3];
const newArr1 = new ExtendedArray(...arr1);
console.log('1:', newArr1.sum());

const arr2 = [1, 2, 3, 'a', 'b', 'c'];
const newArr2 = new ExtendedArray(...arr2);
console.log('2:', newArr2.onlyNumbers());

const arr3 = [10, 9, 8];
const newArr3 = new ExtendedArray(...arr3);
newArr3.forEach((el) => console.log('3:', el));

/* // Экземпляры Array не имеют доступа к методам ExtendedArray
const arr4 = [7, 9, 11];
const newArr4 = new Array(arr4);
console.log('4:', newArr4.sum()); */
