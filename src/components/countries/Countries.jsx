import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import './Countries.css'

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  },[])

  const handleVisitedCountry = (country) =>{
    // console.log('add this to your visited country');
    // console.log(country);
    // need to use spread operator to copy older array and add new array elements as React's DOM doesn't recognize array methods like push, pop as it works under useState hook of react of state changing and setting state
    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCountries(newVisitedCountries)
    

  }
  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      <div>
        <h5>Visited Countries: {visitedCountries.length} </h5>
        <ul>
          {
            // a unique key is needed so that the propType error doesn't occur
            visitedCountries.map(country => <li key={country?.cca3}>{country?.name?.common}</li>)
          }
        </ul>
      </div>
      <div className="country-container">
      {
        countries.map(country => <Country 
          key={country.cca3} 
          handleVisitedCountry = {handleVisitedCountry}
          country={country}></Country>)
      }
      </div>
    </div>
  );
};

export default Countries;