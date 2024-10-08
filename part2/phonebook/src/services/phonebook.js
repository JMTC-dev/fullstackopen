import axios from "axios";

const baseURL = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseURL);
  const response = request.then((response) => response.data);
  return response;
};

const create = (newObject) => {
  const request = axios.post(baseURL, newObject);
  const response = request.then((response) => response.data);
  return response;
};

const remove = (id) => {
  const request = axios.delete(`${baseURL}/${id}`);
  const response = request.then((response) => response.data);
  return response;
};

const update = (id, newObject) => {
  const request = axios.put(`${baseURL}/${id}`, newObject);
  const response = request.then((response) => response.data);
  return response;
};

export default {
  getAll,
  create,
  remove,
  update,
};
