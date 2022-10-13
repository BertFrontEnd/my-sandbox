/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */

// выражение/expression
15;

// инструкция/statement
const myObject = {
  // Литерал объекта это выражение / Object literal is expression
  x: 10,
  y: true,
};

// выражение-инструкция/expression-statement
myObject.z = 'abc';
/**         ________
 *             ^
 *     выражение/expression
 */

// выражение-инструкция/expression-statement
delete myObject.x;

// инструкция/statement
let newVariable;

// выражение-инструкция/expression-statement
newVariable = 30 + 5;
/**          ________
 *              ^
 *     выражение/expression
 */

// выражение-инструкция/expression-statement
console.log(newVariable);
/**        _____________
 *               ^
 *      выражение/expression
 */

// инструкция/statement
if (newVariable > 10) {
  /**________________
   *        ^
   *выражение/expression
   */
  // выражение-инструкция/expression-statement
  console.log(`${newVariable} больше 10`);
  /**          ______________
   *                 ^
   *        выражение/expression
   */
  /**        ____________________________
   *                      ^
   *             выражение/expression
   */
}
