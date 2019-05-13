import React, { Component } from "react";
import "./MoreArticles.css";
import { NavLink } from "react-router-dom";

class MoreArticles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      visible: 3,
      error: false
    };

    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState(prev => {
      return { visible: prev.visible + 1 };
    });
  }

  componentDidMount() {
    fetch(
      "https://api.unsplash.com/search/photos/?page=1&per_page=20&query=mother&client_id=5b6c80594c0633a69ead9499a7bae3248a6fb73406a95ad97a3f20b6f457579f"
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
        <div className="more-articles-div">
          {this.state.items.slice(0, this.state.visible).map((item, index) => {
            return (
              <NavLink exact activeClassName="" to="/article" key={item.id}>
                <div className="more-article">
                  <img className="more-img" alt="img" src={item.urls.regular} />
                  <h2 className="more-title">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </h2>
                </div>
              </NavLink>
            );
          })}
        </div>
        <div className="see-more-button-div">
          {this.state.visible < this.state.items.length && (
            <span onClick={this.loadMore} className="see-more-button cnt-reading">
              see more articles
              <span className="wave">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </span>
            </span>
          )}
        </div>
      </div>
    );
  }
}

export default MoreArticles;
