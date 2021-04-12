/* console.log('15-get-email-domain:'); */

/* function getEmailDomain(email) {
  const forDomain = email.lastIndexOf('@');
  return email.slice(forDomain + 1);
}

console.log(getEmailDomain('prettyandsimple@example.com')); // 'example.com'
console.log(getEmailDomain('someaddress@yandex.ru')); // 'yandex.ru'
console.log(getEmailDomain('very.unusual.@.unusual.com@usual.com')); //'usual.com'
console.log(getEmailDomain('admin@mailserver2.ru')); // 'mailserver2.ru'
console.log(getEmailDomain('example-indeed@strange-example.com')); // 'strange-example.com' */

/* console.log('01-matrix-elements-sum:'); */

/* function getMatrixElementsSum(matrix) {
  const result = [];
  let sumRow = '';

  for (let i = 0; i < matrix.length; i++) {
    sumRow = 0;
    if (i === 0) {
      for (let k = 0; k < matrix[i].length; k++) {
        sumRow += matrix[i][k];
      }
    } else {
      for (let k = 0; k < matrix[i].length; k++) {
        if (matrix[i - 1][k] !== 0) {
          sumRow += matrix[i][k];
        }
      }
    }
    result.push(sumRow);
  }

  return result.reduce((acc, elem) => acc + elem, 0);
}

console.log(
  getMatrixElementsSum([
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3],
  ]),
); // 9

console.log(
  getMatrixElementsSum([
    [1, 2, 3, 4],
    [0, 5, 0, 0],
    [2, 0, 3, 3],
  ]),
); // 15

console.log(
  getMatrixElementsSum([
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3],
  ]),
); // 18 */

/* console.log('02-common-character-count:'); */

/* function getCommonCharacterCount(s1, s2) {
  let arr1 = [...s1];
  let arr2 = [...s2];

  console.log(arr1);
  console.log(arr2);
}

console.log(getCommonCharacterCount('aabcc', 'adcaa')); // 3)
console.log(getCommonCharacterCount('zzzz', 'zzzzzzz')); // 4)
console.log(getCommonCharacterCount('abca', 'xyzbac')); // 3)
console.log(getCommonCharacterCount('', 'abc')); // 0)
console.log(getCommonCharacterCount('a', 'b')); // 0) */

/* console.log('03-sort-by-height:'); */

/* function sortByHeight(arr) {
  const resArr = [];

  const positiveArr = arr.filter((elem) => elem !== -1).sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      resArr.push(arr[i]);
    } else {
      resArr.push(positiveArr.shift());
    }
  }
  return resArr;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])); // [-1, 150, 160, 170, -1, -1, 180, 190] */

console.log('06-mac-address:');

function isMAC48Address(n) {
  const macArr = [...n];
  const arrSymbol = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    '-',
  ];

  const resultArr = macArr.filter((elem) => arrSymbol.includes(elem));

  if (macArr.length === resultArr.length) {
    return true;
  }
  return false;
}

console.log(isMAC48Address('00-1B-63-84-45-E6')); // true
console.log(isMAC48Address('Z1-1B-63-84-45-E6')); // false

/* console.log('07-file-names:');

function renameFiles(names) {
  const resultArr = [];
  const counterFileName = {};

  names.forEach((fileName) => {
    if (resultArr.includes(fileName)) {
      counterFileName[fileName] = (counterFileName[fileName] || 0) + 1;
      const newFileName = `${fileName}(${counterFileName[fileName]})`;
      resultArr.push(newFileName);
    } else {
      resultArr.push(fileName);
    }
  });

  return resultArr;
}

console.log(renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc'])); //  ['doc', 'doc(1)', 'image', 'doc(1)(1)', 'doc(2)']
console.log(renameFiles(['a', 'b', 'cd', 'b ', 'a(3)'])); //  ['a', 'b', 'cd', 'b ', 'a(3)']
console.log(renameFiles([])); //  [] */

/* console.log('09-sum-digits:');

function getSumOfDigits(n) {
  let result = '';
  const arr = String(n).split('').map(Number);

  result = arr.reduce((acc, el) => (acc += el), 0);
  return String(result).length > 1 ? getSumOfDigits(result) : result;
}

console.log(getSumOfDigits(91)); // 1
console.log('---');
console.log(getSumOfDigits(100)); // 1
console.log('---');
console.log(getSumOfDigits(35)); // 8
console.log('---');
console.log(getSumOfDigits(99)); // 9
console.log('---');
console.log(getSumOfDigits(123)); // 6 */

/* console.log('11-encode-line:');

function encodeLine(str) {
  let res = '';
  let count = 1;
  let arr = [];

  if (str.length === 0) {
    return '';
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count += 1;
    } else {
      res += count + str[i];
      count = 1;
    }
  }

  arr = Array.from(res).filter((elem) => (elem !== '1' ? elem : null));

  return arr.join('');
}

console.log(encodeLine('aaaatttt')); // '4a4t'
console.log(encodeLine('aabbccc')); // '2a2b3c'
console.log(encodeLine('abbcca')); // 'a2b2ca'
console.log(encodeLine('xyz')); // 'xyz'
console.log(encodeLine('')); // '' */

console.log('05-delete-digit:');
