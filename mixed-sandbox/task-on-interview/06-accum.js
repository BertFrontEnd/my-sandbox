// Mine
const accum = (string) =>
  string
    .split('')
    .map((el) => el.toLowerCase())
    .map((el, idx) => el[0].toUpperCase().concat(el.repeat(idx)))
    .join('-');

console.log('Mine:', accum('abcd'));
console.log('Mine:', accum('cwAt'));

// Base
const minMaxBase = (string) => {
  const arr = string.toUpperCase().split('');
  const repeatArr = arr.map((el, i) => el.repeat(i).toLowerCase());
  const resSting = repeatArr.join('-');
  return resSting;
};

console.log('Base:', accum('abcd'));
console.log('Base:', accum('cwAt'));

// Advanced
const minMaxAdvanced = (string) => {
  return string
    .toUpperCase()
    .split('')
    .map((el, i) => {
      return el.repeat(i).toLowerCase();
    })
    .join('-');
};

console.log('Advanced:', accum('abcd'));
console.log('Advanced:', accum('cwAt'));

// ES6
const minMaxES6 = (arr) =>
  string
    .toUpperCase()
    .split('')
    .map((el, i) => `${el.repeat(i).toLowerCase()}`)
    .join('-');
console.log('ES6:', accum('abcd'));
console.log('ES6:', accum('cwAt'));
