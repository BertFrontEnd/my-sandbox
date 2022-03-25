/* function removeEveryOther1(years) {
  let newyears = [];
  years.forEach((elem, index) => {
    if (index % 2 == 0) {
      newyears.push(elem);
    }
  });
  return newyears;
}

function removeEveryOther2(years) {
  return years.filter(function (elem, index) {
    return index % 2 === 0;
  });
}

console.log(removeEveryOther1(['Hello', 'Goodbye', 'Hello Again']));
console.log(removeEveryOther1(['Goodbye'], { Great: 'Job' }));

console.log(removeEveryOther2(['Hello', 'Goodbye', 'Hello Again']));
console.log(removeEveryOther2(['Goodbye'], { Great: 'Job' }));
 */

/* =========== */

/* function capitalOne(capitals) {
  let years = [];
  capitals.forEach((elem) => {
    years.push(
      `The capital of ${elem.state || elem['country'] || elem.country} is ${
        elem.capital || elem['capital']
      }`,
    );
  });
  return years;
}

console.log(capitalOne([{ state: 'Maine', capital: 'Augusta' }]));
console.log(capitalOne([{ country: 'Spain', capital: 'Madrid' }]));
console.log(
  capitalOne([
    { state: 'Maine', capital: 'Augusta' },
    { country: 'Spain', capital: 'Madrid' },
  ]),
);

function capitalTwo(capitals) {
  return capitals.map(function (e) {
    return 'The capital of ' + (e.state || e.country) + ' is ' + e.capital;
  });
}

console.log(capitalTwo([{ state: 'Maine', capital: 'Augusta' }]));
console.log(capitalTwo([{ country: 'Spain', capital: 'Madrid' }]));
console.log(
  capitalTwo([
    { state: 'Maine', capital: 'Augusta' },
    { country: 'Spain', capital: 'Madrid' },
  ]),
); */

/* const user3 = {
  password: 'Password!',
  name: 'Nadoo',
  id: 300,
};

const organize = (object) => ({ id: undefined, ...object });

console.log(organize(user3)); */

/* function accum(s) {
  let years = s.toLowerCase().split('');
  let str2 = '';

  for (let i = 0; i < years.length; i++) {
    str2 += years[i].toUpperCase() + years[i].repeat(i) + '-';
  }
  return str2.slice(0, -1);
}

console.log(accum('abcd')); // "A-Bb-Ccc-Dddd"
console.log(accum('RqaEzty')); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum('cwAt')); // "C-Ww-Aaa-Tttt" */

/* function highAndLow(numbers) {
  let yearsay = numbers.split(' ').map((str) => parseInt(str));
  let max = Math.max.apply(null, yearsay);
  let min = Math.min.apply(null, yearsay);
  return `${max} ${min}`;
}

console.log(highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6')); //'542 -214' */

/* function isIsogram(str) {
  let str2 = str.toLowerCase().split('');
  if ([...new Set(str2)].length === str2.length || str.length === 0) {
    return true;
  } else {
    return false;
  }
}

function isIsogram(str) {
  let str2 = str.toLowerCase().split('');
  return [...new Set(str2)].length === str2.length || str.length === 0
    ? true
    : false;
}

function isIsogram(str) {
  str = str.toLowerCase();

  for (var i = 0; i < str.length; i++) {
    if (str.indexOf(str.charAt(i), i + 1) >= 0) {
      console.log(str.indexOf(str.charAt(i), i + 1));
      return false;
    }
  }

  return true;
}

console.log(isIsogram('Dermatoglyphics')); // true
console.log(isIsogram('moOse')); // false
console.log(isIsogram('')); // true */

