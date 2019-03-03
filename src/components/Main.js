import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "../logo.svg";

class Main extends Component {
  state = {
    data: null
  };
  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/image/random")
      //.then(response => response.json())
      .then(data => console.log("data1", data));
  }

  render() {
    const { fetching, dog, onRequestDog, error } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={dog || logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Dog Saga</h1>
        </header>

        {dog ? (
          <p className="App-intro">Keep clicking for new dogs</p>
        ) : (
          <p className="App-intro">Replace the React icon with a dog!</p>
        )}

        {fetching ? (
          <button disabled>Fetching...</button>
        ) : (
          <button onClick={onRequestDog}>Request a Dog</button>
        )}

        {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    dog: state.dog,
    error: state.error
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: () => dispatch({ type: "API_CALL_REQUEST" })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
//export default  Main
