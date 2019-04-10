import React, { Component } from "react";
import "./Header.css";
// import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="page-header">
        <div className="mobile page-header-photogrid-mobile">
          <img
            className="photogrid-img"
            alt="grid-img"
            src="https://images.unsplash.com/photo-1445633629932-0029acc44e88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          />
        </div>

        <div className="page-header-photogrid-tablet">
          <div className="page-header-column-tablet">
            <img
              className="photogrid-img"
              alt="grid-img"
              src="https://images.unsplash.com/photo-1445633629932-0029acc44e88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          <div className="page-header-column-tablet">
            <img
              className="photogrid-img"
              alt="grid-img"
              src="https://images.unsplash.com/photo-1445633629932-0029acc44e88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />
          </div>
        </div>
        <div className="page-header-photogrid-desktop">
          <div className="page-header-column-desktop">
            <img
              className="page-header-img"
              alt="grid-img"
              src="https://images.unsplash.com/photo-1445633629932-0029acc44e88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          <div className="page-header-column-desktop">
            <img
              className="page-header-img"
              alt="grid-img"
              src="https://images.unsplash.com/photo-1445633629932-0029acc44e88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          <div className="page-header-column-desktop">
            <img
              className="page-header-img"
              alt="grid-img"
              src="https://images.unsplash.com/photo-1445633629932-0029acc44e88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          <div className="page-header-column-desktop">
            <img
              className="page-header-img"
              alt="grid-img"
              src="https://images.unsplash.com/photo-1445633629932-0029acc44e88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />
          </div>
        </div>
        <div className="photogrid-div">
          <div className="photogrid-title">{this.props.title}</div>
        </div>
      </div>
    );
  }
}

export default Header;
