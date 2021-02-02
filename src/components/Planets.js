import axios from "axios";
import React, { useState, useEffect } from "react";
import PlanetDetail from './PlanetDetail';


const url = "https://wdi-nyc-planets-api.herokuapp.com/planets";



function Planets(props) {

  const [planetName, setPlanetName] = useState([]);


  useEffect(() => {
    const response = async () => { 
      const { data } = await axios.get(url)
      
      console.log(data.planets)
    }

    response();
  })




  return (
    <div>
      <h1>Planet List</h1>
    </div>
  )
}

export default Planets;