import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Planets from './components/Planets';
import PlanetRandom from './components/RandomPlanet';
import PlanetDetail from './components/PlanetDetail';


function App() {
  return (
    <div>
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/planets">Planets</Link>
          </li>
          
          <li>
          <Link to="/planetRandom">Planet Random</Link>
          </li>
        </nav>

      <main>
        <Switch>  
          <Route exact path="/" component={Home} />
          <Route path="/planets" component={Planets} />
          <Route path="/planetRandom" component={PlanetRandom} />
          <Route exact path="/planetDetail" component={PlanetDetail} />
        </Switch>
      </main>
      </div>
      
    
  );
}

export default App;
