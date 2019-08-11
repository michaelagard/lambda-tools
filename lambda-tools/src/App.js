import Home from './components/Home/Home';
import Randomizer from './components/Randomizer/Randomizer';
import Sidebar from './components/Sidebar/Sidebar';
import React from "react";
// import './css/App.css';
import './css/css-reset.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Wrapper, RightContainer} from './App.styled';

function App() {
  return (
    <Router>
      <Wrapper>
        <Sidebar/>
        <RightContainer>
          <Route exact path="/" component={Home} />
          <Route path="/random" component={Randomizer} />
        </RightContainer>
      </Wrapper>
    </Router>
  );
}

export default App;
