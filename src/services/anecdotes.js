import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

const addOne = async (content) => {
  const data = asObject(content);
  return await axios.post(baseUrl, data).then((res) => res.data);
};

const addVote = async (anecdote) => {
  const response = await axios.put(`${baseUrl}/${anecdote.id}`, anecdote);
  return response.data;
};

const anecdoteServer = {
  getAll,
  addOne,
  addVote,
};

export default anecdoteServer;
