import { planetInfo } from "../service/getPlanet";
import { useState, useEffect } from "react";
import PlanetDetail from "./PlanetDetail";

function Planets(props) {
  const [planet, setPlanet] = useState([]);

  const fetchPlanets = async () => {
    const data = await planetInfo();
    console.log(data);
    setPlanet(data.planets);
  };
  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <div className="planets">
      <h1>Planet List</h1>
      {planet.map((planetObj, index) => {
        return (
          <div>
            <PlanetDetail {...planetObj} key={index} />
          </div>
        );
      })}
    </div>
  );
}

export default Planets;
