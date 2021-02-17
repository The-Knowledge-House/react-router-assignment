function PlanetDetail(props) {
  return (
    <div className="planet-details">
      <h2>Planet Detail</h2>
      <h3>{props.location.state.name}</h3>
      <p>
        Color: <span>{props.location.state.color}</span>
      </p>
      <p>sta
        {" "}
        Number of Moons : <span>{props.location.state.moons}</span>
      </p>
    </div>
  );
}

export default PlanetDetail;
