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
          <div className="about-body">
            <div className="about-img-div">
              <img
                className="home-img"
                alt="img"
                src="https://images.unsplash.com/photo-1506836467174-27f1042aa48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"
              />
            </div>
            <div className="text-div-about">
              <p className="text">
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
                <br />
                <br />
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
            <div>
            </div>
          </div>
          <div className="link-title">contact lauren</div>
          <div className="addComment">
          <span className="link">MESSAGE</span>
          <input className="comment-input" type="text" />
          <div className="addComment-contact">
            <span className="addComment-contact-span">
              <span className="link">NAME</span>
              <input className="contact-input" type="text" />
            </span>
            <span className="addComment-contact-span">
              <span className="link">EMAIL</span>
              <input className="contact-input" type="text" />
            </span>
          </div>
          <div
            className="addComment-btn cnt-reading see-more-button"
          >
            {/* <NavLink to="/article"> */}
            <span>send message</span>
            <span className="wave">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                </span>
            {/* </NavLink> */}
          </div>
        </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
