var sum = function (a, b) {
  return a + b;
};

console.log('Resultado chamada função sum: ' + sum(1, 2));

var compareNumbers = function (a, b) {
  // return a > b ? 1 : a < b ? -1 : 0;
  return a - b;
};

console.log('Resultado chamada função sum: ' + compareNumbers(1, 2));
console.log('Resultado chamada função sum: ' + compareNumbers(1, 5));
console.log('Resultado chamada função sum: ' + compareNumbers(1, 6));

function sumEach(from, upTo) {
  var sum = 0;

  for (var i = from; i < upTo; i++) {
    sum += i;
  }
  return sum;
}

console.log('Resultado chamada função sum: ' + sumEach(1, 10));
console.log('Resultado chamada função sum: ' + sumEach(9, 100));
console.log('Resultado chamada função sum: ' + sumEach(20, 200));
