import { useEffect, useState } from "react";
import countryServices from "./services/countries";
import CountryList from "./components/CountryList";

function App() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const request = await countryServices.getAll();
      console.log(request);
      setCountries(request);
    };
    fetchData();
  }, []);

  if (!countries) {
    return <p>loading...</p>;
  }

  const handleSearchInput = (event) => {
    const searchValue = event.target.value;
    setSearch(searchValue);
    const filterCountries = countries.filter((country) =>
      country.name.common
        .trim()
        .toLowerCase()
        .includes(searchValue.trim().toLowerCase())
    );
    setFilteredCountries(filterCountries);
  };

  return (
    <>
      <label htmlFor="country">find countries </label>
      <input
        name="country"
        type="text"
        id="country"
        value={search}
        onChange={handleSearchInput}
      ></input>
      {!countries ? (
        <p>No countries found</p>
      ) : (
        <CountryList countries={filteredCountries} />
      )}
    </>
  );
}

export default App;
