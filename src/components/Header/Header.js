import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";


class Header extends Component {
  render() {
    return (
        <div id="header">
          <NavLink activeClassName="active" exact to="/">
            <div className="name">
              <span>Mama Milk</span>
            </div>
          </NavLink>
          <NavLink activeClassName="active" to="/articlecategory1">
            <div className="dropdown">
              <span className="dropbtn">
                ARTICLE CAT
              </span>
            </div>
          </NavLink>
          <NavLink activeClassName="active" to="/articlecategory2">
            <div className="dropdown">
              <span className="dropbtn">
                ARTICLE CAT
              </span>
            </div>
          </NavLink>
          <NavLink activeClassName="active" to="/articlecategory3">
            <div className="dropdown">
              <span className="dropbtn">
                ARTICLE CAT
              </span>
            </div>
          </NavLink>
          <NavLink activeClassName="active" to="/articlecategory4">
            <div className="dropdown">
              <span className="dropbtn">
                ARTICLE CAT
              </span>
            </div>
          </NavLink>
        </div>
    );
  }
}

export default Header;
