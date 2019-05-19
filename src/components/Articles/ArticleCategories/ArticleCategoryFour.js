import React, { Component } from "react";
import "./ArticleCategory.css";
import Footer from "../../Footer/Footer.js";
import StickyNav from "../../StickyNav/StickyNav.js";
import ArticlePreview from "../ArticlePreview/ArticlePreview";
import MoreArticles from "../../MoreArticles/MoreArticles"

class ArticleCategoryFour extends Component {
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
        console.log(res)
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
      <div id="article-category">
        <StickyNav />
        <div className="page-body">
          <div className="article-category-body">
            <ArticlePreview
              category={"CATEGORY FOUR"}
              date={"JANUARY 1, 2019"}
              title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
              image={
                "https://images.unsplash.com/photo-1444427169197-de497742b62d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
              }
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
            <ArticlePreview
              category={"CATEGORY FOUR"}
              date={"JANUARY 1, 2019"}
              title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
              image={
                "https://images.unsplash.com/photo-1516897106004-1ed8b96ea408?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80"
              }
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
            <ArticlePreview
              category={"CATEGORY FOUR"}
              date={"JANUARY 1, 2019"}
              title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
              image={
"https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"              }
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
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
        <MoreArticles 
        api={"working"}
        category={"CATEGORY FOUR"}/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ArticleCategoryFour;
