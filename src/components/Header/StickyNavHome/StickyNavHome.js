import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./StickyNavHome.css";

class StickyNavHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyheader: false,
      menu: false
    };
    this.handleScroll = this.handleScroll.bind(this);
    // this.handleMenu = this.handleMenu.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (window.pageYOffset > 50) {
      this.setState({
        stickyheader: true
      });
    } else {
      this.setState({
        stickyheader: false
      });
    }
  }

  onMouseEnter() {
    // this.setState({
    //   menu: true
    // });
  }

  onMouseLeave() {
    // this.setState({
    //   menu: false
    // });
  }

  render() {
    let stickyheader;
    if (this.state.stickyheader === true) {
      stickyheader = (
        <div className="nav">
          <NavLink activeClassName="active" to="/about">
            <div className="dropdown">
              <span>ABOUT</span>
            </div>
          </NavLink>
          <div className="subnav">
            <span className="headerlink-article" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
              ARTICLES
              <i className="fas fa-caret-down fa-ld" />
            </span>
          </div>
          <NavLink activeClassName="active" to="/">
            <div className="headerlink">
              <span className="stickyheader-name">mama milk</span>
            </div>
          </NavLink>
        </div>
      );
    }
    let regularheader;
    if (this.state.stickyheader === false) {
      stickyheader = (
        <div className="nav">
          <NavLink activeClassName="active" to="/about">
            <div className="headerlink-about">
              <span>ABOUT</span>
            </div>
          </NavLink>
        </div>
      );
    }
    let menu;
    if (this.state.menu === true) {
      menu = <div className="menu">ARTICLE CAT</div>;
    }
    return (
      <div id="nav">
        <div id="stickyheader">
          {regularheader}
          {stickyheader}
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
        <div className="menu">ARTICLE CAT</div>
      </div>
    );
  }
}

export default StickyNavHome;
