import React from "react";
import Footer from "../Footer/Footer.js";
import StickyNav from "../StickyNav/StickyNav.js";
import Header from "../Header/Header.js";
import "./About.css";

class About extends React.Component {
  render() {
    return (
      <div id="about">
        <StickyNav />
        <Header title={"About Lauren"} />
        <div className="page-body">
          <div className="article-category-body">
            <div className="idv-post">
              <div className="img-tags-div">
                <img
                  className="home-img"
                  alt="img"
                  src="https://images.unsplash.com/photo-1549816478-c051987383ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
                />
              </div>
              <div className="text-div">
                <p className="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
