// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(b, h) {
  let area = (b * h) / 2;

  return area;
}

// Desafio 3 - split (https://www.w3schools.com/jsref/jsref_split.asp)
function splitSentence(str) {
  let sentence = str.split(' ');

  return sentence;
}

// Desafio 4
function concatName(arr) {
  return `${arr[arr.length - 1]}, ${arr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let a = wins * 3;
  let b = ties * 1;

  return a + b;
}

// Desafio 6 - filter (https://stackoverflow.com/questions/37365512/count-the-number-of-times-a-same-value-appears-in-a-javascript-array)
function highestCount(arr) {
  let higherValue = Math.max(...arr);

  return arr.filter((v) => (v === higherValue)).length;
}

// Desafio 7 - Math.abs (https://stackoverflow.com/questions/4652104/convert-a-negative-number-to-a-positive-one-in-javascript)
function catAndMouse(mouse, cat1, cat2) {
  let value1 = Math.abs(cat1 - mouse);
  let value2 = Math.abs(cat2 - mouse);

  if (value1 > value2) {
    return 'cat2';
  } if (value2 > value1) {
    return 'cat1';
  } if (value1 === value2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
// eslint-disable-next-line complexity, sonarjs/cognitive-complexity
function fizzBuzz(arr) {
  let arrStrings = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
      arrStrings.push('fizzBuzz');
    } else if (arr[i] % 3 === 0) {
      arrStrings.push('fizz');
    } else if (arr[i] % 5 === 0) {
      arrStrings.push('buzz');
    } else {
      arrStrings.push('bug!');
    }
  }

  return arrStrings;
}

// Desafio 9 - replace (https://stackoverflow.com/questions/16576983/replace-multiple-characters-in-one-replace-call)
function encode(str) {
  let replacement = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  str = str.replace(/[aeiou]/gi, (m) => replacement[m]);

  return str;
}

function decode(number) {
  let replacement = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  number = number.replace(/[12345]/gi, (m) => replacement[m]);

  return number;
}

// Desafio 10
function techList(arr, str) {
  let newList = [];
  arr = arr.sort();

  if (arr.length === 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < arr.length; i += 1) {
    newList.push({
      name: str,
      tech: arr[i],
    });
  }

  return newList;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
