import React, { Component } from "react";
import "./Comments.css";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // newComment: { name: "", comment: "", date: "" },
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
    this.handleCommentInput = this.handleCommentInput.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  handleCommentInput(e) {
    let d = new Date();
    let day = d.getDate();
    var monthIndex = d.getMonth();
    var year = d.getFullYear();
    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let date = monthNames[monthIndex] + " " + day + ", " + year;

    this.setState({ [e.target.name]: e.target.value, date: date });
  }

  handleCommentSubmit(e) {
    e.preventDefault();
    this.setState({
      newComment: {
        name: this.state.name,
        comment: this.state.comment,
        date: this.state.date
      }
    });

    console.log(this.state.newComment);
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
          <div className="addComment-contact">
            <span className="addComment-contact-span">
              <span className="link">NAME</span>
              <textarea
                name="name"
                onChange={this.handleCommentInput}
                value={this.state.name}
                className="contact-input"
                type="text"
              />
            </span>
            {/* <span className="addComment-contact-span">
              <span className="link">SOCIAL MEDIA</span>
              <textarea className="contact-input" type="text" />
            </span> */}
          </div>
          <span className="link">COMMENT</span>
          <textarea
            name="comment"
            onChange={this.handleCommentInput}
            value={this.state.comment}
            className="comment-input"
            type="text"
          />
          <div
            className="addComment-btn"
            onSubmit={this.handleCommentSubmit}
            // onClick={() =>
            //   this.setState({ addComment: !this.state.addComment })
            // }
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
            >
              {" "}
              WRITE A COMMENT{" "}
            </span>
          </span>
        </div>
        {addComment}
        {this.state.comments
          .slice(0, this.state.visible)
          .map((comment, index) => {
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
