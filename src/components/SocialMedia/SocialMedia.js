import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class SocailMedia extends Component {
  render() {
    return (
      <div className="social-media">
        <a
          className="fa-stack fa-md button"
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-circle fa-stack-2x" />
          <i className="fab fa-instagram fa-md fa-stack-1x fa-inverse" />
        </a>
        <a
          className="fa-stack fa-md button"
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-circle fa-stack-2x" />
          <i className="fab fa-facebook-f fa-md fa-stack-1x fa-inverse" />
        </a>
        <a
          className="fa-stack fa-md button"
          href="https://www.pinterest.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-circle fa-stack-2x" />
          <i className="fab fa-pinterest-p fa-md fa-stack-1x  fa-inverse" />
        </a>
      </div>
    );
  }
}

export default SocailMedia;
