import React, { Component } from "react";
import "./HeaderHome.css";
// import { NavLink } from "react-router-dom";

class HeaderHome extends Component {
  render() {
    return (
      <div className="home-header">
        <div className="mobile page-header-photogrid-mobile">
          <div className="column">
            <img
              className="photogrid-img vertical"
              alt="grid-img"
              src="https://images.unsplash.com/photo-1501714869488-1e3e64b423d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            />
          </div>
          <div className="column">
            <img
              className="photogrid-img horizontal"
              alt="grid-img"
              src="https://images.unsplash.com/photo-1452830978618-d6feae7d0ffa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            />
            <img
              className="photogrid-img horizontal"
              alt="grid-img"
              src="https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            />
          </div>
          <div className="column">
            <img
              className="photogrid-img vertical"
              alt="grid-img"
              src="https://images.unsplash.com/photo-1445633629932-0029acc44e88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          <div className="column">
            <img
              className="photogrid-img horizontal"
              alt="grid-img"
              src="https://images.unsplash.com/photo-1547115293-cee20f19b938?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1518&q=80"
            />
            <img
              className="photogrid-img horizontal"
              alt="grid-img"
              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            />
          </div>
        </div>

        <div className="home-header-tablet-desktop-photogrid">
          <div className="column">
            <img
              className="photogrid-img vertical "
              alt="grid-img"
              src="https://images.unsplash.com/photo-1501714869488-1e3e64b423d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            />
          </div>
          <div className="column">
            <img
              className="photogrid-img horizontal"
              alt="grid-img"
              src="https://images.unsplash.com/photo-1452830978618-d6feae7d0ffa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            />
            <img
              className="photogrid-img horizontal "
              alt="grid-img"
              src="https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            />
          </div>
          <div className="column">
            <img
              className="photogrid-img vertical"
              alt="grid-img"
              src="https://images.unsplash.com/photo-1445633629932-0029acc44e88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          <div className="column">
            <img
              className="photogrid-img horizontal "
              alt="grid-img"
              src="https://images.unsplash.com/photo-1547115293-cee20f19b938?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1518&q=80"
            />
            <img
              className="photogrid-img horizontal"
              alt="grid-img"
              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            />
          </div>
        </div>
        <div className="photogrid-div four-opacity">
          <div className="photogrid-title w3-animate-opacity">
            {this.props.title}
          </div>
          <div className="photogrid-subheader four-opacity">
            {this.props.subheader}
          </div>
          <a className="photogrid-arrow grow four-opacity" href="/#whatsnew">
            <i className="fas fa-arrow-down fa-2x button" />
          </a>
        </div>
      </div>
    );
  }
}

export default HeaderHome;
