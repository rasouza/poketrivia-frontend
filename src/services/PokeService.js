const url = "https://pokeapi.co/api/v2/pokemon/";
const axios = require('axios');

function getPokemonById(id) {
  axios.get(url + id).then(({data:{name, sprites:{front_default:image}}}) => {
    console.log(
      {
        name: name,
        image: image
      }
    )
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}

export default getPokemonById
