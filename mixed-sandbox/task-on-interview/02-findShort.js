// Mine
const findShortMine = (string) =>
  string.split(' ').sort((a, b) => a.length - b.length)[0];

console.log('Mine:', findShortMine('The Smallest word in sentence'));
console.log('Mine:', findShortMine('Just test string'));

// Base
const findShortBase = (string) => {
  const wordArr = string.split(' ');
  const sortedWordsArr = wordArr.sort((a, b) => a.length - b.length);

  return sortedWordsArr[0];
};

console.log('Base:', findShortBase('The Smallest word in sentence'));
console.log('Base:', findShortBase('Just test string'));

// Advanced
const findShortAdvanced = (string) => {
  return string.split(' ').sort((a, b) => a.length - b.length)[0];
};

console.log('Advanced:', findShortAdvanced('The Smallest word in sentence'));
console.log('Advanced:', findShortAdvanced('Just test string'));

// ES6
const findShortES6 = (string) =>
  string.split(' ').sort((a, b) => a.length - b.length)[0];

console.log('ES6:', findShortES6('The Smallest word in sentence'));
console.log('ES6:', findShortES6('Just test string'));
