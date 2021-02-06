import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
	return (
		<nav>
			<Link to="/">
				<li>Home</li>
			</Link>
			<Link to="/planets">
				<li>Planets</li>
			</Link>
			<Link to="/random">
				<li>Random Planets</li>
			</Link>
		</nav>
	);
}
