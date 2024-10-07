import CountryInformation from "./CountryInformation";

const CountryList = ({ countries }) => {
  const renderList = () => {
    if (!countries) {
      return <p>No countries available</p>;
    }

    if (countries.length > 10) {
      return <p>Too many matches, specify another filer</p>;
    } else if (countries.length === 1) {
      return <CountryInformation country={countries} />;
    } else {
      return countries.map((country) => (
        <p key={country.area}>{country.name.common}</p>
      ));
    }
  };

  return <>{renderList()}</>;
};

export default CountryList;
