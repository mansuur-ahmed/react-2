import React from "react";
import { Route, Switch } from "react-router-dom";

import PrivateRoute from "../utils/PrivateRoute";
import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";
import DepartmentList from "./department/DepartmentList";
import EmployeeList from "./employee/EmployeeList";

class Main extends React.Component {
  render() {
    return (
      <section className="content">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <PrivateRoute path="/department" component={DepartmentList} />
          <PrivateRoute path="/employee" component={EmployeeList} />
          <Route
            path="*"
            render={props => {
              return (
                <h3 style={{ color: "red" }}>
                  {props.match.url}: This page does not exist!
                </h3>
              );
            }}
          />
        </Switch>
      </section>
    );
  }
}

export default Main;
