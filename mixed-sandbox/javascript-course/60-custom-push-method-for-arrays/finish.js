/** ЗАДАЧА 60 - Модифицированный метод push для массивов
 *
 * 1. Создайте новый класс "CustomArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте один пользовательский метод "customPush" в новый класс.
 * Этот метод будет иметь один параметр "newElement".
 *
 * При вызове этого метода необходимо выполнить следующие действия:
 *  - Добавить новый элемент в существующий массив
 *  (не используйте для этого метод "push")
 *  - Изменить свойство "length" массива (увеличить его на 1)
 *  - Вывести в консоль следующую строку:
 * "Новый элемент <newElement> был только что добавлен в массив"
 *
 * 3. Создайте экземпляр нового класса "CustomArray"
 * и протестируйте новый метод "customPush" и сравните его с "push"
 *
 * 4. Что произойдет, если имя пользовательского метода
 * в классе "CustomArray" также будет "push" вместо "customPush"?
 * Попробуйте это.
 */

class CustomArray extends Array {
  customPush(newElement) {
    console.log(
      `Новый элемент <${newElement}> был только что добавлен в массив`,
    );
    /* this[this.length] = newElement; */
    return this.concat(newElement);
  }
}

console.log('-/-/-');

const arr1 = [1, 2, 3];
const bufferArr1 = new CustomArray(...arr1);
const resultArr1 = bufferArr1.customPush(10);

console.log('resultArr1:', resultArr1);
console.log('resultArr1 length:', resultArr1.length);

console.log('-/-/-');

const arr2 = [1, 2, 3];
const bufferArr2 = new CustomArray(...arr2);
const resultArr2 = bufferArr2.push(10);

console.log('bufferArr2:', bufferArr2);
console.log('bufferArr2 length:', resultArr2);

console.log('-/-/-');
