import React from "react";
import { NavLink } from "react-router-dom";
import "./CSS/Navbar.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {/* <nav id="stay-in-touch">
          <NavLink activeClassName="active" to="/about">
            <div className="dropdown">
              <span>ABOUT</span>
            </div>
          </NavLink>
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
        </nav>
        <header>
          <NavLink activeClassName="active" exact to="/">
            <div className="name">
              <span>Mama Milk</span>
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
        </header> */}
      </div>
    );
  }
}
export default Navbar;
