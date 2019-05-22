import React from "react";
import Footer from "../Footer/Footer.js";
import StickyNav from "../StickyNav/StickyNav.js";
import TopArticles from "../TopArticles/TopArticles";
import Contact from "../CommentsContact/Contact"
import "./About.css";

class About extends React.Component {
  render() {
    return (
      <div id="about">
        <StickyNav />
        <div className="page-body">
        <div className="article-body">
          <div className="article">
            <div className="article-img-div">
              <img
                className="article-main-img"
                alt="img"
                src="https://images.unsplash.com/photo-1506836467174-27f1042aa48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80" />
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
            </div>     
            </div>
            <div className="top-article-div">
            <Contact />
            <TopArticles />
            </div>
            </div>
          </div>  
        <Footer />
      </div>
    );
  }
}

export default About;
