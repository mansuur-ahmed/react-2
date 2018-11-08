import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { loginAction } from "../actions/loginActions";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      un: "",
      pwd: "",
      loginSuccess: false
    };

    this.submitForm = this.submitForm.bind(this);
    this.unChange = this.unChange.bind(this);
    this.pwdChange = this.pwdChange.bind(this);
  }

  unChange(ev) {
    this.setState({ un: ev.target.value });
  }

  pwdChange(ev) {
    this.setState({ pwd: ev.target.value });
  }

  submitForm() {
    if (this.state.un === "") {
      alert("Enter Username!");
      return;
    }

    if (this.state.pwd === "") {
      alert("Enter Password!");
      return;
    }

    const submitValues = {
      un: this.state.un,
      pwd: this.state.pwd
    };

    if (submitValues.un === "admin" && submitValues.pwd === "test") {
      this.props.dispatch(loginAction());
      this.setState({ loginSuccess: true });
    } else {
      alert("Invalid crdentials! Enter correct Username & Password");
    }
  }

  render() {
    if (this.state.loginSuccess) return <Redirect to="/" />;
    return (
      <div>
        <h1>Login</h1>
        <form action="">
          <div className="form-input">
            <label>Username:</label>
            <input type="text" value={this.state.un} onChange={this.unChange} />
          </div>

          <div className="form-input">
            <label>Password:</label>
            <input
              type="password"
              value={this.state.pwd}
              onChange={this.pwdChange}
            />
          </div>

          <div className="form-input">
            <input type="button" value="Login" onClick={this.submitForm} />
            <input type="reset" value="Reset" />
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(Login);
