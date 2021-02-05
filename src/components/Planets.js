import "./Planets.css";
import axios from "axios";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

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
				// return <PlanetContainer {...entry} key={index} />;
				return (
					<li key={index}>
						<Link
							to={{
							pathname: "/planetContainer",
							state: {
								name: entry.name,
								color: entry.color,
								moon: entry.num_moons
							}
							}}>
							{entry.name}
					</Link>
					</li>
				)
			})}
		</div>
	);
}

// <li key={index}>
{/* <NavLink
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
</li> */}
