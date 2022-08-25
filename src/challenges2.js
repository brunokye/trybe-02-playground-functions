// Desafio 11
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
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
