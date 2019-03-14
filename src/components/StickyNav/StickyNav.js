import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./StickyNav.css";

class StickyNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyheader: false,
      visible: false,
      menu: false
    };
    // this.handleMenu = this.handleMenu.bind(this);
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
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
    // const { visible } = this.state;
    // let menu;
    // if (this.state.menu === true) {
    //   menu = <div className="menu">ARTICLE CAT</div>;
    // }
    return (
      <div id="nav">
          <div id="stickyheader">
          {/* <div
            className="menu-btn"
            onClick={() => this.setState({ visible: !this.state.visible })}
          >
            <div className={!this.state.visible ? "bar1" : "change bar1"} />
            <div className={!this.state.visible ? "bar2" : "change bar2"} />
            <div className={!this.state.visible ? "bar3" : "change bar3"} />
          </div> */}
          {/* { visible &&
              <div id="menu">
                <NavLink activeClassName="active" to="/articles">
                  <p>Articles</p>
                </NavLink>
                <NavLink activeClassName="active" to="/about">
                  <p>About</p>
                </NavLink>
              </div>
          } */}
            <div className="nav-div">
              <NavLink activeClassName="active" to="/about">
                <span className="link button">ABOUT</span>
              </NavLink>
              <span
                className="link"
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
              >
                ARTICLES
              </span>
              <NavLink activeClassName="active" to="/">
                <span className="link-title">mama milk</span>
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
          {/* <div className="menu">ARTICLE CAT</div> */}
        </div>
      </div>
    );
  }
}

export default StickyNav;


