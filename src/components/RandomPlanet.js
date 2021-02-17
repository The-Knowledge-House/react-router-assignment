import { randoPlanetInfo } from "../service/getPlanet";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function RandomPlanet(props) {
  const [randPlanet, setRandPlanet] = useState([]);

  const fetchRandoPlanets = async () => {
    const data = await randoPlanetInfo();
    setRandPlanet(data.planet);
  };
  useEffect(() => {
    fetchRandoPlanets();
    console.log();
  }, []);

  return (
    <div className="RandoPlanets">
      <h3>Random Planet</h3>
      <button onClick={fetchRandoPlanets}>Get Planet</button>
      <li>
        <NavLink
          to={{
            pathname: "/planetDetail",
            state: {
              name: randPlanet.name,
              color: randPlanet.color,
              moons: randPlanet.num_moons,
            },
          }}
        >
          {randPlanet.name}
        </NavLink>
      </li>
    </div>
  );
}

export default RandomPlanet;
