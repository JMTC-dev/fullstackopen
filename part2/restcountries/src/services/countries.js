const baseURL = "https://studies.cs.helsinki.fi/restcountries/api/all/";
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

export default {
  getAll,
};
