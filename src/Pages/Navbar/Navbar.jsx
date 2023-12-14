import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";
import Offcanvas from "./Offcanvas";

const Navbar = () => {

  return (
    <div className="sectionfive-main-nav">
      <nav className="Sectionfive-Navbar">
        <div className="Sectionfive-Navbar-Logo-div">
          <Link to="/">
            <img
              className="Sectionfive-Navbar-Logo"
              src={require("./navbarimages/header_logo_one (1).png")}
              alt=""
            />
            <img className="Sectionfive-Navbar-Logo-2" src={require("./navbarimages/mg.png")} alt="" />
          </Link>
        </div>
        <div className="Sectionfive-navbar-pages">
          <Link className="Sectionfive-Link" to="/">
            Home
          </Link>
          <Link className="Sectionfive-Link" to="/AboutUs">
            About Us
          </Link>
          <Link className="Sectionfive-Link" to="/Services">
            Services
          </Link>
          <Link className="Sectionfive-Link" to="/Portfolio">
            Portfolio
          </Link>
          <Link className="Sectionfive-Link" to="/ContactUs">
            Contact Us
          </Link>
        </div>

        {/* ==============================offcanvasmenu========================================= */}
        <div className="sectionfive-off-bar">
        <Offcanvas/>
        </div>
      </nav>
      
      <Outlet />
    </div>
  );
};

export default Navbar;
