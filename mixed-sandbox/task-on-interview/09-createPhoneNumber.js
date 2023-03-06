// Mine
const createPhoneNumberMine = (number) =>
  `(${String(number).split('').slice(0, 3).join('')}) ${String(number)
    .split('')
    .join('')
    .slice(3, 6)}-${String(number).split('').slice(6).join('')}`;

console.log('Mine:', createPhoneNumberMine(123456789));
console.log('Mine:', createPhoneNumberMine(555095611));

// Base
const createPhoneNumberBase = (number) => {
  let numArr = number.toString().split('');

  numArr.splice(0, 0, '(');
  numArr.splice(4, 0, ')');
  numArr.splice(5, 0, ' ');
  numArr.splice(9, 0, '-');

  return numArr.join('');
};

console.log('Base:', createPhoneNumberBase(123456789));
console.log('Base:', createPhoneNumberBase(555095611));

// Advanced
const createPhoneNumberAdvanced = (number) => {
  const strNum = number.toString();
  return `(${strNum.slice(0, 3)}) ${strNum.slice(3, 6)}-${strNum.slice(6, 9)}`;
};

console.log('Advanced:', createPhoneNumberAdvanced(123456789));
console.log('Advanced:', createPhoneNumberAdvanced(555095611));
