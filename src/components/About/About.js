import React from "react";
import Footer from "../Footer/Footer.js";
import StickyNav from "../StickyNav/StickyNav.js";
import "./About.css"

class About extends React.Component {
  render() {
    return(
      <div id="About">
      <StickyNav />
        <div className="about-body">
        About
        </div>
        <Footer />
      </div>
    )
  }
}

export default About;