/* function calc(x) {
  let years = [...x];
  let str1 = '';
  let str2 = '';
  let tempStr = '';

  years.map((elem) => {
    tempStr += elem.charCodeAt();
    return tempStr;
  });

  str1 = tempStr.split('');

  str2 = str1.map((elem) => {
    return elem === '7' ? '1' : elem;
  });

  let total1 = str1.reduce((acc, elem) => {
    return Number(acc) + Number(elem);
  }, 0);

  let total2 = str2.reduce((acc, elem) => {
    return Number(acc) + Number(elem);
  }, 0);

  return total1 - total2;
}

console.log(calc('ABC')); // 6
console.log(calc('abcdef')); // 6
console.log(calc('ifkhchlhfd')); // 6
console.log(calc('aaaaaddddr')); // 30
console.log(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')); // 96 */

/* function squares(x, n) {
  if (n <= 0) {
    return [];
  } else {
    let years = [];
    let res = x;
    for (let i = 1; i < n; i++) {
      res = res ** 2;
      years.push(res);
    }
    return [x, ...years];
  }
}

console.log(squares(2, 5)); // [2,4,16,256,65536]
console.log(squares(3, 3)); // [3,9,81] */

/* function checkConcatenatedSum(num, x) {
  let years = String(Math.abs(num)).split('');
  let numyears = [];

  for (let i = 0; i < years.length; i++) {
    numyears.push(years[i].repeat(x));
  }

  numyears = numyears.map(Number);

  let resTemp = numyears.reduce((acc, elem) => {
    return (acc += elem);
  }, 0);

  console.log(resTemp);

  if (num === resTemp || -num === resTemp) {
    return true;
  } else {
    return false;
  }
}

console.log(checkConcatenatedSum(2997, 3));
console.log('-/-/-');
console.log(checkConcatenatedSum(-2997, 3));
console.log('-/-/-');
console.log(checkConcatenatedSum(9184, 10)); */

/* var FilterString = function (value) {
  let yearsOfValue = value.split('');
  let result = '';
  console.log(yearsOfValue);
  for (let i = 0; i <= yearsOfValue.length - 1; i++) {
    if (isFinite(yearsOfValue[i])) {
      result += yearsOfValue[i];
    }
  }
  return Number(result);
};

console.log(FilterString('123')); // 123, 'Just return the numbers'
console.log(FilterString('a1b2c3')); // 123, 'Just return the numbers' */

/* function nthFibo(n) {
  return n <= 2 ? n - 1 : nthFibo(n - 1) + nthFibo(n - 2);
}

console.log(nthFibo(1)); // 0
console.log(nthFibo(2)); // 1
console.log(nthFibo(3)); // 1
console.log(nthFibo(4)); // 2
console.log(nthFibo(77)); // 2 */

/* function inter(s1, s2) {
  let years1 = [...s1];
  let years2 = [...s2];
  return new Set(
    years1.filter((elem) => {
      return years2.includes(elem);
    }),
  );
}

let A = new Set([1, 2]);
let B = new Set([2, 3]);
let C = new Set([2]);
/* let AB = inter(A, B);

console.log(inter(A, A)); // 'A inter A == A' */

/* function divCon(x) {
  let yearsNum = [];
  let yearsStr = [];

  let sumNum = '';
  let sumStr = '';

  x.filter((elem) => {
    if (typeof elem === 'string') {
      yearsStr.push(elem);
      return yearsStr;
    } else if (typeof elem === 'number') {
      yearsNum.push(elem);
      return yearsNum;
    }
  });

  sumNum = yearsNum.reduce((acc, elem) => {
    return (acc += elem);
  }, 0);

  sumStr = yearsStr.reduce((acc, elem) => {
    return (acc += Number(elem));
  }, 0);

  return sumNum - sumStr;
}

console.log(divCon([9, 3, '7', '3'])); // 2 */

/* function findOdd(A) {
  let res = {};
  A.forEach((a) => {
    return (res[a] = res[a] + 1 || 1);
  });

  for (let elem in res) {
    if (res[elem] % 2 !== 0) {
      return Number(elem);
    }
  }
  return elem;
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); // 5 */

