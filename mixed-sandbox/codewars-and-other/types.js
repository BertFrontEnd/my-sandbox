// Find the Squares

console.log('Find the Squares:');

const findSquares = (num) => {
  let max = Math.ceil(num / 2);
  let min = max - num;

  return `${max * max}-${min * min}`;
};

console.log(findSquares(9)); // 25-16
console.log('===');
console.log(findSquares(5)); // 9-4
console.log('===');
console.log(findSquares(7)); // 16-9

// Sum of Triangular Numbers

console.log('Sum of Triangular Numbers:');

function sumTriangularNumbers(n) {
  let temp = 0;
  let res = 0;

  if (n > 0) {
    for (let i = 1; i <= n; i++) {
      temp = temp + i;
      res = res + temp;
    }
    return res;
  } else {
    return 0;
  }
}

console.log(sumTriangularNumbers(6)); // 56
console.log('===');
console.log(sumTriangularNumbers(34)); // 7140
console.log('===');
console.log(sumTriangularNumbers(-291)); // 0
console.log('===');
console.log(sumTriangularNumbers(943)); // 140205240
console.log('===');
console.log(sumTriangularNumbers(-971)); // 0

// Rearrange Number to Get its Maximum

console.log('Rearrange Number to Get its Maximum:');

let maxRedigit = function (num) {
  let arr = num.toString().split('');

  if (arr.length === 3) {
    let arrNum = arr.map((el) => Number(el));
    let arrSort = arrNum.sort((b, a) => a - b);
    let res = arrSort.join('');
    return Number(res);
  } else {
    return null;
  }
};

console.log(maxRedigit(123)); // 321
console.log('===');
console.log(maxRedigit(-1)); // null
console.log('===');
console.log(maxRedigit(0)); // null
console.log('===');

// Credit Card Mask

console.log('Credit Card Mask:');

function maskify(cc) {
  let arr = cc.split('');

  for (let i = 0; i < arr.length - 4; i++) {
    arr[i] = '#';
  }

  arr = arr.join('');
  return arr;
}

console.log(maskify('4556364607935616')); // '############5616'
console.log('===');
console.log(maskify('1')); // '1'
console.log('===');
console.log(maskify('11111')); // '#1111'
console.log('===');

// Complementary DNA

console.log('Complementary DNA:');

function DNAStrand(dna) {
  let arr = dna.split('');
  let res = '';

  for (let i = 0; i <= arr.length; i++) {
    switch (true) {
      case arr[i] === 'G':
        res += 'C';
        break;
      case arr[i] === 'T':
        res += 'A';
        break;
      case arr[i] === 'A':
        res += 'T';
        break;
      case arr[i] === 'C':
        res += 'G';
        break;
    }
  }

  return res;
}

console.log(DNAStrand('AAAA')); // 'TTTT', 'String AAAA is'
console.log('===');
console.log(DNAStrand('ATTGC')); // 'TAACG', 'String ATTGC is'
console.log('===');
console.log(DNAStrand('GTAT')); // 'CATA', 'String GTAT is'
console.log('===');

// Make a function that does arithmetic!

console.log('Make a function that does arithmetic!:');

function arithmetic(a, b, operator) {
  let result = '';

  switch (true) {
    case operator === 'add':
      result = a + b;
      break;
    case operator === 'subtract':
      result = a - b;
      break;
    case operator === 'multiply':
      result = a * b;
      break;
    case operator === 'divide':
      result = a / b;
      break;
  }

  return result;
}

console.log(arithmetic(1, 2, 'add')); // 3, "'add' should return the two numbers added together!"
console.log(arithmetic(8, 2, 'subtract')); // 6, "'subtract' should return a minus b!"
console.log(arithmetic(5, 2, 'multiply')); // 10, "'multiply' should return a multiplied by b!"
console.log(arithmetic(8, 2, 'divide')); // 4, "'divide' should return a divided by b!"

// Basic JS - Calculating averages

console.log('Basic JS - Calculating averages:');

function calc(...arg) {
  if (arguments.length === 0) {
    return 0;
  } else {
    let arr = [...arg];
    let sum = arr.reduce((acc, elem) => acc + elem);
    let res = sum / arr.length;
    return res;
  }
}

console.log(calc(1, 1)); // 1
console.log(calc()); // 0

// Whose bicycle?

console.log('Whose bicycle?:');

