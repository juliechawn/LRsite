import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./StickyNav.css";

class StickyNav extends Component {
  render() {
    return (
        <div id="stickyheader">
          <div className="nav">
            <NavLink activeClassName="active" to="/about">
              <div className="dropdown">
                <span>ABOUT</span>
              </div>
            </NavLink>
            <NavLink activeClassName="active" to="/articles">
            <div className="dropdown">
              <span className="dropbtn">
                ARTICLES
                <i className="fas fa-caret-down fa-lg" />
              </span>
              <div className="dropdown-content">
                <p href="#">LINK</p>
                <p href="#">LINK</p>
                <p href="#">LINK</p>
                <p href="#">ALL ARTICLES</p>
              </div>
            </div>
          </NavLink>
          <NavLink activeClassName="active" to="/">
            <div className="dropdown">
              <span className="stickyheader-name">MamaMilk</span>
            </div>
          </NavLink>
          </div>
          <div className="social-media">
            <span className="search">
              <span className="fa-stack fa-md">
                <i className="fa fa-square fa-stack-2x fa-inverse" />
                <i className="fas fa-search fa-md fa-stack-1x" />
              </span>
              <input placeholder="SEARCH" />
            </span>
            <span className="fa-stack fa-md">
              <i className="fa fa-circle fa-stack-2x" />
              <i className="fab fa-instagram fa-md fa-stack-1x fa-inverse" />
            </span>
            <span className="fa-stack fa-md">
              <i className="fa fa-circle fa-stack-2x" />
              <i className="fab fa-facebook-f fa-md fa-stack-1x fa-inverse" />
            </span>
            <span className="fa-stack fa-md">
              <i className="fa fa-circle fa-stack-2x" />
              <i className="fab fa-pinterest-p fa-md fa-stack-1x  fa-inverse" />
            </span>
          </div>
        </div>
    );
  }
}

export default StickyNav;
