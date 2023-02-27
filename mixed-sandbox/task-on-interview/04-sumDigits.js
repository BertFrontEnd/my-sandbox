// Mine
const sumDigitsMine = (number) =>
  Math.abs(number)
    .toString()
    .split('')
    .reduce((acc, sum) => Number(acc) + Number(sum));

console.log('Mine:', sumDigitsMine('99'));
console.log('Mine:', sumDigitsMine('-32'));

// Base
const sumDigitsBase = (number) => {
  const moduleNumber = Math.abs(number);
  const str = moduleNumber.toString();
  const arr = str.split('');
  const res = arr.reduce((sum, cur) => {
    return Number(sum) + Number(cur);
  }, 0);
  return res;
};

console.log('Base:', sumDigitsBase('99'));
console.log('Base:', sumDigitsBase('-32'));

// Advanced
const sumDigitsAdvanced = (number) => {
  return Math.abs(number)
    .toString()
    .split('')
    .reduce((sum, cur) => {
      return +sum + +cur;
    }, 0);
};

console.log('Advanced:', sumDigitsAdvanced('99'));
console.log('Advanced:', sumDigitsAdvanced('-32'));

// ES6
const sumDigitsES6 = (number) =>
  Math.abs(number)
    .toString()
    .split('')
    .reduce((sum, cur) => +sum + +cur);

console.log('ES6:', sumDigitsES6('99'));
console.log('ES6:', sumDigitsES6('-32'));
