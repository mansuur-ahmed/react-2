import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class AddDepartment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addSuccess: false
    };

    this.addDepartment = this.addDepartment.bind(this);
  }

  addDepartment() {
    if (this.deptName.value === "") {
      alert("Enter name!");
      return;
    }

    axios
      .post("http://localhost:3004/departments", {
        name: this.deptName.value
      })
      .then(response => {
        this.setState({ addSuccess: true });
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  render() {
    if (this.state.addSuccess) return <Redirect to="/department" />;

    return (
      <div>
        <h1>Add Department</h1>
        <form action="">
          <div className="form-input">
            <label>Name:</label>
            <input
              type="text"
              ref={node => {
                this.deptName = node;
              }}
            />
          </div>

          <div className="form-input">
            <input type="button" value="Add" onClick={this.addDepartment} />
            <input type="reset" value="Reset" />
          </div>
        </form>
      </div>
    );
  }
}

export default AddDepartment;
