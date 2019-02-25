import React, { Component } from "react";
import "./ArticleCategory.css";
import Footer from "../../Footer/Footer.js";
import StickyNav from "../../Header/StickyNav/StickyNav.js";

class ArticleCategory extends Component {
  render() {
    return (
      <div id="article-category">
        <StickyNav />
        <div className="article-category-body">

        </div>
        <Footer />
      </div>
    );
  }
}

export default ArticleCategory;