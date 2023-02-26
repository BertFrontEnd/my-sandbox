// Mine
const toInitialsMine = (string) => {
  const arr = string.split(' ');
  return `${arr[0][0].toUpperCase()}.${arr[1][0].toUpperCase()}.`;
};

console.log('Mine:', toInitialsMine('Bill Gates'));
console.log('Mine:', toInitialsMine('elon mask'));

// Base
const toInitialsBase = (string) => {
  const nameArr = string.split(' ');
  const firsLettersArr = nameArr.map((el) => {
    return el.slice(0, 1).toUpperCase() + '.';
  });
  const initials = firsLettersArr.join('');
  return initials;
};

console.log('Base:', toInitialsBase('Bill Gates'));
console.log('Base:', toInitialsBase('elon mask'));

// Advanced
const toInitialsAdvanced = (string) => {
  return string
    .split(' ')
    .map((el) => {
      return el.slice(0, 1).toUpperCase() + '.';
    })
    .join('');
};

console.log('Advanced:', toInitialsAdvanced('Bill Gates'));
console.log('Advanced:', toInitialsAdvanced('elon mask'));

// ES6
const toInitialsES6 = (string) =>
  string
    .split(' ')
    .map((el) => `${el.slice(0, 1).toUpperCase()}.`)
    .join('');

console.log('ES6:', toInitialsES6('Bill Gates'));
console.log('ES6:', toInitialsES6('elon mask'));
