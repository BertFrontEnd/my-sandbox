// Mine
const createPhoneNumberMine = (number) =>
  `(${String(number).split('').slice(0, 3).join('')}) ${String(number)
    .split('')
    .join('')
    .slice(3, 6)}-${String(number).split('').slice(6).join('')}`;

console.log('Mine:', createPhoneNumberMine(123456789));
console.log('Mine:', createPhoneNumberMine(555095611));

// Base
const createPhoneNumberBase = (number) => {};

console.log('Base:', createPhoneNumberBase(123456789));
console.log('Base:', createPhoneNumberBase(555095611));

// Advanced
const createPhoneNumberAdvanced = (number) => {};

console.log('Advanced:', createPhoneNumberAdvanced(123456789));
console.log('Advanced:', createPhoneNumberAdvanced(555095611));

// ES6
const createPhoneNumberS6 = (number) => {};

console.log('ES6:', createPhoneNumberAdvanced(123456789));
console.log('ES6:', createPhoneNumberAdvanced(555095611));
