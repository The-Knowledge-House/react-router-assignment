import "./Planets.css";
import axios from "axios";
import { useState, useEffect } from "react";
import PlanetContainer from "./PlanetContainer";

export default function Planets(props) {
	const [planetData, setPlanetData] = useState([]);

	const fetchPlanetData = async () => {
		const response = await axios.get("https://wdi-nyc-planets-api.herokuapp.com/planets");
		setPlanetData(response.data.planets);
	};

	useEffect(() => {
		fetchPlanetData();
	}, []);

	console.log(planetData);

	return (
		<div className="planets">
			{planetData.map((entry, index) => {
				return <PlanetContainer {...entry} key={index} />;
			})}
		</div>
	);
}
