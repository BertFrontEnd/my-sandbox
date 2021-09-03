const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

const key = {
  10: '.',
  11: '-',
  '**********': ' ',
};

function decode(expr) {
  let exprArr = Array.from(expr);
  let sizeArr1 = 10;
  let sizeArr2 = 10;
  let decArr1 = [];
  let decArr2 = [];
  let decMessage = '';
  let message = [];

  for (let i = 0; i < exprArr.length; i += sizeArr1) {
    decArr1.push([exprArr.slice(i, i + sizeArr1).join('')]);
  }
  console.log(decArr1);

  decArr1.map((elem, index) => {
    decArr2.push([elem.slice(index, index + sizeArr2).join('')]);
  });

  for (let i = 0; i < decArr1.length; i += sizeArr2) {
    decArr2.push(decArr1.slice(i, i + sizeArr2).join(''));
  }
  console.log(decArr2);

  decArr2.forEach((elem) => {
    if (elem === '10') {
      message.push('.');
    }
    if (elem === '11') {
      message.push('-');
    }
    if (elem === '00') {
      return;
    }
  });

  console.log(message);
  decMessage = message.join('');
  console.log(decMessage);
}

console.log(decode('00000011110000000010')); // me

/* console.log(
  decode(
    '00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010',
  ),
); // */
