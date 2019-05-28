import React, { Component } from "react";
import Footer from "../Footer/Footer.js";
import StickyNav from "../StickyNav/StickyNav.js";
import MoreArticles from "../MoreArticles/MoreArticles"
import ArticlePreviewRight from "../ArticlePreviews/ArticlePreviewRight";
import PageTitle from "../PageTitle/PageTitle"

class ArticleCategoryFour extends Component {
  render() {
    return (
      <div id="article-category">
        <StickyNav />
        <div className="page-body">
        <PageTitle pagetitle={"category four"} />

          <div className="article-category-body two-opacity">
            <ArticlePreviewRight
              category={"CATEGORY FOUR"}
              date={"JANUARY 1, 2019"}
              title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
              image={
              "https://images.unsplash.com/photo-1549069786-641f4cb652c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            }
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
            <ArticlePreviewRight
              category={"CATEGORY FOUR"}
              date={"JANUARY 1, 2019"}
              title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
              image={
                "https://images.unsplash.com/photo-1516897106004-1ed8b96ea408?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80"
              }
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
            </div>
        <MoreArticles 
        api={"working"}
        category={"CATEGORY FOUR"}/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ArticleCategoryFour;
