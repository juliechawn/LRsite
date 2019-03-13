import React, { Component } from "react";
import "./ArticleCategory.css";
import Footer from "../../Footer/Footer.js";
import StickyNav from "../../StickyNav/StickyNav.js";
import Header from "../../Header/Header.js"

import { NavLink } from "react-router-dom";

class ArticleCategoryThree extends Component {
  render() {
    return (
      <div id="article-category">
        <StickyNav />
        <Header title={"article cat"} />
        <div className="page-body">
          <div className="article-category-body">
            <div className="idv-post">
              <div className="img-tags-div">
                <NavLink to="/article">
                  <img
                    className="home-img"
                    alt="img"
                    src="https://images.unsplash.com/photo-1518208734895-46d2ff97e480?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1293&q=80"
                  />
                </NavLink>
                <div className="tags-div">
                  <NavLink className="tag-span-1" to="/articlecategory">
                    <span>ARTICLE CAT</span>
                  </NavLink>
                  <NavLink className="tag-span-2" to="/articlecategory">
                    <span to="/articlecategory">ARTICLE CAT</span>
                  </NavLink>
                  <NavLink className="tag-span-3" to="/articlecategory">
                    <span to="/articlecategory">ARTICLE CAT</span>
                  </NavLink>
                </div>
              </div>
              <div className="text-div">
                <div className="titles-div">
                  <p className="date">TUESDAY, JANUARY 1, 2019</p>
                  <NavLink to="/article">
                    <p className="title">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </NavLink>
                </div>
                <div className="text-preview-div">
                  <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </p>
                </div>
                <div className="cnt-reading">
                  <NavLink to="/article">
                    <span>... continue reading</span>
                  </NavLink>
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
                <NavLink to="/article">
                  <img
                    className="home-img"
                    alt="img"
                    src="https://images.unsplash.com/photo-1518208734895-46d2ff97e480?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1293&q=80"
                  />
                </NavLink>
                <div className="tags-div">
                  <NavLink className="tag-span-1" to="/articlecategory">
                    <span>ARTICLE CAT</span>
                  </NavLink>
                  <NavLink className="tag-span-2" to="/articlecategory">
                    <span to="/articlecategory">ARTICLE CAT</span>
                  </NavLink>
                  <NavLink className="tag-span-3" to="/articlecategory">
                    <span to="/articlecategory">ARTICLE CAT</span>
                  </NavLink>
                </div>
              </div>
              <div className="text-div">
                <div className="titles-div">
                  <p className="date">TUESDAY, JANUARY 1, 2019</p>
                  <NavLink to="/article">
                    <p className="title">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </NavLink>
                </div>
                <div className="text-preview-div">
                  <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </p>
                </div>
                <div className="cnt-reading">
                  <NavLink to="/article">
                    <span>... continue reading</span>
                  </NavLink>
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
        <Footer />
      </div>
    );
  }
}

export default ArticleCategoryThree;
