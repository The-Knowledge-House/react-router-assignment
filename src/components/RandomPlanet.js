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
      setCurrentPlanet(data)
    }

    response()

  },[])



  return (
    <div>
      <header>
        <h1>Random Planet</h1>
      </header>

      <button onClick={() => { 
        randomPlanet()
      }}>Random</button>


      {/* <div>{JSON.stringify(currentPlanet)}</div> */}
    </div>
  )
}

export default RandomPlanet