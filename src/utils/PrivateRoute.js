import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
function PrivateRoute(props) {
  const { loggedIn } = props;

  if (!loggedIn) {
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: { from: props.location }
        }}
      />
    );
  }

  return <Route {...props} />;
}

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn
  };
}

export default connect(mapStateToProps)(PrivateRoute);

/*
//Below code copied from: https://reacttraining.com/react-router/web/example/auth-workflow

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
*/
