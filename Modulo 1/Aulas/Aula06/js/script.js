console.log('Olá, Mundo!');

var title = document.querySelector('h1');
title.textContent = 'Modificado via JS por VnC';

var r = '';

//SWITCH AO INVÉS DE IF FICA MAIS LEGIVEL
var dia = 2;

switch (dia) {
  case 1:
    r = 'Segunda, dia ' + dia;
    break;
  case 2:
    r = 'Terça, dia ' + dia;
    break;
}

//IF TERNÁRIO
var a = 11;
var b = 10;
var resultado = 0;

if (a > b) {
  resultado = a + b;
} else {
  resultado = a - b;
}

console.log('Resultado IF normal: ' + resultado);

resultado = 0;
resultado = a > b ? a + b : a - b;

console.log('Resultado IF ternário: ' + resultado);

