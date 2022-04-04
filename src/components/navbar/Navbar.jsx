import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <NavLink className="nav-link" to="/recipe"> RECIPE </NavLink>
      </div>

      <div className="navbar-right">
        <NavLink className="nav-link" to="/about"> ABOUT </NavLink>
        <NavLink className="nav-link" to="/login"> LOGOUT </NavLink>
        <a className="nav-link" href="https://github.com/" target="_blank">
          {" "}
          GITHUB{" "}
        </a>
      </div>
    </div>
  );
};

export default Navbar;
