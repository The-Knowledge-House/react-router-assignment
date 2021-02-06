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
			<div className="planet-container">
				<p>
					<strong>Planet Name: </strong> {randomPlanet.name}
				</p>
				<p>
					<strong>Number of moons: </strong> {randomPlanet.num_moons}
				</p>
				<p>
					<strong>Color: </strong> {randomPlanet.color}
				</p>
				<img src="https://www.svgrepo.com/show/126338/planet.svg" />
			</div>
			<button onClick={fetchRandomPlanet}>Get Random Planet</button>
		</div>
	);
}
