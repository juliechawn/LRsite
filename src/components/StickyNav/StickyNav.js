import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./StickyNav.css";

class StickyNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyheader: false,
      displayDropdownMenu: false,
      displayHamburgerMenu: false
    };
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    // this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    this.showHamburgerMenu = this.showHamburgerMenu.bind(this);
    // this.hideHamburgerMenu = this.hideHamburgerMenu.bind(this);
    // this.handleMenu = this.handleMenu.bind(this);
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  showHamburgerMenu(event) {
    event.preventDefault();
    this.setState({ displayHamburgerMenu: true }, () => {
      document.addEventListener("click", this.showHamburgerMenu);
    });
  }

  // hideHamburgerMenu(event) {
  //   event.preventDefault();
  //   this.setState({ displayHamburgerMenu: false}, () => {
  //     document.removeEventListener("click", this.hideHamburgerMenu);
  //   });
  // }



  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayDropdownMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  componentWillUnmount() {
    this.setState({ displayDropdownMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }

  render() {

    return (
      <div id="nav">
        <div id="stickyheader">
          <div className="mobile mobile-header">
            <div
              className="menu-btn"
              // onMouseOver={this.showDropdownMenu}
              onClick={this.showHamburgerMenu}
              // onClick={() => this.setState({ visible: !this.state.visible })}
            >
              <div className={this.state.displayHamburgerMenu ? "bar1" : "change bar1"} />
              <div className={!this.state.displayHamburgerMenu ? "bar2" : "change bar2"} />
              <div className={!this.state.displayHamburgerMenu ? "bar3" : "change bar3"} />
            </div>
            <div className="mobile-title">
              <NavLink activeClassName="active" to="/">
                <span className="link-title">mama milk</span>
              </NavLink>
            </div>
          </div>
          {this.state.displayHamburgerMenu ? (
            <div className="mobile mobile-menu">
              <NavLink activeClassName="active" to="/articles">
                <span className="link button">Articles</span>
              </NavLink>
              <NavLink activeClassName="active" to="/about">
                <span className="link">About</span>
              </NavLink>
            </div>
          ) : null}
          <div className="nav-div">
            <NavLink activeClassName="active" to="/about">
              <span className="link button">ABOUT</span>
            </NavLink>
            <span
              className="link button"
              onMouseOver={this.showDropdownMenu}
              onClick={this.showDropdownMenu}
            >
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
        {this.state.displayDropdownMenu ? (
          <div className="menu-desktop" 
          // onMouseLeave={this.hideDropdownMenu}
          >
            <div className="menu-desktop-div">
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
