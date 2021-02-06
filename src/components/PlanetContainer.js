import "./PlanetContainer.css";

export default function PlanetContainer(props) {
	return (
		<div className="planet-container">
			<p>
				<strong>Planet Name: </strong> {props.location.state.name}
			</p>
			<p>
				<strong>Number of moons: </strong> {props.location.state.moons}
			</p>
			<p>
				<strong>Color: </strong> {props.location.state.color}
			</p>
			<img src="https://www.svgrepo.com/show/126338/planet.svg" />
		</div>
	);
}
