import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import App from "./components/App";
import About from "./components/JS/About";
import Articles from "./components/JS/Articles";
import Footer from "./components/JS/Footer";
import registerServiceWorker from "./registerServiceWorker";

const Root = () => (
  <Router>
    <React.Fragment>
    <Switch>
      <Route component={App} exact path="/" />
      <Route component={About} path="/about" />
      <Route component={Articles} path="/articles" />
    </Switch>
    <Footer />
    </React.Fragment>
  </Router>
)

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();

if (module.hot){
  module.hot.accept();
}