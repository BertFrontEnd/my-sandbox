function toRoman(n) {
  switch (n) {
    case 'I':
      n = '1';
      break;
    case 'II':
      n = '2';
      break;
    case 'III':
      n = '3';
      break;
    case 'IV':
      n = '4';
      break;
    case 'V':
      n = '5';
      break;
    case 'VI':
      n = '6';
      break;
    case 'VII':
      n = '7';
      break;
    case 'VIII':
      n = '8';
      break;
    case 'IX':
      n = '9';
      break;
    case 'X':
      n = '10';
      break;

    default:
      throw new Error('Something went wrong!');
  }

  return n;
}

console.log(toRoman('I'));
console.log(toRoman('II'));
console.log(toRoman('III'));
console.log(toRoman('IV'));
console.log(toRoman('V'));
console.log(toRoman('VI'));
console.log(toRoman('VII'));
console.log(toRoman('VIII'));
console.log(toRoman('IX'));
console.log(toRoman('X'));

function toArabic(n) {
  switch (n) {
    case '1':
      n = 'I';
      break;
    case '2':
      n = 'II';
      break;
    case '3':
      n = 'III';
      break;
    case '4':
      n = 'IV';
      break;
    case '5':
      n = 'V';
      break;
    case '6':
      n = 'VI';
      break;
    case '7':
      n = 'VII';
      break;
    case '8':
      n = 'VIII';
      break;
    case '9':
      n = 'IX';
      break;
    case '10':
      n = 'X';
      break;

    default:
      throw new Error('Something went wrong!');
  }

  return n;
}

console.log(toArabic('1'));
console.log(toArabic('2'));
console.log(toArabic('3'));
console.log(toArabic('4'));
console.log(toArabic('5'));
console.log(toArabic('6'));
console.log(toArabic('7'));
console.log(toArabic('8'));
console.log(toArabic('9'));
console.log(toArabic('10'));

function calculate(str) {
  let arr = str.split('');
  console.log(arr);
  let firsNum = arr[0];
  let secondNum = arr[4];
  let res = 0;
  switch (arr[2]) {
    case '+':
      res = Number(firsNum) + Number(secondNum);
      break;
    case '-':
      res = Number(firsNum) - Number(secondNum);
      break;
    case '/':
      res = Number(firsNum) / Number(secondNum);
      break;
    case '*':
      res = Number(firsNum) * Number(secondNum);
      break;

    default:
      throw new Error('Something went wrong!');
  }

  return res;
}

console.log(calculate('4 + 2'));
console.log(calculate('4 - 2'));
console.log(calculate('4 * 2'));
console.log(calculate('4 / 2'));
console.log(calculate('4 + I'));
