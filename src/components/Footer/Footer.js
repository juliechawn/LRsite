import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <p className="link">ALL RIGHTS RESERVED 2019</p>
        <p className="link">CONTACT</p>
        {/* <div className="social-media-div-footer">
              <span className="search">
                <span className="fa-stack fa-md">
                  <i className="fa fa-square fa-stack-2x fa-inverse" />
                  <i className="fas fa-search fa-md fa-stack-1x" />
                </span>
                <input placeholder="SEARCH" />
              </span>
              <span className="fa-stack fa-md">
                <i className="fa fa-circle fa-stack-2x" />
                <i className="fab fa-instagram fa-md fa-stack-1x fa-inverse" />
              </span>
              <span className="fa-stack fa-md">
                <i className="fa fa-circle fa-stack-2x" />
                <i className="fab fa-facebook-f fa-md fa-stack-1x fa-inverse" />
              </span>
              <span className="fa-stack fa-md">
                <i className="fa fa-circle fa-stack-2x" />
                <i className="fab fa-pinterest-p fa-md fa-stack-1x  fa-inverse" />
              </span>
            </div> */}
      </div>
    );
  }
}

export default Footer;