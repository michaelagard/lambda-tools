import Home from './components/Home/Home';
import Randomizer from './components/Randomizer/Randomizer';
import Sidebar from './components/Sidebar/Sidebar';
import React from "react";
import './css/App.css';
import './css/css-reset.css';
import { BrowserRouter as Router, Route} from "react-router-dom";

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

export default App;
