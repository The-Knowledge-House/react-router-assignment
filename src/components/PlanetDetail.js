




function PlanetDetail(props) {

  console.log(props.location.state.planetColor);
  console.log(props.location.state.numMoons);

  return (
    <div>
      <h1>
        Planet Detail
      </h1>

      <div id = "random">
        <p>Color of Planet: {props.location.state.planetColor}</p>
        <p>Number of Moons: {props.location.state.numMoons}</p>
      </div>
    </div>
  )
}

export default PlanetDetail;