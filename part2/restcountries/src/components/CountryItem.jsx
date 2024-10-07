import CountryWeather from "./CountryWeather";

const CountryItem = ({ country }) => {
  const flagStyle = {
    fontSize: "12rem",
  };
  return (
    <>
      <h1>{country.name.common}</h1>
      <div>
        <p>capital {country.capital}</p>
        <p>area {country.area}</p>
      </div>
      <div>
        <h2>languages: </h2>
        <ul>
          {Object.values(country.languages).map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <div style={flagStyle}>{country.flag}</div>
        <div>
          <CountryWeather country={country} />
        </div>
      </div>
    </>
  );
};
export default CountryItem;
