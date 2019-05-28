import React, { Component } from "react";
import Footer from "../Footer/Footer.js";
import StickyNavHome from "../StickyNav/StickyNavHome.js";
import MoreArticles from "../MoreArticles/MoreArticles.js";
import HeaderHome from "../Header/HeaderHome.js";
import "./Home.css";
import ArticlePreviewRight from "../ArticlePreviews/ArticlePreviewRight";
import ArticlePreviewLeft from "../ArticlePreviews/ArticlePreviewLeft";
import "../App.css";
import { NavLink } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: "top-img-div zoom"
    };
  }

  render() {
    return (
      <div id="home">
        <StickyNavHome />
        <HeaderHome
          title={"milk mama"}
          subheader={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
        />
        <div className="page-body-home two-opacity">
          <span className="anchor" id="home-top" />
          <div className="home-body">
            <div className="home-articles-div">
              <ArticlePreviewRight
                category={"CATEGORY FOUR"}
                date={"JANUARY 1, 2019"}
                title={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                }
                image={
                  "https://images.unsplash.com/photo-1549069786-641f4cb652c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                }
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
              />
              <ArticlePreviewLeft
                category={"CATEGORY THREE"}
                date={"JANUARY 1, 2019"}
                title={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                }
                image={
                  "https://images.unsplash.com/photo-1509115429432-e9b549ffb669?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
              />
              
            </div>
            <div className="home-about-div">
              <div className="home-about-img-div">
                <img
                  alt="img"
                  className="home-about-img"
                  src="https://images.unsplash.com/photo-1458071103673-6a6e4c4a3413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                />
                <div className="home-about-title-div">
                <div className="page-title">about lauren</div>

                <p className="home-about-title text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="home-about-btn">
                  <NavLink to="/article">
                    <span className="box-button button">READ MORE</span>
                  </NavLink>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-more-articles">
          <MoreArticles api={"family"} category={"CATEGORY ONE"} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
