import React from "react";
import Share from "../Share/Share";
import { NavLink } from "react-router-dom";
import "./ArticlePreview.css"

class ArticlePreviewLeft extends React.Component {
  getCategory() {
    switch (this.props.category) {
      case "CATEGORY ONE":
        return "articlecategory1";
      case "CATEGORY TWO":
        return "articlecategory2";
      case "CATEGORY THREE":
        return "articlecategory3";
      case "CATEGORY FOUR":
        return "articlecategory4";
      default:
    }
  }
  render() {
    return (
      <div className="home-top-article reverse">
      <div className="home-top-article-text">
        <span className="date">(this.prop.data)</span>
        <span className="home-title">
{this.props.title}
        </span>
        <div className="home-text-preview-div">
          <div className="home-text">
            {this.props.text}
          </div>
        </div>
        <div className="addComment-btn">
          <NavLink to="/article">
            <span className="box-button button">CONTINUE READING</span>
          </NavLink>
        </div>
        <Share />
      </div>
      <div className="top-img-div">
        <img
          src={this.props.image}
          className="home-top-article-img"
          alt="img"
        />
        <div className="tags-div">
          <NavLink
            exact
            activeClassName=""
            className={`button ${this.getCategory()}`}
            to={`/${this.getCategory()}`}
          >
            <span>{this.props.category}</span>
          </NavLink>
        </div>
      </div>
    </div>
   );
  }
}

export default ArticlePreviewLeft;