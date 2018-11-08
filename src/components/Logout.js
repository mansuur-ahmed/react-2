import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { logoutAction } from "../actions/loginActions";

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.props.dispatch(logoutAction());
  }

  render() {
    return <Redirect to="/" />;
  }
}

export default connect()(Logout);
