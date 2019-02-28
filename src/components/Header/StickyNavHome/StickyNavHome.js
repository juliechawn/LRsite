import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./StickyNavHome.css";

class StickyNavHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyheader: false,
      nav: "nav",
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
       
      });
    } else {
      this.setState({
        stickyheader: false,
        nav: "nav",
      });
    }
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
            <span className="subnavbtn">
              ARTICLES
              <i className="fas fa-caret-down fa-lg" />
            </span>
            <div className="subnav-content">
            <div className="subnav-layout">
              <NavLink activeClassName="active" to="/articlecategory">
              {/* <img
                  className="nav-img"
                  alt="img"
                  src="https://images.unsplash.com/photo-1511184117514-74b2b39697a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                /> */}
                <p href="#">ARTICLE CAT</p>
              </NavLink>
              <NavLink activeClassName="active" to="/articlecategory"> 
                <p href="#">ARTICLE CAT</p>
              </NavLink>
              <NavLink activeClassName="active" to="/articlecategory">
                <p href="#">ARTICLE CAT</p>
              </NavLink>
              <NavLink activeClassName="active" to="/articlecategory">
                <p href="#">ARTICLE CAT</p>
              </NavLink>
              </div>
            </div>
          </div>
          <NavLink activeClassName="active" to="/">
            <div className="headerlink">
              <span className="stickyheader-name">MamaMilk</span>
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
            <div className="headerlink">
              <span>ABOUT</span>
            </div>
          </NavLink>
        </div>
      );
    }
    return (
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
    );
  }
}

export default StickyNavHome;
