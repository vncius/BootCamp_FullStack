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

//WHILE - DO WHILE - FOR
var numeroAtual = 0;
var somatorio = 0;

//WHILE
while (numeroAtual <= 10) {
  somatorio += numeroAtual;
  numeroAtual++;
}
console.log('Resultado while: ' + somatorio);

//DO WHILE
numeroAtual = 0;
somatorio = 0;
do {
  somatorio += numeroAtual;
  numeroAtual++;
} while (numeroAtual <= 10);
console.log('Resultado do while: ' + somatorio);

//FOR
numeroAtual = 0;
somatorio = 0;
for (numeroAtual = 0; numeroAtual <= 10; numeroAtual++) {
  somatorio += numeroAtual;
}

console.log('Resultado for: ' + somatorio);
