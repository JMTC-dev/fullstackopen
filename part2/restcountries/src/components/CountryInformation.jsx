import CountryItem from "./CountryItem";

const CountryInformation = ({ country }) => {
  return (
    <>
      <CountryItem key={country.name.common} country={country} />
    </>
  );
};

export default CountryInformation;
