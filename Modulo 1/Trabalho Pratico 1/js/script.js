let obj = {};

$(window).ready(() => {
  function mapElements() {
    obj = new Object({
      range_red: $('#range-red'),
      range_green: $('#range-grenn'),
      range_blue: $('#range-blue'),
      input_red: $('#input-value-red'),
      input_green: $('#input-value-grenn'),
      input_blue: $('#input-value-blue'),
      r: 0,
      g: 0,
      b: 0,
      painel_color: $('.div-color'),
      btn_reset: $('#reset'),
    });
  }

  function createEvents() {
    obj.btn_reset.click(reset);
    obj.range_red.on('input', atualizeDados);
    obj.range_green.on('input', atualizeDados);
    obj.range_blue.on('input', atualizeDados);
  }

  mapElements();
  createEvents();
  reset();
});

const atualizeDados = (event) => {
  const value = event.target.value;
  const id = event.target.id;

  switch (id) {
    case 'range-red':
      obj.r = value;
      break;
    case 'range-grenn':
      obj.g = value;
      break;
    case 'range-blue':
      obj.b = value;
      break;
  }
  sync();
};

const sync = () => {
  obj.range_red.val(obj.r);
  obj.range_green.val(obj.g);
  obj.range_blue.val(obj.b);

  obj.input_red.val(obj.r);
  obj.input_green.val(obj.g);
  obj.input_blue.val(obj.b);

  obj.painel_color.css('background', `rgb(${obj.r},${obj.g},${obj.b})`);
};

const reset = () => {
  obj.r = 0;
  obj.g = 0;
  obj.b = 0;
  sync();
};
