import axios from "axios";
import { useState, useEffect } from "react";
import PlanetContainer from "./PlanetContainer";
import "./RandomPlanet.css";

export default function RandomPlanet() {
	const [randomPlanet, setRandomPlanet] = useState([]);

	const fetchRandomPlanet = async () => {
		const response = await axios.get("https://wdi-nyc-planets-api.herokuapp.com/planets/random");
		setRandomPlanet(response.data.planet);
	};

	console.log(randomPlanet);

	useEffect(() => {
		fetchRandomPlanet();
	}, []);

	return (
		<div className="random-planet-container">
			<PlanetContainer name={randomPlanet.name} num_moons={randomPlanet.num_moons} color={randomPlanet.color} />
			<button onClick={fetchRandomPlanet}>Get Random Planet</button>
		</div>
	);
}
