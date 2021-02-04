import { randoPlanetInfo } from "../service/getPlanet";
import { useState, useEffect } from "react";
import PlanetDetail from "./PlanetDetail";

function RandomPlanet(props) {
  const [randPlanet, setRandPlanet] = useState({});

  const fetchRandoPlanets = async () => {
    const data = await randoPlanetInfo();
    // console.log(data);
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

      {/* <PlanetDetail {...randPlanet} /> */}

      {randPlanet?.map((planetObj, index) => {
        return (
          <div>
            <h3>Random Planet</h3>
            <PlanetDetail {...planetObj} key={index} />
          </div>
        );
      })}
    </div>
  );
}

export default RandomPlanet;
