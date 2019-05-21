import React, { Component } from "react";
import "./ArticleCategory.css";
import Footer from "../Footer/Footer.js";
import StickyNav from "../StickyNav/StickyNav.js";
import MoreArticles from "../MoreArticles/MoreArticles"
import ArticlePreviewRight from "../ArticlePreviews/ArticlePreviewRight";

class ArticleCategoryTwo extends Component {
  render() {
    return (
      <div id="article-category">
      <StickyNav />
        <div className="page-body">
          <div className="article-category-body">
            <ArticlePreviewRight
              category={"CATEGORY TWO"}
              date={"JANUARY 1, 2019"}
              title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
              image={
                "https://images.unsplash.com/photo-1511184117514-74b2b39697a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              }
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
            <ArticlePreviewRight
              category={"CATEGORY TWO"}
              date={"JANUARY 1, 2019"}
              title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
              image={
                "https://images.unsplash.com/photo-1491440305722-061438e1cdc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              }
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
          </div>
          <MoreArticles 
          api={"baby"}
          category={"CATEGORY TWO"}/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ArticleCategoryTwo;
