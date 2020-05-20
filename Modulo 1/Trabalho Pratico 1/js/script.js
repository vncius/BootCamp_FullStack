window.addEventListener('load', start);

var range_red = null;
var range_green = null;
var range_blue = null;
var input_red = null;
var input_green = null;
var input_blue = null;

function start() {
  function mapElements() {
    range_red = document.querySelector('#range-red');
    input_red = document.querySelector('#input-value-red');
    range_green = document.querySelector('#range-grenn');
    input_green = document.querySelector('#input-value-grenn');
    range_blue = document.querySelector('#range-blue');
    input_blue = document.querySelector('#input-value-blue');
  }

  function createEvents() {
    document.querySelector('#reset').addEventListener('click', reset);
    range_red.oninput = atualizeDados;
    range_green.oninput = atualizeDados;
    range_blue.oninput = atualizeDados;
  }

  mapElements();
  createEvents();
  atualizeDados();
}

function reset() {
  range_red.value = 0;
  range_green.value = 0;
  range_blue.value = 0;
  atualizeDados();
}

function atualizeDados() {
  atualizeInput(range_red.value, range_green.value, range_blue.value);
  atualizeRGB(range_red.value, range_green.value, range_blue.value);
}

function atualizeInput(r, g, b) {
  input_red.value = r;
  input_green.value = g;
  input_blue.value = b;
}

function atualizeRGB(r, g, b) {
  var painel_color = document.querySelector('.div-color');
  painel_color.style.background = 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
