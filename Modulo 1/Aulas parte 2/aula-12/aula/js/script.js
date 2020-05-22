window.addEventListener('load', () => {
  doSpread();
  doRest();
  doDestructuring();
});

doSpread = () => {
  //O SPREAD CONCATE VETORES, COMO NO EXEMPLO ABAIXO USANDO OS ... ANTES DO VETOR DENTRO DE OUTRO VETOR
  //NO PORTUGUES SE CHAMA ESPALHAR
  const marriedMen = people.results.filter(
    (person) => person.name.title === 'Mr'
  );
  const marriedWoman = people.results.filter(
    (person) => person.name.title === 'Ms'
  );

  const married = [...marriedMen, ...marriedWoman, { msg: 'OK' }];

  console.log(married);
};

doRest = () => {
  console.log(infiniteSum(1, 2, 3));
  console.log(infiniteSum(1, 2, 223, 222, 333));
};

infiniteSum = (...numbers) => {
  // USANDO O SPRED COMO PARAMETRO DE UMA FUNCTION, ELE CONVERTE PARA UM ARRAY
  // INDEPENDENTE DA QUANTIDADE DE PARAMETROS
  return numbers.reduce((acc, curr) => acc + curr, 0);

  // OBS REDUCE, SÓ COLOCA CHAVES QUANDO É OBJETO
};

doDestructuring = () => {
  // MODO COMUN DE OBTER DADOS DE UM SUB-OBJETO
  const first = people.results[0];

  // const username = first.login.username;
  // const password = first.login.password;

  // COM UMA LINHA O PROBLEMA É RESOLVIDO, O DESTRUCTING ATRIBUI AS
  // VARIÁVEIS CRIADAS O VALOR DENTRO DO OBJETO DESDE QUE TENHA O MESMO NOME
  const { username, password } = first.login;

  console.log(`Login: ${username} - Password: ${password}`);
};
