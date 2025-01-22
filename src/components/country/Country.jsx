import { useState } from 'react';
import './Country.css'
const Country = ({country}) => {
  console.log(country);
  const {name, flags, population, area, cca3} = country;
  const [visited, SetVisited] = useState(false);
  const handleVisited = () =>{
    SetVisited(!visited)
  }
  return (
    <div className={`country ${visited ? 'visited' : 'non-visited'} `}>
      <h3 style={{color: visited ? 'black' : 'white'}}>Name:{name?.common} </h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p><small>Code: {cca3}</small></p>
      <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
      {visited ? 'I have visited this country' : 'I want to visit this country'}
    </div>
  );
};

export default Country;