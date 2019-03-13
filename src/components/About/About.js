import React from "react";
import Footer from "../Footer/Footer.js";
import StickyNav from "../StickyNav/StickyNav.js";
import Header from "../Header/Header.js"
import "./About.css"

class About extends React.Component {
  render() {
    return(
      <div id="about">
      <StickyNav />
      <Header title={"About"} />
        <div className="body-page">
          <div>About</div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default About;