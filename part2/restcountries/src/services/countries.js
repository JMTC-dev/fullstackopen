const baseURL = "https://studies.cs.helsinki.fi/restcountries/api/all/";
const api_key = import.meta.env.VITE_WEATHER_KEY;
const weatherURL = "http://api.openweathermap.org/data/2.5/weather";

const getAll = async () => {
  try {
    const request = await fetch(baseURL);
    if (!request.ok) {
      throw new Error(request.status);
    }
    const response = await request.json();
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

const getWeather = async (capital, countryCode) => {
  try {
    const request = await fetch(
      `${weatherURL}?q=${capital},${countryCode}
      }&APPID=${api_key}&units=metric`
    );
    if (!request.ok) {
      throw new Error(request.status);
    }
    const response = await request.json();
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export default {
  getAll,
  getWeather,
};
