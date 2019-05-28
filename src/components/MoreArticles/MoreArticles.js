import React, { Component } from "react";
import "./MoreArticles.css";
import { NavLink } from "react-router-dom";
import { CSSTransitionGroup } from "react-transition-group";

class MoreArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      visibleDesktop: 3,
      currentDesktop: 0,
      visibleTablet: 2,
      currentTablet: 0,
      visibleMobile: 3,
      error: false
    };

    this.loadMoreDesktop = this.loadMoreDesktop.bind(this);
    this.goBackDesktop = this.goBackDesktop.bind(this);
    this.loadMoreTablet = this.loadMoreTablet.bind(this);
    this.goBackTablet = this.goBackTablet.bind(this);
    this.loadMoreMobile = this.loadMoreMobile.bind(this);

  }

  getCategory() {
    switch (this.props.category) {
      case "CATEGORY ONE":
        return "articlecategory1";
      case "CATEGORY TWO":
        return "articlecategory2";
      case "CATEGORY THREE":
        return "articlecategory3";
      case "CATEGORY FOUR":
        return "articlecategory4";
      default:
    }
  }

  loadMoreDesktop() {
    this.setState(prev => {
      return {
        currentDesktop: prev.currentDesktop + 3,
        visibleDesktop: prev.visibleDesktop + 3
      };
    });
  }

  goBackDesktop() {
    this.setState(prev => {
      if (this.state.currentDesktop > 0) {
        return {
          currentDesktop: prev.currentDesktop - 3,
          visibleDesktop: prev.visibleDesktop - 3
        };
      }
    });
  }

  loadMoreTablet() {
    this.setState(prev => {
      return {
        currentTablet: prev.currentTablet + 2,
        visibleTablet: prev.visibleTablet + 2
      };
    });
  }

  goBackTablet() {
    this.setState(prev => {
      if (this.state.currentTablet > 0) {
        return {
          currentTablet: prev.currentTablet - 2,
          visibleTablet: prev.visibleTablet - 2
        };
      }
    });
  }

  loadMoreMobile() {
    this.setState(prev => {
      return {
        currentDesktop: prev.currentDesktop + 3,
        visibleDesktop: prev.visibleDesktop + 3
      };
    });
    var elmnt = document.getElementById("more-articles");
    elmnt.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  componentDidMount() {
    fetch(
      `https://api.unsplash.com/search/photos/?page=1&per_page=20&query=${
        this.props.api
      }&client_id=5b6c80594c0633a69ead9499a7bae3248a6fb73406a95ad97a3f20b6f457579f`
    )
      .then(res => res.json())
      .then(res => {
        this.setState({
          items: res.results
        });
      })
      .catch(error => {
        this.setState({
          error: true
        });
      });
  }
  render() {
    let moreArticlesMobile = (
      <div className="more-articles-div-mobile">
         <div onClick={this.goBackDesktop}>
          {this.state.currentDesktop > 0 && (
            <i className="fas fa-arrow-up fa-lg button" />
          )}
        </div>

        {this.state.items
          .slice(this.state.currentDesktop, this.state.visibleDesktop)
          .map((item, index) => {
            return (
              <NavLink exact activeClassName="" to="/article" key={item.id}>
                <div className="more-article ">
                  <div className="zoom">
                  <img className="more-img" alt="img" src={item.urls.regular} />
                  </div>
                  <div className="more-title">
                    <span className={`button ${this.getCategory()}`}>
                      <strong>{this.props.category}</strong>
                    </span>
                    <p className="more-title-link">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                </div>
              </NavLink>
            );
          })}
        <div onClick={this.loadMoreMobile}>
          {this.state.visibleDesktop < this.state.items.length && (
            <i className="fas fa-arrow-down fa-lg button" />
          )}
        </div>
      </div>
    );

    let moreArticlesTablet = (
      <div className="more-articles-div-tablet">
        <div onClick={this.goBackTablet}>
          {this.state.currentTablet > 0 && (
            <i className="fas fa-arrow-left fa-lg button" />
          )}
        </div>
        {this.state.items
          .slice(this.state.currentTablet, this.state.visibleTablet)
          .map((item, index) => {
            return (
              <NavLink exact activeClassName="" to="/article" key={item.id}>
                <div className="more-article">
                <div className="zoom">
                  <img className="more-img" alt="img" src={item.urls.regular} />
                  </div>
                  <div className="more-title">
                    <span className={`button ${this.getCategory()}`}>
                      <strong>{this.props.category}</strong>
                    </span>
                    <p className="more-title-link">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                </div>
              </NavLink>
            );
          })}

        <div onClick={this.loadMoreTablet}>
          {this.state.visibleTablet < this.state.items.length && (
            <i className="fas fa-arrow-right fa-lg button" />
          )}
        </div>
      </div>
    );

    let moreArticlesDesktop = (
      <div className="more-articles-div-desktop">
        <div onClick={this.goBackDesktop}>
          {this.state.currentDesktop > 0 && (
            <i className="fas fa-arrow-left fa-lg button" />
          )}
        </div>

        {this.state.items
          .slice(this.state.currentDesktop, this.state.visibleDesktop)
          .map((item, index) => {
            return (
              <NavLink exact activeClassName="" to="/article" key={item.id}>
                <div className="more-article ">
                  <div className="zoom">
                  <img className="more-img" alt="img" src={item.urls.regular} />
                  </div>
                  <div className="more-title">
                    <span className={`button ${this.getCategory()}`}>
                      <strong>{this.props.category}</strong>
                    </span>
                    <p className="more-title-link">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                </div>
              </NavLink>
            );
          })}
        <div onClick={this.loadMoreDesktop}>
          {this.state.visibleDesktop < this.state.items.length && (
            <i className="fas fa-arrow-right fa-lg button" />
          )}
        </div>
      </div>
    );
    return (
      <div  id="more-articles" className="more-articles top-border">
        <div className="link-header more-articles-title">YOU MAY ALSO LIKE</div>
        {moreArticlesMobile}
        {moreArticlesTablet}

        <CSSTransitionGroup
          transitionName="location-cards"
          transitionAppear={true}
          transitionAppearTimeout={400}
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}
        >
          {moreArticlesDesktop}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default MoreArticles;
