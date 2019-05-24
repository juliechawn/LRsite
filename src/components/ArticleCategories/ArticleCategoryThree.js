import React, { Component } from "react";
import Footer from "../Footer/Footer.js";
import StickyNav from "../StickyNav/StickyNav.js";
import MoreArticles from "../MoreArticles/MoreArticles"
import ArticlePreviewRight from "../ArticlePreviews/ArticlePreviewRight";
import PageTitle from "../PageTitle/PageTitle"

class ArticleCategoryThree extends Component {
  render() {
    return (
      <div id="article-category">
        <StickyNav />
        <div className="page-body">
        <PageTitle pagetitle={"category three"} />
          <div className="article-category-body">
            <ArticlePreviewRight
              category={"CATEGORY THREE"}
              date={"JANUARY 1, 2019"}
              title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
              image={
                "https://images.unsplash.com/photo-1509116043833-3233ceed8153?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              }
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
          </div>
          <MoreArticles 
          api={"breastfeeding"}
          category={"CATEGORY THREE"}/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ArticleCategoryThree;
