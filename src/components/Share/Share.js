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
          <i className="fab fa-instagram fa-lg button" />
          <i className="fab fa-facebook-f fa-lg button" />
          <i className="fab fa-pinterest-p fa-lg button" />
        </span>
      </span>
    );
  }
}

export default Share;