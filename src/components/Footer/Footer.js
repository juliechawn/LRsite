import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <p className="link">ALL RIGHTS RESERVED 2019</p>
        <NavLink exact activeClassName="" to="/about">
        <span className="link">CONTACT</span>
        </NavLink>
      </div>
    );
  }
}

export default Footer;