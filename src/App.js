import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Planets from "./components/Planets";
import RandomPlanet from "./components/RandomPlanet";

function App() {
  return (
    <div>
      <Header />
      <main className="app-main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/planets" component={Planets} />
          <Route path="/randomPlanet" component={RandomPlanet} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
