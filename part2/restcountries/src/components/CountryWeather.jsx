import { useEffect, useState } from "react";
import countryServices from "../services/countries";

const CountryWeather = ({ country }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const request = await countryServices.getWeather(
        country.capital,
        country.cca2
      );
      console.log(request);
      setWeather(request);
    };
    fetchData();
  }, []);

  if (!weather || !country) {
    return <p>loading...</p>;
  }

  return (
    <>
      <h2>Weather in {country.capital}</h2>
      <p>temperature {weather.main.temp} Celsius</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
      />
      <p>weather {weather.weather[0].description}</p>
      <p>wind {weather.wind.speed} m/s</p>
    </>
  );
};
export default CountryWeather;
