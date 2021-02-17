import { NavLink } from "react-router-dom";
import { planetInfo } from "../service/getPlanet";
import { useState, useEffect } from "react";

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
      <h3>Planet List</h3>
      {planet.map((planetObj, index) => {
        return (
          <li key={index}>
            <NavLink
              to={{
                pathname: "/planetDetail",
                state: {
                  name: planetObj.name,
                  color: planetObj.color,
                  moons: planetObj.num_moons,
                },
              }}
            >
              {planetObj.name}
            </NavLink>
          </li>
        );
      })}
    </div>
  );
}

export default Planets;
