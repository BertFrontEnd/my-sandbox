// Mine

const toCapitalCaseMine = (string) =>
  string
    .split(' ')
    .map((el) => el[0].toUpperCase().concat(el.slice(1)))
    .join(' ');

console.log(
  'Mine:',
  toCapitalCaseMine(
    'Lorem ipsum is simply dummy text of the printing, typesetting',
  ),
);

// Base
const toCapitalCaseBase = (string) => {
  const arr = string.split(' ');
  const resArr = [];

  for (let i = 0; i < arr.length; i++) {
    resArr.push(arr[i][0].toUpperCase() + arr[i].slice(1));
  }

  return resArr.join(' ');
};

console.log(
  'Base:',
  toCapitalCaseBase(
    'Lorem ipsum is simply dummy text of the printing, typesetting',
  ),
);

// Advanced
const toCapitalCaseAdvanced = (string) =>
  string
    .split(' ')
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(' ');

console.log(
  'Advanced:',
  toCapitalCaseAdvanced(
    'Lorem ipsum is simply dummy text of the printing, typesetting',
  ),
);
