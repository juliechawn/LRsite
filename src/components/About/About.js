import React from "react";
import Footer from "../Footer/Footer.js";
import StickyNav from "../StickyNav/StickyNav.js";
import TopArticles from "../TopArticles/TopArticles";
import Contact from "../CommentsContact/Contact";
import PageTitle from "../PageTitle/PageTitle"
import "./About.css";

class About extends React.Component {
  render() {
    return (
      <div id="about">
        <StickyNav />
        <div className="page-body two-opacity">
          <PageTitle pagetitle={"about lauren"} />
          <div className="about-body">
            <div className="about-div">
              <div className="about-mobile-photogrid">
                <div className="about-column">
                  <img
                    className="about-photogrid-img about-horizontal"
                    alt="grid-img"
                    src="https://images.unsplash.com/photo-1506836467174-27f1042aa48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"
                  />
                </div>

                <div className="about-column">
                  <div className="about-row">
                    <img
                      className="about-photogrid-img about-vertical"
                      alt="grid-img"
                      src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                    />
                    <div className="about-column-sm">
                      <img
                        className="about-photogrid-img about-horizontal-sm"
                        alt="grid-img"
                        src="https://images.unsplash.com/photo-1452830978618-d6feae7d0ffa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                      />
                      <img
                        className="about-photogrid-img about-horizontal-sm"
                        alt="grid-img"
                        src="https://images.unsplash.com/photo-1512546321483-c0468b7b8a95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="about-tablet-photogrid">
                <div className="about-column">
                  <img
                    className="photogrid-img about-horizontal"
                    alt="grid-img"
                    src="https://images.unsplash.com/photo-1506836467174-27f1042aa48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"
                  />
                </div>
                <div className="about-column">
                  <div className="about-row">
                    <img
                      className="about-photogrid-img about-vertical"
                      alt="grid-img"
                      src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                    />
                    <div className="about-column-sm">
                      <img
                        className="about-photogrid-img about-horizontal-sm"
                        alt="grid-img"
                        src="https://images.unsplash.com/photo-1452830978618-d6feae7d0ffa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                      />
                      <img
                        className="about-photogrid-img about-horizontal-sm"
                        alt="grid-img"
                        src="https://images.unsplash.com/photo-1512546321483-c0468b7b8a95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="about-desktop-photogrid">
                <div className="about-column">
                  <img
                    className="photogrid-img about-vertical"
                    alt="grid-img"
                    src="https://images.unsplash.com/photo-1506836467174-27f1042aa48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"
                  />
                </div>
                <div className="about-column">
                  <img
                    className="photogrid-img about-horizontal"
                    alt="grid-img"
                    src="https://images.unsplash.com/photo-1452830978618-d6feae7d0ffa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  />
                  <div className="about-row">
                    <img
                      className="photogrid-img about-vertical-sm"
                      alt="grid-img"
                      src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                    />
                    <img
                      className="photogrid-img about-vertical-sm"
                      alt="grid-img"
                      src="https://images.unsplash.com/photo-1512546321483-c0468b7b8a95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
                    />
                  </div>
                </div>
              </div>
              <div className="caption">
                <strong>
                  caption caption caption caption caption caption caption
                  caption caption caption caption caption
                </strong>
              </div>

              <div className="text-div-about">
                <p className="text article-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="text article-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div className="top-article-div">
              <Contact />
              <TopArticles />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
