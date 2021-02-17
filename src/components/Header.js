import "../styles/Header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="app-links">
      <h1 className="app-title">Planetas</h1>
      <nav className="app-nav">
        <li>
          <NavLink to="/">Home </NavLink>
        </li>
        <li>
          <NavLink to="/planets">Planets</NavLink>
        </li>
        <li>
          <NavLink to="/randomPlanet">Random Planet</NavLink>
        </li>
      </nav>
    </header>
  );
}
