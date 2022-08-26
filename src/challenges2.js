// Desafio 11 - mask (https://www.florin-pop.com/blog/2019/04/jcc-create-a-phone-number/)
// eslint-disable-next-line complexity, sonarjs/cognitive-complexity, max-lines-per-function
function generatePhoneNumber(arr) {
  if (arr.length > 11 || arr.length < 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let i = 0; i < arr.length; i += 1) {
    let repeat = arr.filter((v) => (v === arr[i])).length;

    if (arr[i] < 0 || arr[i] > 9 || repeat === 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  let mask = '(xx) xxxxx-xxxx';

  arr.forEach((item) => {
    mask = mask.replace('x', item);
  });

  return mask;
}

// Desafio 12
// eslint-disable-next-line complexity, sonarjs/cognitive-complexity
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  } if (lineB < lineC + lineA && lineB > Math.abs(lineC - lineA)) {
    return true;
  } if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
    return true;
  }

  return false;
}

// Desafio 13 - match (https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript)
// Number (https://www.freecodecamp.org/news/how-to-convert-a-string-to-a-number-in-javascript/)
function hydrate(str) {
  let check = /\d+/g;
  let combine = str.match(check);
  let sum = 0;

  for (let i = 0; i < combine.length; i += 1) {
    sum += Number(combine[i]);
  }

  if (sum === 1) {
    return `${sum} copo de água`;
  }

  return `${sum} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
