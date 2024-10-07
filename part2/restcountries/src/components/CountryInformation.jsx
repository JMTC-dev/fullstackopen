import CountryItem from "./CountryItem";

const CountryInformation = ({ country }) => {
  return (
    <>
      {country.map((country) => (
        <CountryItem key={country.name.common} country={country} />
      ))}
    </>
  );
};

export default CountryInformation;
