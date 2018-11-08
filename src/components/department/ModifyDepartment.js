import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class ModifyDepartment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modifySuccess: false,
      id: this.props.location.search.slice(4)
    };

    this.modifyDepartment = this.modifyDepartment.bind(this);
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3004/departments/${this.state.id}`)
      .then(response => {
        console.log(response.data);
        this.deptName.value = response.data.name;
      })
      .catch(error => {
        console.log(error.message);
        console.log(error.message);
      });
  }

  modifyDepartment() {
    if (this.deptName.value === "") {
      alert("Enter name!");
      return;
    }

    axios
      .put(`http://localhost:3004/departments/${this.state.id}`, {
        name: this.deptName.value
      })
      .then(response => {
        this.setState({ modifySuccess: true });
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  render() {
    if (this.state.modifySuccess) return <Redirect to="/department" />;

    return (
      <div>
        <h1>Modify Department</h1>
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
            <input
              type="button"
              value="Modify"
              onClick={this.modifyDepartment}
            />
            <input type="reset" value="Reset" />
          </div>
        </form>
      </div>
    );
  }
}

export default ModifyDepartment;
