const url = "http://localhost:3001/api/v1/pokemon/question";
const axios = require('axios');

function getQuestion() {
  return axios.get(url).then(response => response.data);
}

function getAnswer(questionId, pokemonId) {
  return axios.post(`${url}/${questionId}`, {answer:pokemonId}).then(response => response.data);
}

export { getQuestion, getAnswer }
