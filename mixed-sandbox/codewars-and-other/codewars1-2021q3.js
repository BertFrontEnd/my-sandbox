console.log('Absent vowel:');

function absentVowel(x) {
  if (!x.match(/a/)) {
    return 0;
  }
  if (!x.match(/e/)) {
    return 1;
  }
  if (!x.match(/i/)) {
    return 2;
  }
  if (!x.match(/o/)) {
    return 3;
  }
  if (!x.match(/u/)) {
    return 4;
  }
}

console.log(absentVowel('John Doe hs seven red pples under his bsket')); // 0
console.log(absentVowel('Bb Smith sent us six neatly arranged range bicycles')); // 3

console.log('Jaden Casing Strings:');

String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map((elem) => elem[0].toUpperCase() + elem.slice(1))
    .join(' ');
};

console.log("How can mirrors be real if our eyes aren't real".toJadenCase()); // How Can Mirrors Be Real If Our Eyes Aren't Real

console.log('---');
console.log('Nickname Generator:');

function nicknameGenerator(name) {
  if (name.length <= 3) {
    return 'Error: Name too short';
  }

  if (name[2] === 'y') {
    return `${name.slice(0, 3)}`;
  }

  if (
    name[2] === 'a' ||
    name[2] === 'e' ||
    name[2] === 'i' ||
    name[2] === 'o' ||
    name[2] === 'u'
  ) {
    return name.slice(0, 4);
  } else {
    return name.slice(0, 3);
  }
}

console.log(nicknameGenerator('Jimmy')); // 'Jim'
console.log(nicknameGenerator('Samantha')); // 'Sam'
console.log(nicknameGenerator('Sam')); // 'Error: Name too short'
console.log(nicknameGenerator('Kayne')); // 'Kay', "'y' is not a vowel"
console.log(nicknameGenerator('Melissa')); // 'Mel'
console.log(nicknameGenerator('James')); // 'Jam'
console.log(nicknameGenerator('Jeannie')); // 'Jean'
console.log(nicknameGenerator('Douglas')); // 'Doug'
console.log(nicknameGenerator('Gregory')); // 'Greg'

console.log('---');
console.log('Nickname Generator 2:');

function nicknameGenerator(name) {
  if (name.length < 4) return 'Error: Name too short';
  if (name[2].match(/[aeuio]/)) return name.slice(0, 4);
  return name.slice(0, 3);
}

console.log(nicknameGenerator('Jimmy')); // 'Jim'
console.log(nicknameGenerator('Samantha')); // 'Sam'
console.log(nicknameGenerator('Sam')); // 'Error: Name too short'
console.log(nicknameGenerator('Kayne')); // 'Kay', "'y' is not a vowel"
console.log(nicknameGenerator('Melissa')); // 'Mel'
console.log(nicknameGenerator('James')); // 'Jam'
console.log(nicknameGenerator('Jeannie')); // 'Jean'
console.log(nicknameGenerator('Douglas')); // 'Doug'
console.log(nicknameGenerator('Gregory')); // 'Greg'

console.log('---');
console.log('Digits explosion:');

function explode(s) {
  let result = '';
  [...s].map((el) => (result += el.repeat(el)));
  return result;
}

console.log(explode('312')); // '333122'
console.log(explode('102269')); // '12222666666999999999'
