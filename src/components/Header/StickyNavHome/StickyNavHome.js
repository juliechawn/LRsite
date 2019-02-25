import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./StickyNavHome.css";

class StickyNavHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyheader: false,
      nav: "nav",
      logoheader: ".header"
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (window.pageYOffset > 100) {
      this.setState({
        stickyheader: true,
        nav: "nav-scroll",
        logoheader: ".header"
      });
    } else {
      this.setState({
        stickyheader: false,
        nav: "nav",
        logoheader: "header-none"
      });
    }
  }
  render() {
    let stickyheader;
    if (this.state.stickyheader === true) {
      stickyheader = (
        <div className="stickyheader-scroll">
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
            <NavLink activeClassName="active" to="/">
              <div className="dropdown">
                <span className="stickyheader-name">MamaMilk</span>
              </div>
            </NavLink>
        </div>
      );
    }
    return (
      <div id="stickyheader">
        <div className={this.state.nav}>
          <NavLink activeClassName="active" to="/about">
            <div className="dropdown">
              <span>ABOUT</span>
            </div>
          </NavLink>
          {stickyheader}
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

export default StickyNavHome;
