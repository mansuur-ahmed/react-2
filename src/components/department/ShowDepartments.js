import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import DepartmentRow from "./DepartmentRow";

class ShowDepartment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      departments: [],
      selectId: 0
    };

    this.selectDepartment = this.selectDepartment.bind(this);
    this.deleteDepartment = this.deleteDepartment.bind(this);
  }

  loadDepartments() {
    axios
      .get("http://localhost:3004/departments")
      .then(response => {
        this.setState({ departments: response.data });
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  componentDidMount() {
    this.loadDepartments();
  }

  selectDepartment(id) {
    this.setState({ selectId: id });
  }

  deleteDepartment() {
    if (this.state.selectId === 0) {
      alert("Please select department to delete!");
    }
    axios
      .delete(`http://localhost:3004/departments/${this.state.selectId}`)
      .then(response => {
        this.loadDepartments();
        this.setState({ selectId: 0 });
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  render() {
    const deptListJSX = this.state.departments.map(element => {
      return (
        <DepartmentRow
          key={element.id}
          data={element}
          selectHandler={this.selectDepartment}
        />
      );
    });

    let modifyURL = "";
    if (this.state.selectId === 0) {
      modifyURL = "/department";
    } else {
      modifyURL = `/department/modify?id=${this.state.selectId}`;
    }

    return (
      <div>
        <h1>Departments</h1>
        <form action="">
          <div>
            <Link to="/department/add">
              <input type="button" value="Create" />
            </Link>
            <Link to={modifyURL}>
              <input type="button" value="Update" />
            </Link>
            <input
              type="button"
              value="Delete"
              onClick={this.deleteDepartment}
            />
          </div>
          <div>
            <table id="tab">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>

              <tbody>{deptListJSX}</tbody>
            </table>
          </div>
        </form>
      </div>
    );
  }
}

export default ShowDepartment;
