import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import NavtabComp from "./components/NavtabComp";
import FooterComp from "./components/FooterComp";


function App() {
  return (

    <div>
      <div id="wrap">
        <div id="main" className="clear-top"></div>
        <Router>
          <div>
            <NavtabComp />
            <Route exact path="/" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </div>
        </Router>
      </div>
      <FooterComp />
    </div>
  
  );
}

export default App;
