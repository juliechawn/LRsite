import React, { Component } from "react";
import Footer from "../Footer/Footer.js";
import StickyNavHome from "../StickyNav/StickyNavHome.js";
import MoreArticles from "../MoreArticles/MoreArticles.js";
import HeaderHome from "../Header/HeaderHome.js";
import ArticlePreviewHome from "./ArticlePreviewHome/ArticlePreviewHome";
import "./Home.css";
import { NavLink } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div id="home">
        <StickyNavHome />
        <HeaderHome
          title={"milk mama"}
          subheader={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
        />
        <div className="page-body">
          <div className="home-body">
            <div className="home-top-article">
              <div className="top-img-div">
                <img
                  className="home-top-article-img"
                  alt="img"
                  src="https://images.unsplash.com/photo-1458071103673-6a6e4c4a3413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                />
                <div className="tags-div">
                  <NavLink
                    exact
                    activeClassName=""
                    className="articlecategory2"
                    to="/articlecategory2"
                  >
                    <span>category two</span>
                  </NavLink>
                </div>
              </div>
              <div className="home-top-article-text">
                <span className="home-title">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </span>
                <div className="home-text-preview-div">
                <div className="home-text">
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
                </div>
                </div>
                <div className="addComment-btn">
                  <NavLink to="/article">
                    <span className="box-button button">CONTINUE READING</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <MoreArticles api={"family"} category={"CATEGORY ONE"} />
        </div>

        <Footer />
      </div>
    );
  }
}

export default Home;
