// Mine
const isPalindromeMine = (string) => {
  const newString = string.split('').reverse().join('');

  return string === newString ? true : false;
};

console.log('Mine:', isPalindromeMine('тест'));
console.log('Mine:', isPalindromeMine('шалаш'));

// Base
const isPalindromeBase = (string) => {
  const arr = string.split('');
  const reversArr = arr.reverse();
  const resString = reversArr.join('');
  const res = string === resString;
  return res;
};

console.log('Base:', isPalindromeBase('тест'));
console.log('Base:', isPalindromeBase('шалаш'));

// Advanced
const isPalindromeAdvanced = (string) => {
  return string === string.split('').reverse().join('');
};

console.log('Advanced:', isPalindromeAdvanced('тест'));
console.log('Advanced:', isPalindromeAdvanced('шалаш'));

// ES6
const isPalindromeES6 = (string) =>
  string === string.split('').reverse().join('');

console.log('ES6:', isPalindromeES6('тест'));
console.log('ES6:', isPalindromeES6('шалаш'));
