import React, { Component } from "react";
import "./Comments.css";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addComment: false,
      comments: [
        {
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
          name: "LOREM IPSUM",
          date: "JANUARY 1, 2019"
        },
        {
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
          name: "LOREM IPSUM",
          date: "JANUARY 1, 2019"
        },
        {
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
          name: "LOREM IPSUM",
          date: "JANUARY 1, 2019"
        }
      ],
      visible: 2
    };
    this.moreComments = this.moreComments.bind(this);

  }

  moreComments() {
    this.setState(prev => {
      return {
        visible: prev.visible + 1
      };
    });
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
            <span className="box-button button">POST COMMENT</span>
          </div>
        </div>
      );
    }
    return (
      <div className="comments top-border">
        <div className="comments-title-div link-header">
          <span className="">
            <span>COMMENTS</span>
            <span> {this.state.comments.length} </span>
          </span>
          <span>|</span>
          <span>
            <span
              className="button link-header"
              onClick={() =>
                this.setState({ addComment: !this.state.addComment })
              }
            > WRITE A COMMENT </span>
          </span>
        </div>
        {addComment}
        {this.state.comments.slice(0, this.state.visible).map((comment, index) => {
          return (
            <div className="comment" key={index}>
              <p>
                <span className="date">
                  {comment.name} | {comment.date}
                </span>
              </p>
              <p className="text">{comment.comment}</p>
            </div>
          );
        })}
        <div className="addComment-btn" onClick={this.moreComments}>
          {this.state.visible < this.state.comments.length && (
            <span className="box-button button">SEE MORE COMMENTS</span>
          )}
        </div>
      </div>
    );
  }
}

export default Comments;
