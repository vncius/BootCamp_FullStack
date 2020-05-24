let URL_API =
  'https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo';
let todosUsuarios = [];
let totalUsuariosEncontrados = 0;
let statSexoMasculino = 0;
let statSexoFeminino = 0;
let statSomaIdades = 0;
let statMediaIdades = 0;
let divUsuariosEncontrados = null;
let btnPesquisar = null;
let inputPesquisar = null;
let usuariosExibidos = null;

window.addEventListener('load', () => {
  carregueElementos();
  carregueEventos();
  busqueTodosUsuario();
});

const carregueElementos = () => {
  totalUsuariosEncontrados = $('#TotalUsuariosEncontrados');
  statSexoMasculino = $('#SexoMasculino');
  statSexoFeminino = $('#SexoFeminino');
  statSomaIdades = $('#SomaIdades');
  statMediaIdades = $('#MediaIdades');
  divUsuariosEncontrados = $('#divUsuariosEncontrados');
  btnPesquisar = $('#btnPesquisar');
  inputPesquisar = $('#inputPesquisar');
};

const carregueEventos = () => {
  btnPesquisar.click(pesquisar);
  inputPesquisar.keyup((event) => {
    if (event.originalEvent.code === 'Enter') {
      pesquisar();
    }
  });
};

const busqueTodosUsuario = async () => {
  try {
    let res = await fetch(URL_API);
    let json = await res.json();
    todosUsuarios = await json.results.map((usuario) => {
      const { first, last } = usuario.name;
      const { age } = usuario.dob;

      return {
        id: usuario.login.uuid,
        nome: `${first} ${last}`,
        urlImage: usuario.picture.medium,
        sexo: usuario.gender === 'female' ? 'F' : 'M',
        idade: age,
      };
    });
    usuariosExibidos = [...todosUsuarios];
    preenchaListaComUsuarios();
  } catch (error) {
    console.log(`Erro ao buscar usuários: ${error}`);
  }
};

const pesquisar = () => {
  let filtro = inputPesquisar.val().trim();
  usuariosExibidos = todosUsuarios.filter((usuario) =>
    usuario.nome.toUpperCase().includes(filtro.toUpperCase())
  );
  preenchaListaComUsuarios();
  inputPesquisar.val('');
};

const preenchaListaComUsuarios = () => {
  limpeDados();
  let listaUL = '<ul class="list-group list-group-flush">';
  usuariosExibidos.forEach((usuario) => {
    const { id, nome, urlImage, nascimento, idade } = usuario;
    const li = `
      <li id=${id}  class="list-group-item">
        <div>
          <img src="${urlImage}" alt="${nome}">
        </div>
        <div>
          <span>${nome}, ${idade} anos</span>
        </div>
      </li>
    `;
    listaUL += li;
  });

  listaUL += '</ul>';

  // NO JQUERY QUANDO É FEITO MAPEAMENTO DE ELEMENTOS USA O .APPEND
  divUsuariosEncontrados.append(listaUL);
  atualizeEstatisticasEDados();
};

const atualizeEstatisticasEDados = () => {
  const qtdUsuariosExibidos = usuariosExibidos.length;
  TotalUsuariosEncontrados.innerHTML = qtdUsuariosExibidos;

  const somaIdades = usuariosExibidos.reduce((acc, curr) => {
    return acc + curr.idade;
  }, 0);

  const qtdUsuariosFemininos = usuariosExibidos.filter(
    (usuario) => usuario.sexo === 'F'
  );

  statSomaIdades.html(somaIdades);
  statMediaIdades.html(
    qtdUsuariosExibidos > 0 ? somaIdades / qtdUsuariosExibidos : 0
  );
  statSexoFeminino.html(qtdUsuariosFemininos.length);
  statSexoMasculino.html(qtdUsuariosExibidos - qtdUsuariosFemininos.length);
};

const limpeDados = () => {
  divUsuariosEncontrados.empty();
  TotalUsuariosEncontrados.innerHTML = 0;
  statSexoMasculino.html(0);
  statSexoFeminino.html(0);
  statSomaIdades.html(0);
  statMediaIdades.html(0);
};
