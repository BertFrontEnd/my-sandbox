import './style.scss';

const stringOne = 'stringOne';
const stringTwo = 'stringTwo';

function replaceAndUpper(string: string) {
  if (string.includes('One')) {
    return string
      .toString()
      .replace('One', 'Two')
      .toUpperCase()
      .concat(' test1');
  }
  return string.replace('Two', 'One').toUpperCase().concat(' test2');
}

console.log(replaceAndUpper(stringOne));
console.log(replaceAndUpper(stringTwo));
