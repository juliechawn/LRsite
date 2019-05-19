import React, { Component } from "react";
import Share from "../../Share/Share";
import { NavLink } from "react-router-dom";
import "./ArticlePreviewHome.css"

class ArticlePreviewHome extends Component {
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
      <div className="home-idv-post">
        <div className="img-tags-div">
          <NavLink to="/article">
            <img className="home-img" alt="img" src={this.props.image} />
          </NavLink>
          <div className="tags-div">
            <NavLink
              exact activeClassName=""
              className={`button ${this.getCategory()}`}
              to={`/${this.getCategory()}`}
            >
              <span>{this.props.category}</span>
            </NavLink>
          </div>
        </div>
        <div className="home-text-div">
          <div className="titles-div">
            <p className="date">{this.props.date}</p>
            <NavLink to="/article">
              <span className="title">{this.props.title}</span>
            </NavLink>
          </div>
          <div className="home-text-preview-div">
            <p className="text">{this.props.text}</p>
          </div>
          <div className="see-more-button cnt-reading">
            <NavLink to="/article">
              <span>
                continue reading
                <span className="wave">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                </span>
              </span>
            </NavLink>
          </div>
          <Share />
        </div>
      </div>
    );
  }
}

export default ArticlePreviewHome;
