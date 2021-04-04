import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import logo from "../images/logo.svg";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="container-fluid">
          <Link className="navbar_brand" to="/">
            <img src={logo} alt="logo" />
            <span className="font-weight-light navbar_brand-logo">Platzi</span>
            <span className="font-weight-bold">Conf</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
