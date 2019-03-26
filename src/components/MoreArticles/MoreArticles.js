import React, { Component } from "react";
import "./MoreArticles.css";
import { NavLink } from "react-router-dom";

class MoreArticles extends Component {
  render() {
    return (
        <div className="more-articles top-border">
          <div className="link-title">more articles</div>
          <div className="more-articles-div">
          <NavLink to="/article">
            <div className="more-article">
              <img
                className="more-img"
                alt="img"
                src="https://images.unsplash.com/photo-1549816478-c051987383ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
                />
              <div className="more-title">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
            </NavLink>
            <NavLink to="/article">
            <div className="more-article">
              <img
                className="more-img"
                alt="img"
                src="https://images.unsplash.com/photo-1511184117514-74b2b39697a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              />
              <div className="more-title">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
            </NavLink>
            <NavLink to="/article">
            <div className="more-article">
              <img
                className="more-img"
                alt="img"
                src="https://images.unsplash.com/photo-1518208734895-46d2ff97e480?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1293&q=80"
              />
              <div className="more-title">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
            </NavLink>
          </div>
          </div>
    );
  }
}

export default MoreArticles;