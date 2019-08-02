import Home from './components/Home';
import Randomizer from './components/Randomizer/Randomizer';
import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="main-container">
        <Sidebar/>
        <div className="right-container">
          <Route exact path="/" component={Home} />
          <Route path="/random" component={Randomizer} />
        </div>
      </div>
    </Router>
  );
}

function Sidebar() {
  return (
    <div className="side-bar">
      <Link to='random'>Randomizer</Link>
    </div>
  );
}

export default App;
