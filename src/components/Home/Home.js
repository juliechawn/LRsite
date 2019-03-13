import React, { Component } from "react";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import StickyNavHome from "../Header/StickyNav/StickyNavHome.js";
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
                src="https://images.unsplash.com/photo-1501714869488-1e3e64b423d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              />
            </div>
            <div className="column">
              <img
                className="photogrid-img horizontal"
                alt="grid-img"
                src="https://images.unsplash.com/photo-1452830978618-d6feae7d0ffa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              />
              <img
                className="photogrid-img horizontal"
                alt="grid-img"
                src="https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              />
            </div>
            <div className="column">
              <img
                className="photogrid-img vertical"
                alt="grid-img"
                src="https://images.unsplash.com/photo-1445633629932-0029acc44e88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              />
            </div>
            <div className="column">
              <img
                className="photogrid-img horizontal"
                alt="grid-img"
                src="https://images.unsplash.com/photo-1547115293-cee20f19b938?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1518&q=80"
              />
              <img
                className="photogrid-img horizontal"
                alt="grid-img"
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              />
            </div>
          </div>
          <div className="photogrid-div">
            <div className="photogrid-title">mama milk</div>
            <div className="photogrid-links">
            <NavLink activeClassName="active" to="/articlecategory1">
             <p className="header-link">ARTICLE CAT</p>
             </NavLink>
             <NavLink activeClassName="active" to="/articlecategory2">
             <p className="header-link">ARTICLE CAT</p>
             </NavLink>
             <NavLink activeClassName="active" to="/articlecategory3">
             <p className="header-link">ARTICLE CAT</p>
             </NavLink>
             <NavLink activeClassName="active" to="/articlecategory4">
             <p className="header-link">ARTICLE CAT</p>
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
