import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ScrollToTop from 'react-router-scroll-top'
import About from "./components/About/About";
import Home from "./components/Home/Home";
import App from "./components/App/App"
import Article from "./components/Articles/IndividualArticle/Article";
import ArticleCatOne from "./components/Articles/ArticleCategories/ArticleCategoryOne";
import ArticleCatTwo from "./components/Articles/ArticleCategories/ArticleCategoryTwo.js";
import ArticleCatThree from "./components/Articles/ArticleCategories/ArticleCategoryThree";
import ArticleCatFour from "./components/Articles/ArticleCategories/ArticleCategoryFour";
import registerServiceWorker from "./registerServiceWorker";

const Root = () => (
  <Router>
    <ScrollToTop>
    <React.Fragment>
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={About} path="/about" />
      <Route component={ArticleCatOne} path="/articlecategory1" />
      <Route component={ArticleCatTwo} path="/articlecategory2" />
      <Route component={ArticleCatThree} path="/articlecategory3" />
      <Route component={ArticleCatFour} path="/articlecategory4" />
      <Route component={Article} path="/article" />
    </Switch>
    </React.Fragment>
    </ScrollToTop>
  </Router>
)

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();

if (module.hot){
  module.hot.accept();
}