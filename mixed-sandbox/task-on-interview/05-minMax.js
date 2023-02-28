// Mine
const minMaxMine = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return [min, max];
};

console.log('Mine:', minMaxMine([2, 9, 10, 25, 47, 4, 1]));
console.log('Mine:', minMaxMine([2, 1]));
console.log('Mine:', minMaxMine([1]));

// Base
const minMaxBase = (arr) => {
  const res = [];
  const minValue = Math.min.apply(null, arr);
  const maxValue = Math.max.apply(null, arr);
  return res.push(minValue, maxValue);
};

console.log('Base:', minMaxBase([2, 9, 10, 25, 47, 4, 1]));
console.log('Base:', minMaxBase([2, 1]));
console.log('Base:', minMaxBase([1]));

// Advanced
const minMaxAdvanced = (arr) => {
  return [Math.min.apply(null, arr), Math.max.apply(null, arr)];
};

console.log('Mine:', minMaxAdvanced([2, 9, 10, 25, 47, 4, 1]));
console.log('Mine:', minMaxAdvanced([2, 1]));
console.log('Mine:', minMaxAdvanced([1]));

// ES6
const minMaxES6 = (arr) => [Math.min(...arr), Math.max(...arr)];

console.log('Mine:', minMaxES6([2, 9, 10, 25, 47, 4, 1]));
console.log('Mine:', minMaxES6([2, 1]));
console.log('Mine:', minMaxES6([1]));
