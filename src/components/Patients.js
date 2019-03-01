import React, { Component } from "react";
import { connect } from "react-redux";

class Patients extends Component {
  render() {
    return <div>Main Component</div>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initPosts: post => dispatch({ type: "INIT_POSTS" })
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Patients);
