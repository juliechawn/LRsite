import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./StickyNav.css";
import StickyNav from "./StickyNav";

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
    if (window.pageYOffset > 250) {
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
                <span className="link underline">ABOUT</span>
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
              <span className="fa-stack fa-md button">
                <i className="fa fa-circle fa-stack-2x" />
                <i className="fab fa-instagram fa-md fa-stack-1x fa-inverse" />
              </span>
              <span className="fa-stack fa-md button">
                <i className="fa fa-circle fa-stack-2x" />
                <i className="fab fa-facebook-f fa-md fa-stack-1x fa-inverse" />
              </span>
              <span className="fa-stack fa-md button">
                <i className="fa fa-circle fa-stack-2x" />
                <i className="fab fa-pinterest-p fa-md fa-stack-1x  fa-inverse" />
              </span>
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
