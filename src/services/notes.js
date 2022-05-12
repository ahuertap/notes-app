import axios from "axios";

const BASE_URL = "https://nots-api-node.herokuapp.com/api/notes";

const getAll = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

const create = async (note) => {
  const response = await axios.post(BASE_URL, note);
  return response.data;
};

const update = async (id, note) => {
  const url = `${BASE_URL}/${id}`;
  const response = await axios.put(url, note);
  return response.data;
};

const remove = async (id) => {
  const url = `${BASE_URL}/${id}`;
  const response = await axios.delete(url);
  return response.data;
};

const noteService = { getAll, update, create, remove };

export default noteService;
