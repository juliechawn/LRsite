import React, { Component } from "react";

class Share extends Component {
  render() {
    return (
      <span className="share-post">
        <span>
          <span>LIKE</span>
          <i className="fas fa-heart fa-lg button" />
          <span>1</span>
        </span>
        <span>|</span>
        <span>
          <span>SHARE</span>
          <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram fa-lg button" />
          </a>
          <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f fa-lg button" />
          </a>
          <a
          href="https://www.pinterest.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-pinterest-p fa-lg button" />
          </a>
        </span>
      </span>
    );
  }
}

export default Share;