import React from "react";
import { Box, Text, Heading } from "gestalt";
import { NavLink } from "react-router-dom";

// import "./Navbar.css";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, };
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false, toggleClass: true });
  }

  render() {
    const { visible } = this.state;
    return (
      <header id="mobile-header">
        <NavLink height={100} activeClassName="active" exact to="/">
          <h1>mama milk</h1>
        </NavLink>
        <nav>
          <div
            className="menu-btn"
            onClick={() => this.setState({ visible: !this.state.visible })}
          >
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
          </div>
          { visible &&
              <div id="menu">
                <NavLink activeClassName="active" to="/articles">
                  <p>Articles</p>
                </NavLink>
                <NavLink activeClassName="active" to="/about">
                  <p>About</p>
                </NavLink>
              </div>
          }
        </nav>
      </header>
    );
  }
}

export default Menu;

// header {
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
//   align-items: baseline;
//   width: 100%;
//   z-index: 1;
//   /* min-height: 10vh; */
// }

// nav {
//   display: flex;
//   flex-direction: column;
// }

// .menu-btn {
//   position: relative;
//   display: inline-block;
//   cursor: pointer;
//   z-index: 1;
// }

// .bar1, .bar2, .bar3 {
//   width: 35px;
//   height: 3px;
//   background-color: #333;
//   margin: 6px 0;
//   transition: 0.4s;
// }

// .change .bar1 {
//   -webkit-transform: rotate(-45deg) translate(-9px, 6px);
//   transform: rotate(-45deg) translate(-9px, 6px);
// }

// .change .bar2 {opacity: 0;}

// .change .bar3 {
//   -webkit-transform: rotate(45deg) translate(-8px, -8px);
//   transform: rotate(45deg) translate(-8px, -8px);
// }

// #menu {
//   background: blue;
//   height: 100vh;
//   widows: 100vw;
//   position: absolute;
// }
