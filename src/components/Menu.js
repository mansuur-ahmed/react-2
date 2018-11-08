import React from "react";
import { NavLink } from "react-router-dom";

class Menu extends React.Component {
  render() {
    return (
      <nav className="nav">
        <div>
          <NavLink exact to="/" activeClassName="activeMenuItem">
            Home
          </NavLink>
        </div>
        <div>
          <NavLink to="/department" activeClassName="activeMenuItem">
            Department
          </NavLink>
        </div>
        <div>
          <NavLink to="/employee" activeClassName="activeMenuItem">
            Employee
          </NavLink>
        </div>
        <div>
          <NavLink to="/logout" activeClassName="activeMenuItem">
            Logout
          </NavLink>
        </div>
      </nav>
    );
  }
}

export default Menu;
