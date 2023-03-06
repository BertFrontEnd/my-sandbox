// Mine

const findVowelsMine = (string) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let counter = 0;

  [...string].forEach((el) =>
    vowels.includes(el.toLowerCase()) ? counter++ : 0,
  );

  return counter;
};

console.log('Mine:', findVowelsMine('hEllo'));
console.log('Mine:', findVowelsMine('hello world'));

// Base
const findVowelsBase = (string) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let char of string.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
};

console.log('Base:', findVowelsBase('hello'));
console.log('Base:', findVowelsBase('hello world'));

// Advanced
const findVowelsAdvanced = (string) => {
  const matches = string.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
};

console.log('Advanced:', findVowelsAdvanced('hello'));
console.log('Advanced:', findVowelsAdvanced('hello world'));
