import { useState } from 'react';
import './Country.css'
import CountryDetail from '../country-detail/CountryDetail';
const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
  // console.log(country);
  const {name, flags, population, area, cca3} = country;
  const [visited, SetVisited] = useState(false);
  const handleVisited = () =>{
    SetVisited(!visited)
  }
  // console.log(handleVisitedCountry);
  

  
  return (
    <div className={`country ${visited ? 'visited' : 'non-visited'} `}>
      <h3 style={{color: visited ? 'black' : 'white'}}>Name:{name?.common} </h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p><small>Code: {cca3}</small></p>
      {/* as react handles function call on click events as a default call and do the functionality without clicking the functions that needs parameter need to be handled in a wrapper anonymous arrow function. */}
      <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
      <br />
      <button onClick={() => handleVisitedFlags(country.flags.png) }>Add Flag</button>
      <br />
      <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
      {visited ? 'I have visited this country' : 'I want to visit this country'}
      <hr />
      <CountryDetail 
      country={country}
      handleVisitedCountry={handleVisitedCountry}
      handleVisitedFlags={handleVisitedFlags}
      ></CountryDetail>
    </div>
  );
};

export default Country;