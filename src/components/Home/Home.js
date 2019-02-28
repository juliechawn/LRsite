import React, { Component } from "react";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import StickyNavHome from "../Header/StickyNavHome/StickyNavHome.js";
import { NavLink } from "react-router-dom";
import "./Home.css"

class Home extends Component {
  render() {
    return (
      <div id="">
        <StickyNavHome />
        <div className="circle-div">
          <span className="circle"></span>
        </div>
        <div className="more-articles">
          <div className="more-articles-header"><p>MORE ARTICLES</p></div>
          <div className="more-articles-div">
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
            <div className="more-article">
              <img
                className="more-img"
                alt="img"
                src="https://images.unsplash.com/photo-1518208734895-46d2ff97e480?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1293&q=80"
              />
              <div className="more-title">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
            <div className="more-article">
              <img
                className="more-img"
                alt="img"
                src="https://images.unsplash.com/photo-1518208734895-46d2ff97e480?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1293&q=80"
              />
              <div className="more-title">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
          </div>
          </div>
        <Footer />
      </div>
    );
  }
}

export default Home;