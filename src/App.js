import "./App.css";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Planets from "./components/Planets";
import RandomPlanet from "./components/RandomPlanet";
import PlanetContainer from "./components/PlanetContainer";

function App() {
	return (
		<div>
			<Nav />
			<div className="App">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/planets" component={Planets} />
					<Route path="/random" component={RandomPlanet} />
					<Route path="/planetContainer" component={PlanetContainer} />
				</Switch>
			</div>
		</div>
	);
}

export default App;
