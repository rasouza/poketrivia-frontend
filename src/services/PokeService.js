const url = "https://pokeapi.co/api/v2/pokemon/";
const axios = require('axios');

function getPokemonById(id) {
  return axios.get(url + id).then(({data:{name, sprites:{front_default:image}}}) => {
    return (
      {
        name: name,
        image: image
      }
    );
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}

export default getPokemonById
