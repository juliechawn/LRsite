import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import App from "./components/App/App";
import About from "./components/About/About";
import Article from "./components/Articles/IndividualArticle/Article";
import ArticleCat from "./components/Articles/ArticleCategories/ArticleCategory";
import registerServiceWorker from "./registerServiceWorker";

const Root = () => (
  <Router>
    <React.Fragment>
    <Switch>
      <Route component={App} exact path="/" />
      <Route component={About} path="/about" />
      <Route component={ArticleCat} path="/articlecategory" />
      <Route component={Article} path="/article" />
    </Switch>
    </React.Fragment>
  </Router>
)

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();

if (module.hot){
  module.hot.accept();
}