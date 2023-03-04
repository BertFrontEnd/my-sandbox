// Mine
function uniteUniqueMine() {
  const arrInOne = new Set([...arguments].flat());

  return [...arrInOne];
}

console.log('Mine:', uniteUniqueMine([1, 2, 3], [4, 1, 5], [6, 7, 8, 5]));
console.log('Mine:', uniteUniqueMine([1], [2], [3, 2, 2], [4, 1, 1, 2]));

// Base
function uniteUniqueBase() {
  const arr = [...arguments];
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(...arr[i]);
  }

  newArr = new Set(newArr);

  return [...newArr];
}

console.log('Base:', uniteUniqueBase([1, 2, 3], [4, 1, 5], [6, 7, 8, 5]));
console.log('Base:', uniteUniqueBase([1], [2], [3, 2, 2], [4, 1, 1, 2]));

// Advanced
function uniteUniqueAdvanced() {
  return [...new Set([...arguments].flat())];
}

console.log(
  'Advanced:',
  uniteUniqueAdvanced([1, 2, 3], [4, 1, 5], [6, 7, 8, 5]),
);
console.log(
  'Advanced:',
  uniteUniqueAdvanced([1], [2], [3, 2, 2], [4, 1, 1, 2]),
);

// ES6
/* const uniteUniqueES6 = (array) =>

console.log('ES6:', uniteUniqueES6([1,2,3],[4,1,5],[6,7,8,5]));
console.log('ES6:', uniteUniqueES6([1],[2],[3,2,2],[4,1,1,2]')) */
