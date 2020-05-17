import React from 'react';
import About from "./pages/about"
import Portfolio from "./pages/portfolio"
import NavTab from "./components/NavTab";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
  <div> 
   <Router>
    <div>
      <NavTab />
      <Route exact path="/" component={About} />
      <Route exact path="/portfolio" component={Portfolio} />
    </div>
  </Router>
   
<About />
    
    </div>
  );
}

export default App;
