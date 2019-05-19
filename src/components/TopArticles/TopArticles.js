import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./TopArticles.css";

class TopArticles extends Component {
  render() {
    return (
          <div className="top-articles">
          <div className="cnt-reading top-articles-header">top articles</div>
          <NavLink exact activeClassName="" to="/article">
            <div className="top-article bottom-margin">
            <div className="top-article-img-div">
              <img 
                className="top-article-img"
                alt="img"
                src="https://images.unsplash.com/photo-1549816478-c051987383ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"/>
              </div>
              <div className="top-article-title-div">
              <span className="button articlecategory1">CATEGORY ONE</span> 
              <p className="top-article-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
            </NavLink>
            <NavLink exact activeClassName="" to="/article">
            <div className="top-article top-article-border">
            <div className="top-article-img-div">
              <img 
                className="top-article-img"
                alt="img"
                src="https://images.unsplash.com/photo-1516897106004-1ed8b96ea408?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80"/>
              </div>
              <div className="top-article-title-div">
              <span className="button articlecategory4">CATEGORY FOUR</span> 
              <p className="top-article-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
            </NavLink>
            <NavLink exact activeClassName="" to="/article">
            <div className="top-article top-article-border">
            <div className="top-article-img-div">
              <img 
                className="top-article-img"
                alt="img"
                src="https://images.unsplash.com/photo-1527599296290-e847cebb1d00?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM3Mzg5fQ"/>
              </div>
              <div className="top-article-title-div">
              <span className="button articlecategory3">CATEGORY THREE</span> 
              <p className="top-article-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
            </NavLink>
          </div>
    );
  }
}

export default TopArticles;
