import React, { Component } from "react";

class SocailMedia extends Component {
  render() {
    return (
      <div className="social-media">
      <span>
        <a
          className="fa-stack fa-md button"
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram fa-md fa-stack-1x fa-inverse" />
        </a>
        </span>
        <span>
        <a
          className="fa-stack fa-md button"
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f fa-md fa-stack-1x fa-inverse" />
        </a>
        </span>
        <span>
        <a
          className="fa-stack fa-md button"
          href="https://www.pinterest.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-pinterest-p fa-md fa-stack-1x  fa-inverse" />
        </a>
        </span>
      </div>
    );
  }
}

export default SocailMedia;
