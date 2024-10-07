import { useState } from "react";
import CountryInformation from "./CountryInformation";

const CountryList = ({ countries, setSelectedCountry, selectedCountry }) => {
  const renderList = () => {
    if (!countries) {
      return <p>Too many matches, specify another filer</p>;
    }

    if (countries.length > 10) {
      return <p>Too many matches, specify another filer</p>;
    } else if (countries.length === 1) {
      return countries.map((country) => (
        <CountryInformation key={country.area} country={country} />
      ));
    } else {
      return (
        <>
          {selectedCountry ? (
            <CountryInformation country={selectedCountry} />
          ) : (
            countries.map((country) => (
              <div key={country.area}>
                <p>
                  {country.name.common}{" "}
                  <button onClick={() => setSelectedCountry(country)}>
                    show
                  </button>
                </p>
              </div>
            ))
          )}
        </>
      );
    }
  };

  return <>{renderList()}</>;
};

export default CountryList;
