import React, { Component } from "react";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import StickyNavHome from "../Header/StickyNavHome/StickyNavHome.js";
import { NavLink } from "react-router-dom";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div id="">
        <StickyNavHome />
        <div className="home-header">
          <div className="photogrid">
            <div className="column">
              <img
                className="photogrid-img vertical"
                alt="grid-img"
                src="https://images.unsplash.com/photo-1549816478-c051987383ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
              />
            </div>
            <div className="column">
              <img
                className="photogrid-img horizontal"
                alt="grid-img"
                src="https://images.unsplash.com/photo-1511184117514-74b2b39697a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              />
              <img
                className="photogrid-img horizontal"
                alt="grid-img"
                src="https://images.unsplash.com/photo-1444427169197-de497742b62d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
              />
            </div>
            <div className="column">
              <img
                className="photogrid-img vertical"
                alt="grid-img"
                src="https://images.unsplash.com/photo-1549816478-c051987383ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
              />
            </div>
            <div className="column">
              <img
                className="photogrid-img horizontal"
                alt="grid-img"
                src="https://images.unsplash.com/photo-1518208734895-46d2ff97e480?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1293&q=80"
              />
              <img
                className="photogrid-img horizontal"
                alt="grid-img"
                src="https://images.unsplash.com/photo-1444427169197-de497742b62d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
              />
            </div>
          </div>
          <div className="photogrid-div">
            <div className="photogrid-title">mama milk</div>
            <div className="photogrid-links">
            <NavLink activeClassName="active" to="/articlecategory1">
             <span className="header-link">ARTICLE CAT</span>
             </NavLink>
             <NavLink activeClassName="active" to="/articlecategory2">
             <span className="header-link">ARTICLE CAT</span>
             </NavLink>
             <NavLink activeClassName="active" to="/articlecategory3">
             <span className="header-link">ARTICLE CAT</span>
             </NavLink>
             <NavLink activeClassName="active" to="/articlecategory4">
             <span className="header-link">ARTICLE CAT</span>
             </NavLink>
            </div>
          </div>
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
                  src="https://images.unsplash.com/photo-1511184117514-74b2b39697a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                />
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
