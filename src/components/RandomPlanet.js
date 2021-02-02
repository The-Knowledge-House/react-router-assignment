import React, { useState, useEffect } from "react";
import fetchPlanet from "../services/random_planets"



function RandomPlanet(props) {

  const [currentPlanet, setCurrentPlanet] = useState([]);
  const [random, setRandom] = useState(true);


  function randomPlanet() {
    if (random === false) { 
      setRandom(true);
    }
  }


  useEffect(() => { 
    const response = async () => {
      const data = await fetchPlanet();
      setCurrentPlanet(data.planet)
    }

    if(random ===true) {
      response();
      setRandom(false);
    }

  }, [random])

  console.log(currentPlanet.name);


  return (
    <div>
      <header>
        <h1>Random Planet</h1>
      </header>

      <div id= "button">
        <button onClick={() => { 
          randomPlanet()
        }}>Random</button>
      </div>

      {/* <div>{JSON.stringify(currentPlanet)}</div> */}
      <div id = "random">
        <p>Planet Name: {currentPlanet.name}</p>
        <p>Number of Moons: {currentPlanet.num_moons}</p>
        <p>Color of Planet: {currentPlanet.color}</p>
      </div>

    </div>
  )
}

export default RandomPlanet