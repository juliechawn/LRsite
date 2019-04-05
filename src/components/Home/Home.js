import React, { Component } from "react";
import Footer from "../Footer/Footer.js";
import StickyNavHome from "../StickyNav/StickyNavHome.js";
import MoreArticles from "../MoreArticles/MoreArticles.js";
import HeaderHome from "../Header/HeaderHome.js";
// import { NavLink } from "react-router-dom";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div id="home">
        <StickyNavHome />
        <HeaderHome title={"milk mama"} artcat={"ARTICLE CAT"} />
        <div className="page-body">
        <MoreArticles />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
