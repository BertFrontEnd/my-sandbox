//1:
console.log('1:');
function solution(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

console.log(solution('JavaScript'));
console.log(solution('BertFrontEnd'));
console.log(solution('RSSchool'));
console.log(solution('Замок'));

//2:
console.log('2:');
function removeChar(str) {
  return str.substr(1, str.length - 2);
}

console.log(removeChar('JavaScript'));
console.log(removeChar('BertFrontEnd'));
console.log(removeChar('RSSchool'));
console.log(removeChar('Замок'));

//3:
console.log('3:');
function isPalindrome(line) {
  let string = line.toString().toLowerCase();
  let strLength = string.length;
  for (i = 0; i < strLength; i++) {
    if (string[i] === string[strLength - 1 - i]) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(isPalindrome('anna'));
console.log(isPalindrome('walter'));
console.log(isPalindrome(12321));
console.log(isPalindrome(123456));

//4:
console.log('4:');
let isAnagram = function(test, original) {
  return (
    test
      .toLowerCase()
      .split('')
      .sort()
      .join('') ===
    original
      .toLowerCase()
      .split('')
      .sort()
      .join('')
  );
};

console.log(isAnagram('foefet', 'toffee'));
console.log(isAnagram('Buckethead', 'DeathCubeK'));
console.log(isAnagram('Twoo', 'WooT'));
console.log(isAnagram('dumble', 'bumble'));
console.log(isAnagram('ound', 'round'));
console.log(isAnagram('apple', 'pale'));

//6:
console.log('4:');
function even_or_odd(number) {
  if (number % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

console.log(even_or_odd(2));
console.log(even_or_odd(0));
console.log(even_or_odd(7));
console.log(even_or_odd(1));
