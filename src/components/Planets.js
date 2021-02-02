import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from 'react-router-dom';



const url = "https://wdi-nyc-planets-api.herokuapp.com/planets";



function Planets(props) {

  const [planetName, setPlanetName] = useState([]);


  useEffect(() => {
    const response = async () => { 
      const { data } = await axios.get(url)
      
      console.log(data.planets)
      setPlanetName(data.planets)
    }

    response();
  }, [])




  return (
    <div>
      <h1>Planet List</h1>

      <ul>
        {
          planetName.map((planet) => { 
            return <li><Link to={
              {
                pathname: "/planetDetail",
                state: {
                  planetColor: planet.color,
                  numMoons: planet.num_moons
                }
            }
            }>{planet.name}</Link></li>
          })
        }
      </ul>

    
      </div>
  )
}

export default Planets;