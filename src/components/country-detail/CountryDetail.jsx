import CountryData from "../country-data/CountryData";

const CountryDetail = (props) => {
  // const {country, handleVisitedCountry, handleVisitedFlags} = props;
  return (
    <div>
      <h4>Country Details</h4>
      <hr />
      {/* <CountryData
      country={country}
      handleVisitedCountry={handleVisitedCountry}
      handleVisitedFlags={handleVisitedFlags}
      ></CountryData> */}
      <CountryData {...props}></CountryData>
      
    </div>
  );
};

export default CountryDetail;