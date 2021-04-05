import React from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import { HashRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <NavBar />
      
      <div>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
      </div>
      
      <Footer />
    </Router>
  );
}

export default App;
