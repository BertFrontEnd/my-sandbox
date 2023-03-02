// Mine
const capitalMine = (string) => {
  const arrIdx = [];

  string
    .split('')
    .forEach((el, idx) => (el.toUpperCase() === el ? arrIdx.push(idx) : ''));

  return arrIdx;
};

console.log('Mine:', capitalMine('CodEWaRs'));
console.log('Mine:', capitalMine('justForTest'));

// Base
const capitalBase = (string) => {
  const bigLetters = string.toUpperCase().split('');
  const smallLetters = string.split('');
  const res = [];

  for (let i = 0; i < string.length; i++) {
    if (smallLetters[i] === bigLetters[i]) {
      res.push(i);
    }
  }

  return res;
};

console.log('Base:', capitalBase('CodEWaRs'));
console.log('Base:', capitalBase('justForTest'));

// Advanced
const capitalAdvanced = (string) => {
  const res = [];

  string.split('').forEach((letter, index) => {
    if (letter === letter.toUpperCase()) {
      res.push(index);
    }
  });

  return res;
};

console.log('Advanced:', capitalAdvanced('CodEWaRs'));
console.log('Advanced:', capitalAdvanced('justForTest'));

// ES6
const capitalES6 = (string) =>
  string.split('').reduce((result, letter, index) => {
    if (letter === letter.toUpperCase()) {
      result.push(index);
    }
    return result;
  }, []);

console.log('ES6:', capitalES6('CodEWaRs'));
console.log('ES6:', capitalES6('justForTest'));
