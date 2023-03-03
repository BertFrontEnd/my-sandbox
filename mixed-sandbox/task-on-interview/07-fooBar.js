// Mine1
const fooBarMine1 = (number) => {
  const arr = [];

  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push('foobar');
    } else if (i % 3 === 0) {
      arr.push('foo');
    } else if (i % 5 === 0) {
      arr.push('bar');
    } else {
      arr.push(i);
    }
  }

  return arr;
};

console.log('Mine1:', fooBarMine1(15));

// Mine2
const fooBarMine2 = (number) => {
  const arr = [];

  for (let i = 1; i <= number; i++) {
    switch (true) {
      case i % 3 === 0 && i % 5 === 0:
        arr.push('foobar');
        break;
      case i % 3 === 0:
        arr.push('foo');
        break;
      case i % 5 === 0:
        arr.push('bar');
        break;
      default:
        arr.push(i);
    }
  }

  return arr;
};

console.log('Mine2:', fooBarMine2(15));
