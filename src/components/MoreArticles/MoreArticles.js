import React, { Component } from "react";
import "./MoreArticles.css";
import { NavLink } from "react-router-dom";

class MoreArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      visible: 4,
      error: false
    };

    this.loadMore = this.loadMore.bind(this);
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

  loadMore() {
    this.setState(prev => {
      return { visible: prev.visible + 1};
    });
  }

  componentDidMount() {
    fetch(
      `https://api.unsplash.com/search/photos/?page=1&per_page=20&query=${this.props.api}&client_id=5b6c80594c0633a69ead9499a7bae3248a6fb73406a95ad97a3f20b6f457579f`
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
    return (
      <div className="more-articles">
      <div className="link top-articles-header">YOU MAY ALSO LIKE</div>
      {/* <div className="cnt-reading top-articles-header">you may also like</div> */}
        <div className="more-articles-div top-border">
          {this.state.items.slice(0, this.state.visible).map((item, index) => {
            return (
              <NavLink exact activeClassName="" to="/article" key={item.id}>
                <div className="more-article">
                  <img className="more-img" alt="img" src={item.urls.regular} />
                  <div className="more-title">
                  <span className={`button ${this.getCategory()}`}><strong>{this.props.category}</strong></span> 
                  <p className="more-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MoreArticles;
