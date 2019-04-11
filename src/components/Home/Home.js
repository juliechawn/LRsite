import React, { Component } from "react";
import Footer from "../Footer/Footer.js";
import StickyNavHome from "../StickyNav/StickyNavHome.js";
import MoreArticles from "../MoreArticles/MoreArticles.js";
import HeaderHome from "../Header/HeaderHome.js";
import ArticlePreview from "../Articles/ArticlePreview/ArticlePreview";

// import { NavLink } from "react-router-dom";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div id="home">
        <StickyNavHome />
        <HeaderHome title={"milk mama"} artcat={"ARTICLE CAT"} />
        <div className="page-body">
        <ArticlePreview
              date={"TUESDAY, JANUARY 1, 2019"}
              title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
              image={
                "https://images.unsplash.com/photo-1549816478-c051987383ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
              }
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
        <MoreArticles />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
