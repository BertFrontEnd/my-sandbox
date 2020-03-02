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

//5:
console.log('5:');
function cake(x, y) {
  let alphabetEven = 0;
  let indexEven = 0;
  let sum = 0;
  for (let i = 0; i < y.length; i++) {
    if (i % 2 === 0) {
      indexEven = indexEven + y.charCodeAt(i);
    } else {
      alphabetEven = alphabetEven + (y.charCodeAt(i) - 96);
    }
    sum = alphabetEven + indexEven;
  }
  if (sum > x * 0.7) {
    return 'Fire!';
  } else {
    return 'That was close!';
  }
}

console.log(cake(900, 'abcdef'));
console.log(cake(56, 'ifkhchlhfd'));
console.log(cake(256, 'aaaaaddddr'));

//6:
console.log('6:');
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

//7:
console.log('7:');
function century(year) {
  let centuryCount = 0;
  while (year > 0) {
    year = year - 100;
    centuryCount = centuryCount + 1;
  }
  return centuryCount;
}

console.log(century(1705));
console.log(century(1900));
console.log(century(1601));

//8:
console.log('8:');
function mygcd(x, y) {
  if (y === 0) {
    return x;
  } else {
    return mygcd(y, x % y);
  }
}

console.log(mygcd(30, 12));
console.log(mygcd(8, 9));
console.log(mygcd(1, 1));
console.log(mygcd(680, 612));

//9:
console.log('9:');
function factorial(n) {
  if (n < 0 || n > 12) {
    throw RangeError;
  } else if (n === 0) {
    return 1;
  } else {
    let fn = 1;
    for (let i = 1; i <= n; i++) {
      fn *= i;
    }
    return fn;
  }
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));

//10:
console.log('10:');
function findDup(arr) {
  arr.sort(function(a, b) {
    return a - b;
  });
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      return arr[i];
    }
  }
}

console.log(findDup([1, 3, 2, 5, 4, 5, 7, 6]));

//11:
console.log('11:');
function isPrime(num) {
  if (num < 2) {
    return false;
  } else if (num === 2) {
    return true;
  }
  let i = 2;
  const limit = Math.sqrt(num);
  while (i <= limit) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
}

console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(73));
console.log(isPrime(75));
console.log(isPrime(-1));

//12:
console.log('12:');
function distinct(a) {
  const result = new Set(a);
  return Array.from(result);
}

/* function distinct2(a) {
  return a.filter(function (item, index) {
    return a.indexOf(item) === index;
  })
} */

console.log(distinct([1]));
console.log(distinct([1, 2]));
console.log(distinct([1, 1, 2]));

//13:
console.log('13:');
function positiveSum(arr) {
  let tempArr = [];
  arr.filter(function(item) {
    if (item > 0) {
      tempArr.push(item);
    }
  });
  let result = tempArr.reduce(function(acc, num) {
    return acc + num;
  }, 0);
  return result;
}

console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([1, -2, 3, 4, 5]));
console.log(positiveSum([]));
console.log(positiveSum([-1, -2, -3, -4, -5]));
console.log(positiveSum([-1, 2, 3, 4, -5]));

//14:
console.log('14:');
function fizzbuzz(n) {
  arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  resultArr = [];
  arr.filter(function(item) {
    if (item % 3 === 0 && item % 5 === 0) {
      resultArr.push('FizzBuzz');
    } else if (item % 5 === 0) {
      resultArr.push('Buzz');
    } else if (item % 3 === 0) {
      resultArr.push('Fizz');
    } else {
      resultArr.push(item);
    }
  });
  return resultArr;
}

console.log(fizzbuzz(15));

//15:
console.log('15:');
function multiplyAll(arr) {
  return function(n) {
    let returnArr = [];
    arr.filter(function(item) {
      returnArr.push(item * n);
    });
    return returnArr;
  };
}

console.log(multiplyAll([1, 2, 3])(1));
console.log(multiplyAll([1, 2, 3])(2));
console.log(multiplyAll([1, 2, 3])(0));
console.log(multiplyAll([])(10));

//16:
console.log('16:');
function findShort(s) {
  let arr = s.split(' '); /* .toLowerCase() */
  let minLenArr = [];
  arr.filter(function(item) {
    return minLenArr.push(item.length);
  });
  minLenArr.sort(function(a, b) {
    return a - b;
  });
  for (let i = 0; i < minLenArr.length; i++) {
    if (
      minLenArr[i] < minLenArr[i + 1] ||
      minLenArr[i] === minLenArr[i + 1] ||
      minLenArr.length === 1
    ) {
      return minLenArr[i];
    }
  }
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'));
console.log(
  findShort(
    'turns out random test cases are easier than writing out basic oness'
  )
);
console.log(
  findShort(
    'LiteCoin Ripple Ripple Bitcoin Bitcoin Dash Dogecoin MadeSafeCoin Dash 21inc BTC DarkCoin Bitcoin LiteCoin Lisk'
  )
);
console.log(findShort('Dash Mine'));
console.log(findShort('MadeSafeCoin'));

//17:
console.log('17:');
function squareDigits(num) {
  let numArr = num.toString().split('');
  let newArr = [];
  numArr.filter(function(item) {
    return newArr.push(Math.pow(item, 2));
  });
  return parseInt(newArr.join(''), 10);
}

console.log(squareDigits(9119));

//18:
console.log('18');
function processArray(arr, callback) {
  return arr.map(callback);
}

let myCallback = function(a) {
  return a + 0;
};

console.log(processArray([8, 16, 4, 14, 10], myCallback));
console.log(processArray([12, 13, 14, 6, 7], myCallback));
console.log(processArray([-1, 1, 8, 27, 64, 125], myCallback));

/* function doHomework(subject, callback) {
  console.log(`Starting my ${subject} homework`);
  callback();
}
function alertFinished() {
  console.log('Finish my homework');
}
doHomework('math', alertFinished); */

//19:
console.log('19:');
function count(string) {
  let arr = string.toLowerCase().split("");
  let obj = {};
  arr.filter(function(item) {
    obj[item] = obj[item] + 1 || 1;
    return obj[item];
  });
  return obj;
}

console.log(count("aba"));
console.log(count(""));

//20:
console.log('20:');
function validateUsr(username) {
  res = /^[a-z0-9-_]{4,16}$/.test(username);
  return res;
}

console.log(validateUsr('asddsa'));
console.log(validateUsr('a'));
console.log(validateUsr('Hass'));
console.log(validateUsr('Hasd_12assssssasasasasasaasasasasas'));
console.log(validateUsr('____'));
console.log(validateUsr('012'));
console.log(validateUsr('p1pp1'));
console.log(validateUsr('asd43 34'));
console.log(validateUsr('asd43_34'));

//21:
console.log('21:');
String.prototype.isLetter = function() {};