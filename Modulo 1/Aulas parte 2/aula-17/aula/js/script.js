//https://restcountries.eu/rest/v2/all
let tabCountries = null;
let tabFavorites = null;

let allCountries = [];
let allCountriesFavorites = [];

let countCountries = 0;
let countFavorites = 0;

let totalPopulationList = 0;
let totalPopulationFavorites = 0;

let numberFormat = 0;

window.addEventListener('load', () => {
  console.log('teste');

  carregueElementos();
  FetchCountries();
});

const carregueElementos = () => {
  tabCountries = document.querySelector('#tabCountries');
  tabFavorites = document.querySelector('#tabFavorites');
  countCountries = document.querySelector('#countCountries');
  countFavorites = document.querySelector('#countFavorites');
  totalPopulationList = document.querySelector('#totalPopulationList');
  // prettier-ignore
  totalPopulationFavorites = document.querySelector('#totalPopulationFavorites');
  numberFormat = Intl.NumberFormat('pt-BR'); // FORMATADOR DE NUMEROS
};

const FetchCountries = async () => {
  try {
    // prettier-ignore
    const res = await fetch('https://restcountries.eu/rest/v2/all');
    const json = await res.json();
    allCountries = json.map((country) => {
      const { numericCode, translations, population, flag } = country;

      return {
        id: numericCode,
        name: translations.pt,
        population: population,
        formattedPopulation: formatNumber(population),
        flag: flag,
      };
    });

    render();
  } catch (error) {
    console.log(`Èrro: ${error}`);
  }
};

const render = () => {
  renderCountryList();
  renderFavorites();
  renderSummary();
  renderCountryButtons();
};

const renderCountryList = () => {
  let countriesHTML = '<div>';

  allCountries.forEach((country) => {
    const { name, flag, id, formattedPopulation } = country;

    const countryHTML = `
      <div class="country">
        <div>
          <a id="${id}" class="waves-effect waves-light btn">+</a>
        </div>
        <div>
          <img src="${flag}" alt="${name}"></img>
        </div>
        <div>
          <ul>
            <li>${name}</li>
            <li>${formattedPopulation}</li>
          </ul>
        </div>
      </div>
    `;

    countriesHTML += countryHTML;
  });
  countriesHTML += '</div>';

  tabCountries.innerHTML = countriesHTML;
};

const renderFavorites = () => {
  let countriesFavoritesHTML = '<div>';

  allCountriesFavorites.forEach((country) => {
    const { name, flag, id, formattedPopulation } = country;

    const countryHTML = `
      <div class="country">
        <div>
          <a id="${id}" class="waves-effect waves-light btn red darken-4">-</a>
        </div>
        <div>
          <img src="${flag}" alt="${name}"></img>
        </div>
        <div>
          <ul>
            <li>${name}</li>
            <li>${formattedPopulation}</li>
          </ul>
        </div>
      </div>
    `;

    countriesFavoritesHTML += countryHTML;
  });
  countriesFavoritesHTML += '</div>';

  tabFavorites.innerHTML = countriesFavoritesHTML;
};
const renderSummary = () => {
  countCountries.textContent = allCountries.length;
  countFavorites.textContent = allCountriesFavorites.length;
  totalPopulationList.textContent = formatNumber(
    allCountries.reduce((acc, curr) => {
      return acc + curr.population;
    }, 0)
  );

  // prettier-ignore
  totalPopulationFavorites.textContent = formatNumber(allCountriesFavorites.reduce(
    (acc, curr) => {
      return acc + curr.population;
    },
    0
  ));
};

const renderCountryButtons = () => {
  var countryButtons = Array.from(tabCountries.querySelectorAll('.btn'));
  var countryButtonsFavorite = Array.from(
    tabFavorites.querySelectorAll('.btn')
  );
  countryButtons.forEach((button) => {
    button.addEventListener('click', () => addToFavorites(button.id));
  });
  countryButtonsFavorite.forEach((button) => {
    button.addEventListener('click', () => removeFromFavorites(button.id));
  });
};

const addToFavorites = (id) => {
  const countryToAdd = allCountries.find((country) => country.id === id);
  allCountriesFavorites = [...allCountriesFavorites, countryToAdd];
  allCountries = allCountries.filter((country) => country.id !== id);
  ordeneListsERenderize();
};

const removeFromFavorites = (id) => {
  // prettier-ignore
  const countryToRemove = allCountriesFavorites.find((country) => country.id === id);
  allCountries = [...allCountries, countryToRemove];
  // prettier-ignore
  allCountriesFavorites = allCountriesFavorites.filter((country) => country.id !== id);
  ordeneListsERenderize();
};

const ordeneListsERenderize = () => {
  allCountriesFavorites.sort((a, b) => a.name.localeCompare(b.name));
  allCountries.sort((a, b) => a.name.localeCompare(b.name));
  render();
};

const formatNumber = (number) => {
  return numberFormat.format(number);
};