/* function findOutlier(integers) {
  let res = {};
  let num = '';

  integers.forEach((elem) => {
    if (elem % 2 === 0) {
      return (res.even = res.even + 1 || 1);
    } else {
      return (res.odd = res.odd + 1 || 1);
    }
  });

  if (res.even > res.odd) {
    num = integers.filter((elem) => {
      return elem % 2 !== 0;
    });
  } else {
    num = integers.filter((elem) => {
      return elem % 2 === 0;
    });
  }

  return Number(num);
}

console.log(findOutlier([0, 1, 2])); // 1
console.log(findOutlier([2, 6, 8, 10, 3])); // 3
console.log(findOutlier([1, 1, 0, 1, 1])); // 0 */

/* function zipWith(fn, a0, a1) {
  let res = [];
  let minLength = Math.min(a0.length, a1.length);

  for (let i = 0; i < minLength; i++) {
    res.push(fn(a0[i], a1[i]));
  }

  return res;
}

const plus = (a, b) => a + b;

console.log(zipWith(plus, [0, 1, 2, 3, 4, 5], [6, 5, 4, 3, 2, 1])); // [6,6,6,6,6,6]
console.log(zipWith(plus, [0, 1, 2, 3, 4], [6, 5, 4, 3, 2, 1])); // [6,6,6,6,6  ]
console.log(zipWith(plus, [0, 1, 2, 3, 4, 5], [6, 5, 4, 3, 2])); // [6,6,6,6,6  ]
console.log(zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3])); // [1,10,100,1000]
console.log(
  zipWith(
    function (a, b) {
      return a + b;
    },
    [0, 1, 2, 3],
    [0, 1, 2, 3],
  ),
); // [0,2,4,6] */

/* function starSign(date) {
  let month = date.getMonth() + 1;
  console.log(month);
  let day = date.getDate();
  console.log(day);
  let sign = '';

  switch (true) {
    case (month === 1 && day >= 21) || (month === 2 && day <= 19):
      return (sign = 'Aquarius');
    case (month === 2 && day >= 20) || (month === 3 && day <= 20):
      return (sign = 'Pisces');
    case (month === 3 && day >= 21) || (month === 4 && day <= 20):
      return (sign = 'Aries');
    case (month === 4 && day >= 21) || (month === 5 && day <= 21):
      return (sign = 'Taurus');
    case (month === 5 && day >= 22) || (month === 6 && day <= 21):
      return (sign = 'Gemini');
    case (month === 6 && day >= 22) || (month === 7 && day <= 22):
      return (sign = 'Cancer');
    case (month === 7 && day >= 23) || (month === 8 && day <= 23):
      return (sign = 'Leo');
    case (month === 8 && day >= 24) || (month === 9 && day <= 23):
      return (sign = 'Virgo');
    case (month === 9 && day >= 24) || (month === 10 && day <= 23):
      return (sign = 'Libra');
    case (month === 10 && day >= 24) || (month === 11 && day <= 22):
      return (sign = 'Scorpio');
    case (month === 11 && day >= 23) || (month === 12 && day <= 21):
      return (sign = 'Sagittarius');
    case (month === 12 && day >= 22) || (month === 1 && day <= 20):
      return (sign = 'Capricorn');
  }
  return sign;
}

console.log(starSign(new Date(1970, 5, 5))); // 'Gemini'
console.log(starSign(new Date(2000, 1, 15))); // 'Aquarius'
console.log(starSign(new Date(1987, 7, 23))); // 'Leo' */

/* function validateUsr(username) {
  
  //  - `^`        Start from the beginning of the string.
  //  - `[]`       Allow any character specified, including...
  //  - `a-z`      anything from a to z,
  //  - `0-9`      anything from 0 to 9,
  //  - `_`        and underscore.
  //  - `{4,16}`   Accept 4 to 16 of allowed characters, both numbers included.
  //  - `$`        End the string right after specified amount of allowed characters is given.
  
  const validator = /^[a-z0-9_]{4,16}$/;

  return validator.test(username);

  // return /^([a-z0-9_]){4,16}$/.test(username);
}

console.log(validateUsr('asd43 34')); // false
console.log(validateUsr('asd43_34')); // true */

