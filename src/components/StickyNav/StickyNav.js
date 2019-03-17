import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./StickyNav.css";

class StickyNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyheader: false,
      visible: false,
      displayMenu: false
    };
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    // this.handleMenu = this.handleMenu.bind(this);
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
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
          </div>
          {visible && (
            <div id="menu">
              <NavLink activeClassName="active" to="/articles">
                <p>Articles</p>
              </NavLink>
              <NavLink activeClassName="active" to="/about">
                <p>About</p>
              </NavLink>
            </div>
          )} */}
          <div className="nav-div">
            <NavLink activeClassName="active" to="/about">
              <span className="link button">ABOUT</span>
            </NavLink>
            <span className="link button" onMouseOver={this.showDropdownMenu} onClick={this.showDropdownMenu}>
              ARTICLES
            </span>
            <NavLink activeClassName="active" to="/">
              <span className="link-title">mama milk</span>
            </NavLink>
          </div>
          <div className="social-media-div" onMouseOver={this.hideDropdownMenu}>
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
        {this.state.displayMenu ? (
          <div className="menu" onMouseLeave={this.hideDropdownMenu} >
            <div className="menu-div">
              <NavLink activeClassName="active" to="/articlecategory1">
                <div>
                  {/* <img className="menu-img" alt="menu-img" src="https://images.unsplash.com/photo-1549816478-c051987383ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" /> */}
                  <span className="link button">ARTICLE CAT</span>
                </div>
              </NavLink>
              <NavLink activeClassName="active" to="/articlecategory2">
                <span className="link button">ARTICLE CAT</span>
              </NavLink>
              <NavLink activeClassName="active" to="/articlecategory3">
                <span className="link button">ARTICLE CAT</span>
              </NavLink>
              <NavLink activeClassName="active" to="/articlecategory4">
                <span className="link button">ARTICLE CAT</span>
              </NavLink>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default StickyNav;