function whoseBicycle(diary1, diary2, diary3) {
  let firstSunArr = Object.values(diary1);
  let first = firstSunArr.reduce((acc, elem) => acc + elem);
  let secondSunArr = Object.values(diary2);
  let second = secondSunArr.reduce((acc, elem) => acc + elem);
  let thirdSunArr = Object.values(diary3);
  let third = thirdSunArr.reduce((acc, elem) => acc + elem);

  if (first > second && first > third) {
    return 'I need to buy a bicycle for my first son.';
  }

  if (second > first && second > third) {
    return 'I need to buy a bicycle for my second son.';
  }

  if (third > first && third > second) {
    return 'I need to buy a bicycle for my third son.';
  }

  if (
    first === second ||
    second === third ||
    first === third ||
    (first === second && first === third && second === third)
  ) {
    return 'I need to buy a bicycle for my third son.';
  }
}

console.log(
  whoseBicycle(
    {
      algebra: 6,
      history: 7,
      physics: 8,
      geography: 9,
      chemistry: 10,
    },
    {
      algebra: 8,
      history: 7,
      physics: 8,
      geography: 9,
      chemistry: 10,
    },
    {
      algebra: 6,
      history: 5,
      physics: 5,
      geography: 9,
      chemistry: 10,
    },
  ),
); //  'I need to buy a bicycle for my second son.'

// Are arrow functions odd?

console.log('Are arrow functions odd?:');

function odds(values) {
  return values.filter((elem) => elem % 2 !== 0);
}

console.log(odds([])); // []
console.log(odds([2, 4, 6])); // []
console.log(odds([1, 3, 5])); // [1, 3, 5]
console.log(odds([1, 2, 3, 4, 5, 6])); // [1, 3, 5]

// Test Your Knowledge Of Function Scope

console.log('Test Your Knowledge Of Function Scope:');

function curry(f) {
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}

function curriedAdd(a, b) {
  return a + b;
}

let add = curry(curriedAdd);

console.log(add(2)(5)); // 7,    'Should return the addition of these invocations!'
console.log(add(14)(25)); // 39, 'Should return the addition of these invocations!'

// Run your String

console.log('Run your String:');

function runYourString(arg, obj) {
  let newFunc = new Function(obj.param, obj.func);
  return newFunc(arg);
}

console.log(runYourString(true, { param: 'val', func: 'return val' })); // true

// Factorial Factory

console.log('Factorial Factory:');

function factorial(n) {
  let num = 1;

  if (n > 0) {
    for (let i = 1; i <= n; i++) {
      num = num * i;
    }
    return num;
  } else if (n === 0) {
    return 1;
  } else {
    return null;
  }
}

console.log(factorial(2)); //  2, 'Your math may be incorrect'
console.log(factorial(5)); //  120, 'Your math may be incorrect'
console.log(factorial(-1)); //  null, "Don't forget to check for negatives!"

// Recursion 101

console.log('Recursion 101:');

function solve(a, b) {
  while (a >= 2 * b || b >= 2 * a) {
    if (a === 0 || b === 0) {
      return [a, b];
    } else if (a >= 2 * b) {
      a = a - 2 * b;
    } else if (b >= 2 * a) {
      b = b - 2 * a;
    }
  }
  return [a, b];
}

console.log(solve(6, 19)); // [6, 7]
console.log(solve(2, 1)); // [0, 1]
console.log(solve(22, 5)); // [0, 1]
console.log(solve(2, 10)); // [2, 2]

// Decimal to binary converter

console.log('Decimal to binary converter:');

function decToBin(d) {
  let binary = '';

  if (d > 0) {
    while (Math.ceil(d / 2) > 0) {
      binary = (d % 2) + binary;
      d = Math.floor(d / 2);
    }

    return binary;
  }

  if (d === 0) {
    return String(d);
  }
}

console.log(decToBin(0)); // '0'
console.log(decToBin(1)); // '1'
console.log(decToBin(2)); // '10'
console.log(decToBin(3)); // '11'
console.log(decToBin(21)); // '10101'
console.log(decToBin(31)); // '11111'

// Find the stray number

console.log('Find the stray number:');

function stray(numbers) {
  let obj = {};
  numbers.filter((item) => {
    obj[item] = obj[item] + 1 || 1;
    return obj[item];
  });

  let targetNumberArr = Object.values(obj);
  console.log(targetNumberArr);

  /*   return obj; */
}

console.log(stray([1, 1, 2])); // 2
console.log(stray([(17, 17, 3, 17, 17, 17, 17)])); // 3