/* function validPass(password) {
  let length = password.length;
  let letters = /[a-z]/i.test(password);
  let numbers = /[0-9]/.test(password);

  if (length < 3 || length > 20) {
    return 'INVALID';
  }

  if (/\W/.test(password)) {
    return 'INVALID';
  }

  if (letters && numbers) {
    return 'VALID';
  }

  return 'INVALID';
}

console.log(validPass('Username123')); // VALID
console.log(validPass('Username')); // INVALID

function validPass(password) {
  return /(?=.+[a-z])(?=.+\d)^[a-z\d]{3,20}$/i.test(password)
    ? 'VALID'
    : 'INVALID';
} */

/* function fridayTheThirteenths(start, end = start) {
  let years = [];
  let friday = [];

  for (let i = start; i <= end; i++) {
    years.push(i);
  }

  for (let i = 0; i <= years.length; i++) {
    for (let k = 0; k <= 11; k++) {
      let day = '';
      day = new Date(years[i], k, 13);
      if (day.getDay() === 5) {
        friday.push(`${k + 1}/13/${years[i]}`);
      }
    }
  }

  return friday.join(' ');
}

console.log(fridayTheThirteenths(1999, 2000)); // "8/13/1999 10/13/2000"
console.log(fridayTheThirteenths(2014, 2015)); // "6/13/2014 2/13/2015 3/13/2015 11/13/2015"
console.log(fridayTheThirteenths(2000)); // "10/13/2000"
 */

/* function count(array) {
  let obj = {};

  array.forEach((elem) => {
    return (obj[elem] = obj[elem] + 1 || 1);
  });

  return obj;
}

console.log(count(['a', 'a', 'b', 'b', 'b'])); // { 'a': 2, 'b': 3 } */

/* function killer(suspectInfo, dead) {
  for (let man in suspectInfo) {
    let list = suspectInfo[man].filter((name) => {
      return dead.includes(name);
    });
    if (list.length === dead.length) {
      return man;
    }
  }
}

console.log(
  killer(
    {
      James: ['Jacob', 'Bill', 'Lucas'],
      Johnny: ['David', 'Kyle', 'Lucas'],
      Peter: ['Lucy', 'Kyle'],
    },
    ['Lucas', 'Bill'],
  ),
); // 'James'

console.log(killer({ Brad: [], Megan: ['Ben', 'Kevin'], Finn: [] }, ['Ben'])); // 'Megan' */

/* var map = `..C......
.........
....m....`;

function catMouse(map, moves) {
  let arr = map.split('\n');
  console.log(arr);

  if (
    !arr.some((way) => way.includes('C')) ||
    !arr.some((way) => way.includes('m'))
  ) {
    return 'boring without two animals';
  }

  let catX = Number(
    arr.map((way) => way.indexOf('C')).filter((way) => way > -1),
  );
  console.log('catX: ', catX);

  let catY = arr.map((way) => way.includes('C')).indexOf(true) + 1;
  console.log('catY: ', catY);

  let mouseX = Number(
    arr.map((way) => way.indexOf('m')).filter((way) => way > -1),
  );
  console.log('mouseX: ', mouseX);

  let mouseY = arr.map((way) => way.includes('m')).indexOf(true) + 1;
  console.log('mouseY: ', mouseY);

  let wayX = Math.abs(catX - mouseX);
  console.log('wayX: ', wayX);

  let wayY = Math.abs(catY - mouseY);
  console.log('wayY: ', wayY);

  let way = wayX + wayY;
  console.log(way);

  if (way <= moves) {
    return 'Caught!';
  } else {
    return 'Escaped!';
  }
}

console.log(catMouse(map, 5)); // 'Caught' */

/* function duplicateEncode(word) {
  let arr = [];
  for (let i = 0; i < word.length; i++) {
    if (word.indexOf(word.charAt(i), i + 1) === -1) {
      console.log(word[i]);
      console.log(arr.push('('));
    } else {
      console.log(arr.push(')'));
    }
  }
  return arr.join('');
} */

