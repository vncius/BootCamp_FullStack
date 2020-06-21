import React, { useState, useEffect } from 'react';
import Countries from './components/countries/Countries';
import Header from './components/header/Header';

export default function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredPopulation, setfilteredPopulation] = useState(0);

  useEffect(() => {
    const fetchCountries = async () => {
      const res = await fetch('https://restcountries.eu/rest/v2/all');
      const json = await res.json();

      const allCountries = json.map(
        ({ name, numericCode, flag, population }) => {
          return {
            id: numericCode,
            name,
            nameFilter: name.toLowerCase(),
            flag,
            population,
          };
        }
      );
      const filteredPopulation = calculateTotalPopulationFrom(allCountries);
      setAllCountries(allCountries);
      setFilteredCountries(allCountries);
      setfilteredPopulation(filteredPopulation);
    };

    fetchCountries();
  }, []);

  const calculateTotalPopulationFrom = (countries) => {
    const totalPopulation = countries.reduce((acc, curr) => {
      return acc + curr.population;
    }, 0);

    return totalPopulation;
  };

  const handleChangeFilter = (newText) => {
    setFilter(newText);

    const filterLowerCase = newText.toLowerCase();

    const filteredCountries = allCountries.filter((country) => {
      return country.nameFilter.includes(filterLowerCase);
    });

    const filteredPopulation = calculateTotalPopulationFrom(filteredCountries);

    setFilteredCountries(filteredCountries);
    setfilteredPopulation(filteredPopulation);
  };

  return (
    <div className="container">
      <h1 style={style.centeredTile}>React Countries</h1>

      <Header
        countryCount={filteredCountries.length}
        populationCount={filteredPopulation}
        filter={filter}
        onChangeFilter={handleChangeFilter}
      />
      <Countries countries={filteredCountries} />
    </div>
  );
}

const style = {
  centeredTile: {
    textAlign: 'center',
  },
};
