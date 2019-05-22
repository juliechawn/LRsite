import React from "react";

class Message extends React.Component {
  render() {
    return (
      <div className="contact-form top-border">
        <div className="link-header">contact lauren</div>
        <div className="addComment">
          <span className="link">MESSAGE</span>
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
          <div className="addComment-btn">
            <span className="box-button button">SEND MESSAGE</span>
          </div>
          <div />
        </div>
      </div>
    );
  }
}

export default Message;
