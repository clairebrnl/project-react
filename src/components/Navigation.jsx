import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink exact to="/" activeClassName="nav-active">
        Home
      </NavLink>
      <NavLink exact to="/About" activeClassName="nav-active">
          About
      </NavLink>
      <NavLink exact to ="/HarryPotter" activeClassName="nav-active">
          Harry Potter
      </NavLink>
    </div>
  );
};

export default Navigation;
