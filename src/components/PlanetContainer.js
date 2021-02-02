import "./PlanetContainer.css";

export default function PlanetContainer(props) {
	return (
		<div className="planet-container">
			<p>
				<strong>Planet Name: </strong> {props.name}
			</p>
			<p>
				<strong>Number of moons: </strong> {props.num_moons}
			</p>
			<p>
				<strong>Color: </strong> {props.color}
			</p>
			<img src="https://www.svgrepo.com/show/126338/planet.svg" />
		</div>
	);
}
