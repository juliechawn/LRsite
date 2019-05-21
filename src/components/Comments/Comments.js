import React, { Component } from "react";
import "./Comments.css";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addComment: false
    };
  }
  render() {
    let addComment;
    if (this.state.addComment === true) {
      addComment = (
        <div className="addComment">
          <span
            className="close-addComment"
            onClick={() =>
              this.setState({ addComment: !this.state.addComment })
            }
          >
            <i className="fas fa-times" />
          </span>
          <span className="link">COMMENT</span>
          <textarea className="comment-input" type="text" />
          <div className="addComment-contact">
            <span className="addComment-contact-span">
              <span className="link">NAME</span>
              <textarea className="contact-input" type="text" />
            </span>
            <span className="addComment-contact-span">
              <span className="link">EMAIL</span>
              <textarea className="contact-input" type="text" />
            </span>
          </div>
          <div
            className="addComment-btn"
            onClick={() =>
              this.setState({ addComment: !this.state.addComment })
            }
          >
            {/* <NavLink to="/article"> */}
            <span className="box-button button">POST COMMENT</span>
            {/* </NavLink> */}
          </div>
        </div>
      );
    }
    return (
      <div className="comments top-border">
        <div className="share-post">
          <span>
            <span>COMMENTS</span>
            <span> 2 </span>
          </span>
          <span>|</span>
          <span>
            <span
              className="button"
              onClick={() =>
                this.setState({ addComment: !this.state.addComment })
              }
            >
              WRITE A COMMENT
            </span>
          </span>
        </div>
        {addComment}
        <div className="comment">
          <p>
            <span className="date">LOREM IPSUM | TUESDAY, JANUARY 1, 2019</span>
          </p>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="comment">
          <p>
            <span className="date">LOREM IPSUM | TUESDAY, JANUARY 1, 2019</span>
          </p>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="addComment-btn">
          {/* <NavLink to="/article"> */}
          <span className="box-button button">SEE MORE COMMENTS</span>
          {/* </NavLink> */}
        </div>
      </div>
    );
  }
}

export default Comments;
