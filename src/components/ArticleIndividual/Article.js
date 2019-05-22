import React, { Component } from "react";
import Footer from "../Footer/Footer.js";
import StickyNav from "../StickyNav/StickyNav.js";
import MoreArticles from "../MoreArticles/MoreArticles"
import Comments from "../CommentsContact/Comments"
import Share from "../Share/Share";
import "./Article.css";
import TopArticles from "../TopArticles/TopArticles.js";

class Article extends Component {
  render() {
    return (
      <div id="article">
        <StickyNav />
        <div className="page-body">
        <div className="article-body">
          <div className="article">
            <div className="titles-div">
            <p className="article-title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <p className="date"><span className="button articlecategory1">CATEGORY ONE</span> | JANUARY 1, 2019</p> 
              <div className="share-div"><Share /></div>
            </div>
            <div className="article-img-div">
              <img
                className="article-main-img"
                alt="img"
                src="https://images.unsplash.com/photo-1527599296290-e847cebb1d00?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM3Mzg5fQ"/>
            <div className="caption"><strong>caption caption caption caption caption caption caption caption caption caption caption caption</strong></div>
            </div>
            <div className="text-div-about">
              <p className="text article-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="article-img-div">
              <img className="article-vertical-img" alt="img" src="https://images.unsplash.com/photo-1527866512907-a35a62a0f6c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"/>
              <div className="caption"><strong>caption caption caption caption caption caption caption caption caption caption caption caption</strong></div>
              </div>
              <p className="text article-p"> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="article-img-div">
              <img className="article-horizontal-img" alt="img" src=" https://images.unsplash.com/photo-1497319892902-e0a47680bb6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"/>
              <div className="caption"><strong>caption caption caption caption caption caption caption caption caption caption caption caption</strong></div>
              </div>
            </div>     
            <p><Share /></p>
            </div>
            <div className="top-article-div">
            <TopArticles />
            </div>
          </div>  
          <div>
          <MoreArticles
          api={"mother"}
          category={"CATEGORY ONE"} /> 
          </div>
          <Comments />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Article;
