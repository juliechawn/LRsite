import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./StickyNav.css";
import StickyNav from "./StickyNav";
import SocialMedia from "../SocialMedia/SocialMedia";

class StickyNavHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyheader: false
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
    if (window.pageYOffset > 300) {
      this.setState({
        stickyheader: true
      });
    } else {
      this.setState({
        stickyheader: false
      });
    }
  }

  render() {
    let stickyheader;
    if (this.state.stickyheader === true) {
      stickyheader = <StickyNav />;
    }
    
    let homeheader;
    if (this.state.stickyheader === false) {
      homeheader = (
        <div id="nav">
          <div id="stickyheader">
            <div className="home-header-mobile">
              <StickyNav />
            </div>
            <div className="nav-div">
              <NavLink activeClassName="active" to="/about">
                <span className="nav-about link underline">ABOUT</span>
              </NavLink>
            </div>
            <div className="social-media-div">
              <span className="search">
                <span className="fa-stack fa-md">
                  <i className="fa fa-square fa-stack-2x fa-inverse" />
                  <i className="fas fa-search fa-md fa-stack-1x" />
                </span>
                <input placeholder="SEARCH" />
              </span>
            </div>
          </div>
          <div className="menu-scroll">
            <div className="menu-desktop-div">
              <NavLink
                className="menu-link link"
                activeClassName="active"
                to="/articlecategory1"
              >
                <span>CATEGORY ONE</span>
              </NavLink>
              <NavLink
                className="menu-link link"
                activeClassName="active"
                to="/articlecategory2"
              >
                <span>CATEGORY TWO</span>
              </NavLink>
              <NavLink
                className="menu-link link"
                activeClassName="active"
                to="/articlecategory3"
              >
                <span>CATEGORY THREE</span>
              </NavLink>
              <NavLink
                className="menu-link link"
                activeClassName="active"
                to="/articlecategory4"
              >
                <span>CATEGORY FOUR</span>
              </NavLink>
              <SocialMedia />
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        {homeheader}
        {stickyheader}
      </div>
    );
  }
}

export default StickyNavHome;
