import axios from "axios";

export const planetInfo = async () => {
  const planetURL = `https://wdi-nyc-planets-api.herokuapp.com/planets`;

  const planetData = await axios.get(planetURL).then(({ data }) => {
    return data;
  });
  return planetData;
};

export const randoPlanetInfo = async () => {
  const planetURL = `https://wdi-nyc-planets-api.herokuapp.com/planets/random`;

  const planetData = await axios.get(planetURL).then(({ data }) => {
    return data;
  });
  return planetData;
};
