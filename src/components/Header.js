import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="app-links">
      <nav className="app-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/planets">Planets</Link>
        </li>
        <li>
          <Link to="/randomPlanet">Random Planet</Link>
        </li>
      </nav>
    </header>
  );
}
