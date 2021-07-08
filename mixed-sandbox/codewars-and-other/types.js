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

function calc(...arguments) {
  if (arguments.length === 0) {
    return 0;
  } else {
    let arr = [...arguments];
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

  if ((first === second || second === third || first === third) || (first === second && first === third && second === third)) {
    return 'I need to buy a bicycle for my third son.';
  }
}

console.log(whoseBicycle({
  'algebra': 6,
  'history': 7,
  'physics': 8,
  'geography': 9,
  'chemistry': 10,
},
{
  'algebra': 8,
  'history': 7,
  'physics': 8,
  'geography': 9,
  'chemistry': 10,
},
{
  'algebra': 6,
  'history': 5,
  'physics': 5,
  'geography': 9,
  'chemistry': 10,
})); //  'I need to buy a bicycle for my second son.'
