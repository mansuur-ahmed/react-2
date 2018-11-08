import React from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "../../utils/PrivateRoute";

import ShowDepartments from "./ShowDepartments";
import AddDepartment from "./AddDepartment";
import ModifyDepartment from "./ModifyDepartment";

class DepartmentList extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <PrivateRoute exact path="/department" component={ShowDepartments} />
          <PrivateRoute path="/department/add" component={AddDepartment} />
          <PrivateRoute
            path="/department/modify"
            component={ModifyDepartment}
          />
        </Switch>
      </div>
    );
  }
}

export default DepartmentList;
