window.addEventListener('load', start);

function start() {
  console.log('Aula 08');
  console.log('Tela totalmente Carregada');

  var nameInput = document.querySelector('#nameInput');
  nameInput.addEventListener('keyup', countName);

  var form = document.querySelector('form');
  form.addEventListener('submit', preventSubmit);
}

var countName = function (event) {
  var count = event.target.value;
  var span = document.querySelector('#nameLength');
  span.textContent = count.length;
};

var preventSubmit = function (event) {
  var nameInput = document.querySelector('#nameInput');
  event.preventDefault();
  alert(nameInput.value + ' Cadastrado com sucesso');
};