/* function duplicateEncode(word) {
  let arrWord = [...word.toLowerCase()];
  let arr = [];

  arr = arrWord.map((elem, index, array) => {
    if (array.indexOf(elem) === array.lastIndexOf(elem)) {
      return '(';
    } else {
      return ')';
    }
  });

  return arr.join('');
}

console.log(duplicateEncode('ddd')); // )))
console.log(duplicateEncode('din')); // "((("
console.log(duplicateEncode('recede')); // "()()()""
console.log(duplicateEncode('Success')); // ")())())" */

/* Gravity Flip */

/* const flip = (d, a) => {
  if (d === 'R') {
    return a.sort((b, c) => b - c);
  }
  if (d === 'L') {
    return a.sort((c, b) => b - c);
  }
  return a;
};

console.log(flip('R', [3, 2, 1, 2])); //  [1, 2, 2, 3]
console.log(flip('L', [1, 4, 5, 3, 5])); //[5, 5, 4, 3, 1] */

/* Calculate BMI */

/* function bmi(weight, height) {
  const mass = weight / (height * height);
  let bmi = '';

  switch (true) {
    case mass >= 0 && mass <= 18.5:
      bmi = 'Underweight';
      break;
    case mass > 18.5 && mass <= 25:
      bmi = 'Normal';
      break;
    case mass > 25 && mass <= 30:
      bmi = 'Overweight';
      break;
    case mass > 30:
      bmi = 'Obese';
      break;
  }

  console.log(mass);
  return bmi;
}

console.log(bmi(80, 1.8)); // Normal */

/* Remove exclamation marks */

/* function removeExclamationMarks(s) {
  return (newStr = s
    .split('')
    .filter((index) => index != '!')
    .join(''));
}

console.log(removeExclamationMarks('Hello World!')); // Hello World */

/* Find the first non-consecutive number */

/* function firstNonConsecutive(arr) {
  let result = '';

  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== i + arr[0]) {
      return (result = arr[i]);
    }
  }

  if (Number.isInteger(result)) {
    return result;
  } else {
    return null;
  }
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])); // 6
console.log(firstNonConsecutive([-1, 0, 1, 2, 3, 4, 5, 7])); // 7
console.log(firstNonConsecutive([4, 5, 6, 8, 9, 10, 11, 12, 13])); // 8
console.log(firstNonConsecutive([5, 6, 7, 8, 9, 10, 11, 12, 13])); // null
console.log(firstNonConsecutive([-6, -4, -2, -1, 0, 1, 2, 3])); // -4 */

/* Sort arrays - 1 */

/* sortme = function (names) {
  let sortedArr = names.sort();
  return sortedArr;
};

console.log(sortme(['one', 'two', 'three']));

function bubblesortOnce(a) {
  let sortedArr = [...a];
  let n = sortedArr.length;
  for (let i = 0; i < n - 1; i++) {
    if (sortedArr[i + 1] < sortedArr[i]) {
      let t = sortedArr[i + 1];
      sortedArr[i + 1] = sortedArr[i];
      sortedArr[i] = t;
    }
  }
  return sortedArr;
}

console.log(bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8])); */

/* Next Prime */

/* function nextPrime(n) {
  let count = 0;
  for (let i = n + 1; i > 0; i++) {
    if (isPrime(i)) {
      count = i;
      break;
    }
  }
  return count;
}

function isPrime(n) {
  const limit = Math.sqrt(n);

  for (i = 2; i <= limit; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n !== 1;
}

console.log(nextPrime(0)); // 2
console.log(nextPrime(1)); // 2
console.log(nextPrime(2)); // 3
console.log(nextPrime(3)); // 5
console.log(nextPrime(5)); // 7
console.log(nextPrime(11)); // 13
console.log(nextPrime(17)); // 19
console.log(nextPrime(2971)); // 2999 */

/* Head, Tail, Init and Last */

