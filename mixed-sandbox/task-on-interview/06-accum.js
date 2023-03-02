// Mine
const accumMine = (string) =>
  string
    .split('')
    .map((el) => el.toLowerCase())
    .map((el, idx) => el[0].toUpperCase().concat(el.repeat(idx)))
    .join('-');

console.log('Mine:', accumMine('abcd'));
console.log('Mine:', accumMine('cwAt'));

// Base
const accumBase = (string) => {
  const arr = string.toUpperCase().split('');
  const repeatArr = arr.map((el, i) => (el += el.repeat(i).toLowerCase()));
  const resSting = repeatArr.join('-');
  return resSting;
};

console.log('Base:', accumBase('abcd'));
console.log('Base:', accumBase('cwAt'));

// Advanced
const accumAdvanced = (string) => {
  return string
    .toUpperCase()
    .split('')
    .map((el, i) => {
      return (el += el.repeat(i).toLowerCase());
    })
    .join('-');
};

console.log('Advanced:', accumAdvanced('abcd'));
console.log('Advanced:', accumAdvanced('cwAt'));

// ES6
const accumES6 = (string) =>
  string
    .toUpperCase()
    .split('')
    .map((el, i) => `${el}${el.repeat(i).toLowerCase()}`)
    .join('-');

console.log('ES6:', accumES6('abcd'));
console.log('ES6:', accumES6('cwAt'));
