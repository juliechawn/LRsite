import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./StickyNav.css";
import { CSSTransitionGroup } from "react-transition-group";

class StickyNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDropdownMenu: false,
      displayHamburgerMenu: false
    };
  }

  render() {
    let dropdownMenu;
    if (this.state.displayDropdownMenu === true) {
      dropdownMenu = (
        <div
          className="menu-desktop"
          onMouseLeave={() => this.setState({ displayDropdownMenu: false })}
        >
          <div className="menu-desktop-div">
            <NavLink className="link underline" activeClassName="active" to="/articlecategory1">
              <span>ARTICLE CAT</span>
            </NavLink>
            <NavLink className="link underline" activeClassName="active" to="/articlecategory2">
              <span>ARTICLE CAT</span>
            </NavLink>
            <NavLink className="link underline" activeClassName="active" to="/articlecategory3">
              <span>ARTICLE CAT</span>
            </NavLink>
            <NavLink className="link underline" activeClassName="active" to="/articlecategory4">
              <span>ARTICLE CAT</span>
            </NavLink>
          </div>
        </div>
      );
    }
    let hamburgerMenu;
    if (this.state.displayHamburgerMenu === true) {
      hamburgerMenu = (
        <div className="mobile mobile-slider">
          <div className="mobile-slider-div">
            <span>
              <NavLink exact activeClassName="active" to="/">
                <span className="link underline">
                HOME
                </span>
              </NavLink>
            </span>
            <span>
              <NavLink className="link underline" activeClassName="active" to="/about">
                <span>ABOUT</span>
              </NavLink>
            </span>
            <span>
              <NavLink className="link underline" activeClassName="active" to="/articlecategory1">
                <span>ARTICLE CAT</span>
              </NavLink>
            </span>
            <span>
              <NavLink  className="link underline" activeClassName="active" to="/articlecategory2">
              <span>ARTICLE CAT</span>
              </NavLink>
            </span>
            <span>
              <NavLink className="link underline" activeClassName="active" to="/articlecategory3">
              <span>ARTICLE CAT</span>
              </NavLink>
            </span>
            <span>
              <NavLink className="link underline" activeClassName="active" to="/articlecategory4">
              <span>ARTICLE CAT</span>
              </NavLink>
            </span>
            <div className="social-media-mobile">
              <a
                className="fa-stack fa-md button"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-circle fa-stack-2x" />
                <i className="fab fa-instagram fa-md fa-stack-1x fa-inverse" />
              </a>
              <a
                className="fa-stack fa-md button"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-circle fa-stack-2x" />
                <i className="fab fa-facebook-f fa-md fa-stack-1x fa-inverse" />
              </a>
              <a
                className="fa-stack fa-md button"
                href="https://www.pinterest.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-circle fa-stack-2x" />
                <i className="fab fa-pinterest-p fa-md fa-stack-1x  fa-inverse" />
              </a>
            </div>
            {/* <span className="search">
              <span className="fa-stack fa-md">
                <i className="fa fa-square fa-stack-2x fa-inverse" />
                <i className="fas fa-search fa-md fa-stack-1x" />
              </span>
              <input placeholder="SEARCH" />
            </span> */}
          </div>
        </div>
      );
    }
    return (
      <div id="nav">
        <div id="stickyheader">
          <div className="mobile mobile-header">
            <div
              className="menu-btn"
              onClick={() =>
                this.setState({
                  displayHamburgerMenu: !this.state.displayHamburgerMenu
                })
              }
            >
              <div
                className={
                  this.state.displayHamburgerMenu ? "change bar1" : "bar1"
                }
              />
              <div
                className={
                  this.state.displayHamburgerMenu ? "change bar2" : "bar2"
                }
              />
              <div
                className={
                  this.state.displayHamburgerMenu ? "change bar3" : "bar3"
                }
              />
            </div>
            <div className="mobile-title">
              <NavLink exact activeClassName="" to="/">
                <span className="link-title button">mama milk</span>
              </NavLink>
            </div>
          </div>
          <CSSTransitionGroup
            transitionName="background"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}
          >
            {hamburgerMenu}
          </CSSTransitionGroup>
          <div className="nav-div">
            <NavLink className="link underline" activeClassName="active" to="/about">
              <span>ABOUT</span>
            </NavLink>
            <span
              className="articles-menu link underline"
              onMouseEnter={() => this.setState({ displayDropdownMenu: true })}
            >
              ARTICLES
            </span>
            <NavLink exact activeClassName="" to="/">
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
            <a
              className="fa-stack fa-md button"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-circle fa-stack-2x" />
              <i className="fab fa-instagram fa-md fa-stack-1x fa-inverse" />
            </a>
            <a
              className="fa-stack fa-md button"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-circle fa-stack-2x" />
              <i className="fab fa-facebook-f fa-md fa-stack-1x fa-inverse" />
            </a>
            <a
              className="fa-stack fa-md button"
              href="https://www.pinterest.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-circle fa-stack-2x" />
              <i className="fab fa-pinterest-p fa-md fa-stack-1x  fa-inverse" />
            </a>
          </div>
        </div>
        <CSSTransitionGroup
          transitionName="background"
          animation="0.5s slideIn forwards"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {dropdownMenu}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default StickyNav;
