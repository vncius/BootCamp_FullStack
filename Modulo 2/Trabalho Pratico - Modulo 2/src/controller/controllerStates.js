import { promises } from 'fs';
const fs = promises;

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

const obtenhaCidadesOrdenadasPorNome = async (ehPorMaiorNome) => {
  try {
    const allStates = await leiaArquivo(global.nameFileAllStates);
    let allCities = [];

    allStates.forEach((state) => {
      state.cidades.forEach((city) => {
        allCities.push(trateNomeCidade(city, state.Sigla));
      });
    });

    return allCities.sort((a, b) => {
      let proposicao = b.nome.length - a.nome.length !== 0;

      if (proposicao && ehPorMaiorNome) {
        return b.nome.length - a.nome.length;
      } else if (proposicao && !ehPorMaiorNome) {
        return a.nome.length - b.nome.length;
      }
      return a.nome.localeCompare(b.nome);
    });
  } catch (error) {
    throw error;
  }
};

const obtenhaCidadePorEstadoPorRegra = async (ehMaiorNomeDaCidade) => {
  try {
    const allStates = await leiaArquivo(global.nameFileAllStates);
    let allStatesComMaiorNomeCidade = [];

    allStates.forEach((state) => {
      const cities = state.cidades.sort((a, b) => {
        let proposicao = b.Nome.length - a.Nome.length !== 0;

        if (proposicao && ehMaiorNomeDaCidade) {
          return b.Nome.length - a.Nome.length;
        } else if (proposicao && !ehMaiorNomeDaCidade) {
          return a.Nome.length - b.Nome.length;
        }
        return a.Nome.localeCompare(b.Nome);
      });

      allStatesComMaiorNomeCidade.push(`${cities[0].Nome} - ${state.Sigla}`);
      //trateNomeCidade(cities[0], state.Sigla);
      return allStatesComMaiorNomeCidade;
    });
  } catch (error) {
    throw error;
  }
};

// const trateNomeCidade = (city, sigla) => {
//   try {
//     let nome = city.Nome;
//     //let remover = nome.substring(nome.indexOf('('), nome.indexOf(')') + 1);
//     return { nome: nome /*.replace(remover, '').trim()*/, uf: sigla };
//   } catch (error) {
//     throw error;
//   }
// };

const obtenhaTop5Estados = async (ehComMaisCidades) => {
  try {
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
  } catch (error) {
    throw error;
  }
};

const obtenhaQuatidadeDeCidadesPorEstado = async (sigla) => {
  try {
    const estado = await leiaArquivo(`${global.dirStates}/${sigla}.json`);
    return { uf: estado.Sigla, quantidade: estado.cidades.length };
  } catch (error) {
    throw error;
  }
};

const inicializeJSON = async () => {
  try {
    const fileNameStates = 'Estados.json';
    const fileNameCities = 'Cidades.json';
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
  } catch (error) {
    throw error;
  }
};

const leiaArquivo = async (nome) => {
  let diretorioArquives = './ArquivesJSON';
  try {
    let ret = await fs.readFile(`${diretorioArquives}/${nome}`);
    return JSON.parse(ret);
  } catch (error) {
    throw error;
  }
};

export default {
  init,
  obtenhaCidadePorEstadoPorRegra,
  obtenhaQuatidadeDeCidadesPorEstado,
  obtenhaTop5Estados,
  obtenhaCidadesOrdenadasPorNome,
};

// exports.init = init;
// exports.obtenhaEstadosENomesDeCidades = obtenhaCidadePorEstadoPorRegra;
// exports.obtenhaQuatidadeDeCidadesPorEstado = obtenhaQuatidadeDeCidadesPorEstado;
// exports.obtenhaTop5Estados = obtenhaTop5Estados;
// exports.obtenhaCidadesOrdenadasPorNome = obtenhaCidadesOrdenadasPorNome;
