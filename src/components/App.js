import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./CSS/App.css";
import "./CSS/Navbar.css";

class App extends Component {
  render() {
    return (
      <div className="home">
        <nav id="stay-in-touch">
          <NavLink activeClassName="active" to="/about">
            <div className="dropdown">
              <span>ABOUT</span>
            </div>
          </NavLink>
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
        </nav>
        <header>
          <NavLink activeClassName="active" exact to="/">
            <div className="name">
              <span>Mama Milk</span>
            </div>
          </NavLink>
          <NavLink activeClassName="active" to="/articles">
            <div className="dropdown">
              <span className="dropbtn">
                ARTICLES
                <i className="fas fa-caret-down fa-lg" />
              </span>
              <div className="dropdown-content">
                <p href="#">LINK</p>
                <p href="#">LINK</p>
                <p href="#">LINK</p>
                <p href="#">ALL ARTICLES</p>
              </div>
            </div>
          </NavLink>
        </header>
        <div className="all-posts">
          <div className="idv-post">
            <div className="img-tags-div">
              <img
                alt="img"
                src="https://images.unsplash.com/photo-1511184117514-74b2b39697a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              />
              <div className="tags-div">
                <span className="tag-span-1">LATEST</span>
                <span className="tag-span-2">WORKING</span>
                <span className="tag-span-3">BABY</span>
              </div>
            </div>
            <div className="text-div">
              <div className="titles-div">
                <p className="date">TUESDAY, JANUARY 1, 2019</p>
                <p className="title">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
              <div className="text-preview-div">
                <p id="text-preview" className="text-preview">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className="cnt-reading">
                <span>... continue reading</span>
              </div>
              <div className="share-post">
                <span>
                  <span>LIKE</span>
                  <i className="fas fa-heart fa-lg" />
                  <span>1</span>
                </span>
                <span>|</span>
                <span>
                  <span>SHARE</span>
                  <i className="fab fa-instagram fa-lg" />
                  <i className="fab fa-facebook-f fa-lg" />
                  <i className="fab fa-pinterest-p fa-lg" />
                  {/* <i className="far fa-share-square fa-lg" /> */}
                </span>
              </div>
            </div>
          </div>
          <div className="idv-post">
            <div className="img-tags-div">
              <img
                alt="img"
                src="https://images.unsplash.com/photo-1549816478-c051987383ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
              />
              <div className="tags-div">
                <span className="tag-span-1">LATEST</span>
                <span className="tag-span-2">WORKING</span>
                <span className="tag-span-3">BABY</span>
              </div>
            </div>
            <div className="text-div">
              <div className="titles-div">
                <p className="date">TUESDAY, JANUARY 1, 2019</p>
                <p className="title">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
              <div className="text-preview-div">
                <p id="text-preview" className="text-preview">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className="cnt-reading">
                <span>... continue reading</span>
              </div>
              <div className="share-post">
                <span>
                  <span>LIKE</span>
                  <i className="fas fa-heart fa-lg" />
                  <span>1</span>
                </span>
                <span>|</span>
                <span>
                  <span>SHARE</span>
                  <i className="fab fa-instagram fa-lg" />
                  <i className="fab fa-facebook-f fa-lg" />
                  <i className="fab fa-pinterest-p fa-lg" />
                  {/* <i className="far fa-share-square fa-lg" /> */}
                </span>
              </div>
            </div>
          </div>
          <div className="idv-post">
            <div className="img-tags-div">
              <img
                alt="img"
                src="https://images.unsplash.com/photo-1518208734895-46d2ff97e480?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1293&q=80"
              />
              <div className="tags-div">
                <span className="tag-span-1">LATEST</span>
                <span className="tag-span-2">WORKING</span>
                <span className="tag-span-3">BABY</span>
              </div>
            </div>
            <div className="text-div">
              <div className="titles-div">
                <p className="date">TUESDAY, JANUARY 1, 2019</p>
                <p className="title">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
              <div className="text-preview-div">
                <p id="text-preview" className="text-preview">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className="cnt-reading">
                <span>... continue reading</span>
              </div>
              <div className="share-post">
                <span>
                  <span>LIKE</span>
                  <i className="fas fa-heart fa-lg" />
                  <span>1</span>
                </span>
                <span>|</span>
                <span>
                  <span>SHARE</span>
                  <i className="fab fa-instagram fa-lg" />
                  <i className="fab fa-facebook-f fa-lg" />
                  <i className="fab fa-pinterest-p fa-lg" />
                  {/* <i className="far fa-share-square fa-lg" /> */}
                </span>
              </div>
            </div>
          </div>
          <div className="idv-post">
            <div className="img-tags-div">
              <img
                alt="img"
                src="https://images.unsplash.com/photo-1444427169197-de497742b62d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
              />
              <div className="tags-div">
                <span className="tag-span-1">LATEST</span>
                <span className="tag-span-2">WORKING</span>
                <span className="tag-span-3">BABY</span>
              </div>
            </div>
            <div className="text-div">
              <div className="titles-div">
                <p className="date">TUESDAY, JANUARY 1, 2019</p>
                <p className="title">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
              <div className="text-preview-div">
                <p id="text-preview" className="text-preview">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className="cnt-reading">
                <span>... continue reading</span>
              </div>
              <div className="share-post">
                <span>
                  <span>LIKE</span>
                  <i className="fas fa-heart fa-lg" />
                  <span>1</span>
                </span>
                <span>|</span>
                <span>
                  <span>SHARE</span>
                  <i className="fab fa-instagram fa-lg" />
                  <i className="fab fa-facebook-f fa-lg" />
                  <i className="fab fa-pinterest-p fa-lg" />
                  {/* <i className="far fa-share-square fa-lg" /> */}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
