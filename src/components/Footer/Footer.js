import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import SocialMedia from "../SocialMedia/SocialMedia";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <SocialMedia />
        <span className="menu-link link">ALL RIGHTS RESERVED 2019</span>
      </div>
    );
  }
}

export default Footer;
