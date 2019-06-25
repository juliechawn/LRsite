import React, { Component } from "react";
import "./Footer.css";
import SocialMedia from "../SocialMedia/SocialMedia";
import { NavLink } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <SocialMedia />
        <span className="rights">ALL RIGHTS RESERVED 2019</span>
            <NavLink
              activeClassName=""
              to="/about"
            >
        <span className="logo">mm</span>
        </NavLink>
      </div>
    );
  }
}

export default Footer;