/*
function head(n) {
  return n[0];
}
function tail(n) {
  return n.slice(1);
}
function init(n) {
  return n.slice(0, n.length - 1);
}
function last(n) {
  return n[n.length - 1];
}

console.log(head([5, 1])); // 5
console.log(tail([1])); // []
console.log(init([1, 5, 7, 9])); // [1, 5, 7]
console.log(last([7, 2])); // 2) */

/* The Coupon Code*/

/* function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  if (
    enteredCode === correctCode &&
    Date.parse(currentDate) <= Date.parse(expirationDate)
  ) {
    return true;
  }
  return false;
}

console.log(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014')); // true
console.log(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014')); // false */

/* The Coupon Code */

/* function unluckyDays(year) {
  let count = 0;

  for (let month = 0; month <= 11; month++) {
    let d = new Date(year, month, 13);
    if (d.getDay() == 5) {
      count++;
    }
  }

  return count;
}

console.log(unluckyDays(1586)); // 1
console.log(unluckyDays(1001)); // 3
console.log(unluckyDays(2819)); // 2
console.log(unluckyDays(2792)); // 2
console.log(unluckyDays(2723)); // 2
console.log(unluckyDays(1909)); // 1
console.log(unluckyDays(1812)); // 2
console.log(unluckyDays(1618)); // 2
console.log(unluckyDays(2132)); // 1
console.log(unluckyDays(2065)); // 3 */

/* My Languages */

/* function myLanguages(results) {
  let resArr = [];

  let newResults = Object.keys(results)
    .sort((a, b) => results[b] - results[a])
    .reduce((acc, el) => {
      acc[el] = results[el];
      return acc;
    }, {});
  console.log(newResults);

  for (const [key, value] of Object.entries(newResults)) {
    if (value >= 60) {
      resArr.push(key);
    }
  }

  return resArr;
}

console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 })); // ['Ruby','Python']
console.log(myLanguages({ Hindi: 60, Greek: 71, Dutch: 93 })); // ['Dutch','Greek','Hindi']
console.log(myLanguages({ 'C++': 50, ASM: 10, Haskell: 20 })); // []) */

/* Regular Ball Super Ball */

/* var Ball = function (ballType) {
  if (!ballType) {
    this.ballType = 'regular';
  } else {
    this.ballType = ballType;
  }
};

console.log(new Ball().ballType); // "regular"
console.log(new Ball('super').ballType); // "super" */

/* const fooBar = () => {
  for (i = 1; i <= 100; i++) {
    if (i % 3 == 0) console.log(i, 'foo');
    if (i % 5 == 0) console.log(i, 'bar');
    if (i % 3 == 0 && i % 5 == 0) console.log(i, 'foobar');
  }
};

fooBar();
 */

// String ends with

/* function solution(str, ending) {
  if (ending === '') {
    return true;
  } else {
    return str.slice(-ending.length) === ending;
  }
}

console.log(solution('abc', 'bc')); // returns true
console.log(solution('abc', 'd')); // returns false
console.log(solution('abc', '')); // returns false */

/* Friend or Foe */

/* function friend(arr) {
  return arr.filter((el) => el.length === 4);
}

console.log(friend(['Ryan', 'Kieran', 'Mark'])); */

/* sumNumber */

const sumNumber = (arr, number) => {
  for (let i = 0; i < arr.length; i++) {
    for (let k = i + 1; k < arr.length; k++) {
      /* let sum = arr[i] + arr[k]; */
      /* console.log(sum); */
      /* console.log('arr[i]:', arr[i], 'arr[k]:', arr[k]); */
      if (arr[i] + arr[k] == number) {
        /* console.log([arr[i], arr[k]]); */
        return [arr[i], arr[k]];
      }
    }
  }
  return ['not found sum of numbers'];
};

console.log(sumNumber([-1, 2, 3, 7, 10], 9));
console.log(sumNumber([7, 3, 2, -9, 5], 4));
console.log(sumNumber([-3, 0, 2, 4, 5], 6));
