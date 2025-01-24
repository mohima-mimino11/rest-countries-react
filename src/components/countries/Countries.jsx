import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import './Countries.css'

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  },[])

  const handleVisitedCountry = (country) =>{
    // console.log('add this to your visited country');
    // console.log(country);
    // need to use spread operator to copy older array and add new array elements as React's DOM doesn't recognize array methods like push, pop as it works under useState hook of react of state changing and setting state and as states are immuatble in react
    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCountries(newVisitedCountries)
  }

  const handleVisitedFlags = (flag) =>{
    console.log('adding flag');
    
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags)
    
  }
  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      {/* Visited Countries */}
      <div>
        <h5>Visited Countries: {visitedCountries.length} </h5>
        <ul>
          {
            // a unique key is needed so that the propType error doesn't occur
            visitedCountries.map(country => <li key={country?.cca3}>{country?.name?.common}</li>)
          }
        </ul>
      </div>
      <div className="flag-container">
        {
          visitedFlags.map(flag => <img src={flag}></img>)
        }

      </div>
      {/* Display countries */}
      <div className="country-container">
      {
        countries.map(country => <Country 
          key={country.cca3} 
          handleVisitedCountry = {handleVisitedCountry}
          handleVisitedFlags = {handleVisitedFlags}
          country={country}></Country>)
      }
      </div>
    </div>
  );
};

export default Countries;