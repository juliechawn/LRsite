import React, { Component } from "react";
// import Navbar from "./Navbar";
import Footer from "../../Footer/Footer.js";
import StickyNav from "../../StickyNav/StickyNav.js";
import MoreArticles from "../../MoreArticles/MoreArticles"
import Comments from "../../Comments/Comments"
import Share from "../../Share/Share";
import "./Article.css";

class Article extends Component {
  render() {
    return (
      <div id="article">
        <StickyNav />
        <div className="page-body">
        <div className="article-body">
          <div className="article">
            <div className="titles-div">
              <p className="date"><span className="articlecategory1">CATEGORY 1</span> | JANUARY 1, 2019 | <Share /> </p>
              <p className="article-title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
            <div className="article-img-div">
              <img
                className="article-img"
                alt="img"
                src="https://images.unsplash.com/photo-1549816478-c051987383ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
              />
            <div className="caption"><strong>caption caption caption caption caption caption caption caption caption caption caption caption</strong></div>
            </div>
            <div className="text-div-about">
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>     
            </div>        
            <Share />
            </div>
          <MoreArticles />
          <Comments />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Article;
