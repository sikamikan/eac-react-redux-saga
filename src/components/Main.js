import React, { Component } from "react";
import { connect } from "react-redux";

class Main extends Component {
  state = {
    data: null
  };
  componentDidMount() {
    console.log("componentDidMount");
  }
  onCheckTangoEventos = () => {
    const { tangoEventos } = this.props;
    console.log("onCheck tangoEventos: ", tangoEventos);
    console.log("onCheck tangoEventos[0]: ", tangoEventos[0]);
  };

  render() {
    const { fetching, tangoEventos, onRequestTangoEventos, error } = this.props;

    if (tangoEventos) {
      //console.log("fetching2 ", fetching);
      console.log("tangoEventos: ", tangoEventos);
      console.log("tangoEventos[0]: ", tangoEventos[0]);
    }
    return (
      <div className="App">
        <br />
        <br />
        {fetching ? (
          <button disabled>Fetching...</button>
        ) : (
          <button onClick={onRequestTangoEventos}>Request tangoEventos</button>
        )}
        <br />
        <br />
        {error && <p style={{ color: "red" }}>Error!</p>}
        <button onClick={this.onCheckTangoEventos}>Read tangoEventos</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    tangoEventos: state.tangoEventos,
    error: state.error
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onRequestTangoEventos: () => dispatch({ type: "API_CALL_REQUEST" })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
