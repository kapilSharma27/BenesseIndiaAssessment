import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AuthContextType, AuthContext } from "../../context/auth/authContext";

const Navbar: React.FC<NavbarProps> = ({ title = "BENESSE ASSESMENT", icon= "fas fa-id-card-alt" }) => {
  const authContext: AuthContextType = useContext(AuthContext);


  const { isAuthenticated, logout, user } = authContext;


  const onLogout = () => {
    logout && logout();
  };


  const authLinks = (
    <Fragment>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href="/login">
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );

  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </nav>
  );
};



interface NavbarProps {
  title?: string;
  icon?: string;
}

export default Navbar;
