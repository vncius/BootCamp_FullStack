const fs = require('fs').promises;
global.dirStates = 'Estados';
global.nameFileAllStates = 'allStates.json';

const init = async () => {
  try {
    await leiaArquivo('Estados/AC.json');
    return;
  } catch (err) {
    await inicializeJSON();
  }
};

const obtenhaCidadesOrdenadasPorNome = async (maiorNome) => {
  const allStates = await leiaArquivo(global.nameFileAllStates);
  let allCities = [];

  allStates.forEach((state) => {
    state.cidades.forEach((city) => {
      allCities.push(trateNomeCidade(city, state.Sigla));
    });
  });

  return allCities.sort((a, b) => {
    let proposicao = b.nome.length - a.nome.length !== 0;

    if (proposicao && maiorNome) {
      return b.nome.length - a.nome.length;
    } else if (proposicao && !maiorNome) {
      return a.nome.length - b.nome.length;
    }
    return a.nome.localeCompare(b.nome);
  });
};

const obtenhaTop5Estados = async (ehComMaisCidades) => {
  const allStates = await leiaArquivo(global.nameFileAllStates);
  let states = [];

  if (ehComMaisCidades) {
    states = allStates
      .sort((a, b) => b.cidades.length - a.cidades.length)
      .slice(0, 5);
  } else {
    states = allStates
      .sort((a, b) => b.cidades.length - a.cidades.length)
      .slice(allStates.length - 5, allStates.length);
  }

  states = await states.map((state) => {
    const { Sigla, cidades } = state;

    return {
      uf: Sigla,
      totalCity: cidades.length,
    };
  });
  return states;
};

const obtenhaQuatidadeDeCidadesPorEstado = async (sigla) => {
  const estado = await leiaArquivo(`${global.dirStates}/${sigla}.json`);
  return estado.cidades.length;
};

const inicializeJSON = async () => {
  const fileNameStates = 'Estados.json';
  const fileNameCities = 'Cidades.json';

  try {
    let arrayEstados = await leiaArquivo(fileNameStates);
    let arrayCidades = await leiaArquivo(fileNameCities);

    arrayEstados.forEach((state) => {
      state.cidades = arrayCidades.filter((city) => city.Estado === state.ID);
      graveArquivo(state, `${dirStates}/${state.Sigla}.json`);
    });

    graveArquivo(arrayEstados, global.nameFileAllStates);
  } catch (error) {
    throw error;
  }
};

const graveArquivo = async (arquivo, nome) => {
  let dirArquives = './ArquivesJSON';
  try {
    await fs.writeFile(`${dirArquives}/${nome}`, JSON.stringify(arquivo));
  } catch (err) {
    throw err;
  }
};

const leiaArquivo = async (nome) => {
  let diretorioArquives = './ArquivesJSON';
  try {
    let ret = await fs.readFile(`${diretorioArquives}/${nome}`);
    return JSON.parse(ret);
  } catch (err) {
    throw err;
  }
};

exports.init = init;
exports.obtenhaCidadesOrdenadasPorNome = obtenhaCidadesOrdenadasPorNome;
exports.obtenhaQuatidadeDeCidadesPorEstado = obtenhaQuatidadeDeCidadesPorEstado;
exports.obtenhaTop5MaisCidades = obtenhaTop5Estados;
