window.addEventListener('load', () => {
  doMap();
  doFilter();
  doForEach();
  doReduce();
  doFind();
  doSome();
  doEvery();
  doSort();
});

doMap = () => {
  // CRIA OUTRO ARRAY COM SOMENTE ITENS SELECIONADOS
  // NÃO ALTERA O VETOR PEOPLE.RESULTS, SOMENTE CRIA UM NOVO
  const nameEmailArray = people.results.map((person) => {
    return {
      name: person.name,
      email: person.email,
    };
  });

  console.log(nameEmailArray);
  return nameEmailArray;
};

doFilter = () => {
  // CRIA OUTRO ARRAY COM BASE EM UM FILTRO DEFINIDO NA PROPOSIÇÃO
  // NÃO ALTERA O VETOR PEOPLE.RESULTS, SOMENTE CRIA UM NOVO
  const olderThan18Array = people.results.filter((person) => {
    return person.dob.age > 53;
  });

  console.log(olderThan18Array);
};

doForEach = () => {
  // BUSCA PEOPLE MAPEADAS
  const mappedPeople = doMap();

  // METODO MUTAVEL, ELE ALTERA VALORES E INCLUI NOVOS, ELE ALTERA O ARRAY ORIGINAL
  mappedPeople.forEach((person) => {
    person.nameSize =
      person.name.title.length +
      person.name.first.length +
      person.name.last.length;
  });
};

doReduce = () => {
  // REDUCE AJUDA NAS SITUAÇÕES DE CALCULOS, O PRIMEIRO PARAMETRO DA ARROW FUNCTION É
  // O ACCUMULADOR DO DADO, O CURRENT É O OBJETO SENDO PERCORRIDO
  // O PARAMETRO APÓS A ARROW FUNCTION É O INDICE
  const totalAges = people.results.reduce((accumulator, current) => {
    return accumulator + current.dob.age;
  }, 0);

  console.log(totalAges);
};

doFind = () => {
  // FIND TRÁS O PRIMEIRO RESULTADO ENCONTRADO DE ACORDO COM A PROPOSIÇÃO
  // NÃO CRIA NOVO ARRAY, NEM MANIPULA O ORIGINAL, SOMENTE BUSCA O PRIMEIRO RESULTADO
  const found = people.results.find((person) => {
    return person.location.state === 'Rio Grande do Norte';
  });

  console.log(found);
};

doSome = () => {
  // SOME RETORNA TRUE OU FALSE, BUSCA UM REGISTRO DE ACORDO COM A PROPOSIÇÃO
  const found = people.results.some((person) => {
    return person.location.state === 'Amazonas';
  });

  console.log(found);
};

doEvery = () => {
  // EVERY RETORNA TRUE OU FALSE, VERIFICA SE TODOS OS ELEMETOS ESTÃO DE ACORDO COM A PROPOSIÇÃO
  const every = people.results.every((person) => {
    return person.nat === 'BR';
  });

  console.log(every);
};

doSort = () => {
  const namesMapped = people.results
    .map((person) => {
      return { name: person.name.first };
    })
    .filter((person) => {
      return person.name.startsWith('A');
    })
    //.sort(); SOMENTE O SORTE ORDENA SE O VETOR FOR DE STRING
    .sort((a, b) => {
      // QUANDO É ARRAY DEVE-SE PASSA DOIS PARAMETROS
      // LOCALE COMPARA AS STRING E ORDENA AUTOMÁTICAMENTE
      return a.name.localeCompare(b.name);

      //RETORNA ORDENADO POR TAMANHO DE CADA NOME DO MENOR PARA O MAIOR
      //PARA INVERTER É SÓ TROCAR O A PELO B
      //return a.name.length - b.name.length;
    });

  console.log(namesMapped);
};
