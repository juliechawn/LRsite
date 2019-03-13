import React, { Component } from "react";
import Footer from "../Footer/Footer.js";
import StickyNavHome from "../StickyNav/StickyNavHome.js";
import MoreArticles from "../MoreArticles/MoreArticles.js";
import Header from "../Header/Header.js";
import { NavLink } from "react-router-dom";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div id="home">
        <StickyNavHome />
        <Header title={"milk mama"} artcat={"ARTICLE CAT"} />
        <div className="page-body">
          <div className="menu">ARTICLE CAT blahhh</div>
          <MoreArticles />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
