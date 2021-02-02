import axios from "axios";



const BASE_URL = "https://wdi-nyc-planets-api.herokuapp.com/planets/random";


async function fetchPlanet() { 
  const { data } = await axios.get(BASE_URL);

  return data;
}



export default fetchPlanet;