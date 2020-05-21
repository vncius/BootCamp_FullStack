'use strict'; // Java script acusa mais erros

// LET TEM ESCOPO REDUZIDO COMO NO EXEMPLO ABAIXO

function withVar() {
  for (var i = 0; i < 10; i++) {
    console.log('var' + i);
  }

  i = 20;

  console.log(i);
}

function withLet() {
  for (let i = 0; i < 10; i++) {
    console.log('var' + i);
  }

  // NESSE CENÁRIO NÃO PERMITE USAR A VARIAVEL POIS LET TEM ESCOPO REDUZIDO

  //i = 20;
  //console.log(i);
}

withVar();
withLet();

//CONST NÃO ALTERA O VALOR,

const c = 20;
//c = 20;

//A MENOS QUE SEJA VETOR
const d = [];
d.push(1);
console.log(d);

function sum(a, b) {
  // FUNÇÃO NORMAL
  return a + b;
}

const sum2 = function name(a, b) {
  // FUNÇÃO ANÔNIMA
  return a + b;
};

const sum3 = (a, b) => {
  // ARROW FUNCTION
  return a + b;
};

// ARROW FUNCTION REDUZIDA
const sum4 = (a, b) => a + b;

console.log(sum(2, 3));
console.log(sum2(2, 3));
console.log(sum3(2, 3));
console.log(sum4(2, 3));

// TEMPLATE LITERALS

const name = 'Vinicius';
const surName = 'Vieira';
//const text1 = 'Meu nome é ' + name + ' ' + surName;
const text2 = `Meu nome é ${name} ${surName}`;
//console.log(text1);
console.log(text2);

// DEFAULT PARAMETERS SERVE SÓ PARA O ULTIMO PARAMETRO DA FUNCTION
// A MENOS QUE A PRIMEIRA SEJA DEFINIDA UM VALOR DEFAULT TAMBÉM

const sum5 = (a = 0, b = 3) => a + b;
console.log(sum5(2));
