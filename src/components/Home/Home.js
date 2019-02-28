import React, { Component } from "react";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import StickyNav from "../Header/StickyNav/StickyNav.js";
import { NavLink } from "react-router-dom";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div id="">
        <StickyNav />
        <div className="circle-div">
          <span className="circle" />
        </div>
        <div className="more-articles">
          <div className="more-articles-header">
            <p>MORE ARTICLES</p>
          </div>
          <div className="more-articles-div">
            <NavLink to="/article">
              <div className="more-article">
                <img
                  className="more-img"
                  alt="img"
                  src="https://images.unsplash.com/photo-1549816478-c051987383ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
                />
                <div className="more-title">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </NavLink>
            <NavLink to="/article">
              <div className="more-article">
                <img
                  className="more-img"
                  alt="img"
                  src="https://images.unsplash.com/photo-1444427169197-de497742b62d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
                  />
                <div className="more-title">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </NavLink>
            <NavLink to="/article">
              <div className="more-article">
                <img
                  className="more-img"
                  alt="img"
                  src="https://images.unsplash.com/photo-1511184117514-74b2b39697a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"                />
                <div className="more-title">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
