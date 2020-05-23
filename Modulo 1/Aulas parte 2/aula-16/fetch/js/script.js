window.addEventListener('load', () => {
  doFetch();
  doFetchAsyncAwait();
  executeDivisionPromisses();
  executeDivisionPromissesAsyncAwait();
});

const executeDivisionPromisses = () => {
  divisonPromisse(50, 2)
    .then((result) => {
      console.log(`Resultado chamada normal: ${result}`);
    })
    .catch((error) => {
      console.log(`Erro na chamada normal: ${error}`);
    });
};

const executeDivisionPromissesAsyncAwait = async () => {
  try {
    const division = await divisonPromisse(12, 0);
    console.log(`Resultado divisão async: ${division}`);
  } catch (error) {
    console.log(`Erro divisão async: ${error}`);
  }
};

const doFetch = () => {
  fetch('https://api.github.com/users/vncius')
    .then((response) => {
      response.json().then((data) => {
        showData(data);
      });
    })
    .catch((error) => {
      console.log(`Erro requisição: ${error}`);
    });
};

const doFetchAsyncAwait = async () => {
  const res = await fetch('https://api.github.com/users/vncius');
  const json = await res.json();
  console.log(json);
};

const showData = (data) => {
  const user = document.querySelector('#user');
  user.textContent = `Login: ${data.login} - Nome: ${data.name}`;
};

const divisonPromisse = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject('Não é possivel dividir por 0');
    }

    resolve(a / b);
  });
};
