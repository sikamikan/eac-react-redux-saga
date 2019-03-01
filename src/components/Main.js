import React, { Component } from "react";
import { connect } from "react-redux";

class Main extends Component {
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
)(Main);
//export default  Main
